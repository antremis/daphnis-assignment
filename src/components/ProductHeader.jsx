import { useItemContext } from "../context/ItemContextProvider"
import "./ProductHeader.css"

const ProductHeader = () => {
    const {itemDescription, filters, removeFilter, removeAllFilters} = useItemContext()
    return(
        <div className = "product-header">
            <h1 className = "product-name">{itemDescription?.name}</h1>
            <p className = "product-nums">({itemDescription?.num_of_items} products)</p>
            {filters?.map((filt, index) => {
                return(
                    <p key = {index} className = "product-filters" onClick={() => {removeFilter(index)}}>
                        {filt.name} &nbsp;&nbsp;x
                    </p>
                )
            })}
            {
                filters.length > 0
                ? <p className = "remove-all" onClick = {removeAllFilters} >Remove All</p>
                : null
            }
        </div>
    )
}

export default ProductHeader;