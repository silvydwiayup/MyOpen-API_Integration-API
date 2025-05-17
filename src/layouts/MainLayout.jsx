import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./MainLayout.css";
import Top_Navbar from "../components/top_navbar/Top_Navbar";

const MainLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="app-layout">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`main-content-main-layout ${isCollapsed ? "collapsed" : "expanded"}`}>
                <Top_Navbar/>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
