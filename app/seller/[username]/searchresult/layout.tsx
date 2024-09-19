
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";
import Sbanner from "../_components/searchnavbar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const SearchLayout = ( {children}: DashboardLayoutProps) => {
    return (
        
        
        <main className="h-full">
            <Sbanner />
            {children}
        </main>
    );
}

export default SearchLayout;