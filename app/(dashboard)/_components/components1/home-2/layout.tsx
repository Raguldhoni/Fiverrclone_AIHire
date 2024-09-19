
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const HomeLayout = ( {children}: DashboardLayoutProps) => {
    return (
        
        
        <main className="h-full">
            
            {children}
        </main>
    );
}

export default HomeLayout;