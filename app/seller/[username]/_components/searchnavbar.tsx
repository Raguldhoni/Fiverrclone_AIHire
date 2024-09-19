"use client";

import logo from "../../../../public/img/logo/logo.png";
import '../../../../public/sass/_layout/_banner.scss';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import Select from "react-select";

import { SearchInput } from "../../../../app/(dashboard)/_components/search-input";
import { Dialog, DialogTrigger, DialogClose, DialogContent } from "../../../../components/ui/dialog";
import { TooltipProvider } from "../../../../app/(dashboard)/_components/tooltip-provider";
// import { clearFilters } from "../../../../../app/(dashboard)/_components/navbar";
import { Button } from "@/components/ui/button";
import router from "next/router";
import { ListItem } from "../../../../app/(dashboard)/_components/list-item";
import { Filter, Heart, MessageCircle } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter, useSearchParams } from "next/navigation";
import { Loading } from "@/components/auth/loading";
import { currentUser, UserButton } from "@clerk/nextjs";
//import ConnectStripe from "../../../../../app/(dashboard)/_components/connect-stripe";
 import { Separator } from "../../../../components/ui/separator";
import ConnectStripe from "@/app/(dashboard)/_components/connect-stripe";


const Sbanner = () => {
  const [menuFixed, setMenuFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const path = usePathname()
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const categories = useQuery(api.categories.get);
  const currentUser = useQuery(api.users.getCurrentUser);
  const favorites = searchParams.get("favorites");
  const router = useRouter();
  const clearFilters = () => {
    router.push("/");
  }
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    });
  }, []);
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#0D47A1",
      color: "#ffffff",
      minWidth: "130px",
      padding: "4px 10px",
      borderRadius: "50px",
      border: "1px solid #DFE0E4",
      boxShadow: "0",
      "&:hover": {
        borderColor: "#DFE0E4",
      },
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "4px 10px",
      textAlign: "left",
      backgroundColor: isSelected ? "#0D47A1" : "white",
      //   "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      color: "#fff",
      height: "auto",
    }),
  };
  const handleCloseSearch = (e: MouseEvent): void => {
    e.preventDefault();
    setSearchOpen(false);
  };
  if (categories === undefined) {
    return <Loading />;
  }
  const onClickInbox = () => {
    router.push("/inbox");
  }
  const isActiveMenu = (submenus: any) => {
    return submenus?.find((item: any) => item?.url === path)
  }
  return (
    <section className="banner__section bg__img1 ralt overhid ">
      {/* <!-- Header Here --> */}
      
        <div className="aihire__headertop ">
          <div className="container ">
            <div className="haderbar__top d-flex align-items-left  justify-content-between ">
              <div className="logo__left d-flex align-items-center me-4">
                <Link href="/" className="top__logo mx-100 my-30 col-sm-6">
                  <Image src={logo} alt="logo" />
                </Link>
                <Link href="/seller/raguldhoni/how-work" className="pra mdnone inter fw-40 mx-100 my-30 col-sm-2">
                  How It Works
                </Link>
                <Link href="/seller/raguldhoni/about" className="pra mdnone inter fw-40 mx-100 my-30">
                  Why AIHire
                </Link>
              </div> 
              <Separator/> 
              <div className="header__topsearch d-flex align-items-center col-sm-9">

                <SearchInput />
                

                <Dialog>
                  <DialogTrigger>
                    <TooltipProvider
                      text="Filter"
                    >
                      <Filter className="mx-100 my-30" />
                    </TooltipProvider>
                  </DialogTrigger>
                  <DialogContent className="cmn--btn ">
                    {/* <ScrollArea className="rounded-md border"> */}
                    <DialogClose>
                      <>
                        <Button
                          onClick={clearFilters}
                          variant="ghost"
                          className="text-black"
                          disabled={!filter}
                        >
                          Clear filters
                        </Button>
                        {categories.map((category, index) => (
                          <div key={index} className="p-2 bg-white rounded shadow-sm text-black">
                            <h3 className="fs-5 fw-semibold mb-1 text-black">{category.name}</h3>
                            <div className="mb-2 text-black">
                              {category.subcategories.map((subcategory, subIndex) => (
                                <ListItem
                                  key={subIndex}
                                  title={subcategory.name}
                                  subcategory={subcategory}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    </DialogClose>
                  </DialogContent>
                  {/* </ScrollArea> */}
                </Dialog>

                {currentUser && (
                  <>
                    <TooltipProvider text="Favorites">
                      <Button
                        asChild
                        variant={favorites ? "secondary" : "ghost"}
                        size="lg"
                        className="p-0 mx-100 my-30 "
                      >
                        <Link
                          href={{
                            pathname: "/",
                            query: favorites ? {} : { favorites: true }
                          }}
                          className="p-0 "
                        >
                          <Heart className={favorites ? "fill-black" : ""} />
                        </Link>
                      </Button>
                    </TooltipProvider>

                    {/* <TooltipProvider text="Inbox" >
                      <Button onClick={onClickInbox} variant={"ghost"} className="mx-100 my-30">
                        <MessageCircle />
                      </Button>
                    </TooltipProvider> */}

                    <Button onClick={() => router.push(`/seller/${currentUser.username}/manage-gigs`)} className="text-nowrap cmn--btn align-items-center bi bi-search fz-12 col-sm-3 text-white hover-text-danger" >
                      Switch To Selling
                    </Button>
                    {!currentUser.stripeAccountSetupComplete &&
                            <ConnectStripe />
                        }
                        <UserButton /> 
                  </>
                )}

              </div>
              <Separator /> 
            </div>
          </div>
        </div>
        

     

      
      
    </section>
  );
};

export default Sbanner;
