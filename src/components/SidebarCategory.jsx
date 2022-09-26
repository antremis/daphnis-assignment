import { useItemContext } from "../context/ItemContextProvider";
import "./SidebarCategory.css"

const SidebarCategory = ({title, items}) => {
    const {toggleFilter} = useItemContext();

    return(
        <div className = "sidebar-category">
            <p className = "sidebar-category-header">{title}</p>
            <ul>
                {/* {items.map((item, index) =>
                    <li key = {index}
                    className = {item.active ? "sidebar-category-item selected-filter" : "sidebar-category-item"}
                    onClick={() => toggleFilter(title, index)} >{item.name}</li>
                )} */}
                {items.map((item, index) =>{
                    if(item.active) return (<li key = {index} className = "sidebar-category-item selected-filter" onClick={()=>toggleFilter(title, index)} ><p>{item.name}</p><p>&nbsp;&nbsp;&nbsp;x</p></li>)
                    else return (<li key = {index} className = "sidebar-category-item" onClick={()=>toggleFilter(title, index)} >{item.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default SidebarCategory;