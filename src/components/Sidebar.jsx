import { useState } from "react";
import { useItemContext } from "../context/ItemContextProvider";
import "./Sidebar.css"
import SidebarCategory from "./SidebarCategory";

const Sidebar = () => {
    const {categories} = useItemContext();

    return(
        <div id = "sidebar">
            {
                Object.keys(categories).map((title, index) => (
                    <SidebarCategory key = {index} title = {title} items = {categories[title]} />
                ))
            }
        </div>
    )
}

export default Sidebar;