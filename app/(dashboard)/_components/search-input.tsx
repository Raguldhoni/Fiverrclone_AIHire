"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useState, useEffect } from "react";

interface SearchInputProps {
  username: string;
}

export const SearchInput = ({ username }: SearchInputProps) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fetch suggestions based on the current input value using useQuery
  const suggestionsData = useQuery(api.gigs.getGigTitles, { search: value });

  // Log the suggestionsData to verify if it's being fetched
  useEffect(() => {
    console.log("Fetched suggestions:", suggestionsData); // Debugging log
    if (suggestionsData && Array.isArray(suggestionsData)) {
      setSuggestions(suggestionsData);
    }
  }, [suggestionsData]);

  // Control showing suggestions based on value and suggestions
  useEffect(() => {
    setShowSuggestions(value.length > 0 && suggestions.length > 0);
  }, [suggestions, value]);

  // Handle input change and show suggestions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setShowSuggestions(inputValue.length > 0 && suggestions.length > 0); // Show suggestions if there's an input value and suggestions exist
  };

  // Handle search submission
  const handleSubmit = () => {
    const url = qs.stringifyUrl({
      url: `/seller/${username}/searchresult`,
      query: {
        search: value,
      },
    }, { skipEmptyString: true, skipNull: true });
    router.push(url);
    setShowSuggestions(false); // Hide suggestions after search
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="d-flex flex-column w-100 position-relative">
      <div className="d-flex w-100 position-relative">
        <Search className="position-absolute top-50 start-0 translate-middle-y text-muted w-4 h-4" />
        <Input
          className="form-control ps-5"
          placeholder="Search gigs..."
          onChange={handleChange}
          value={value}
        />
        <Button onClick={handleSubmit} variant="secondary" className="ms-2">
          Search
        </Button>
      </div>
      {/* Render suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="list-group search-dropdown">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
