import {useState, useContext, createContext} from 'react';

const ItemContext = createContext();

const ItemContextProvider = ({children}) => {
    const init_categories = {
        "Related Category": [
            {name: "Paracetamol Tablets", active: false}, 
            {name: "Paracetamol Syrup", active: false}, 
            {name: "Paracetamol Powder", active: false},
            {name: "Aceclofenac", active: false},
            {name: "Magaladrate Simethicone Oral Suspension", active: false},
            {name: "Medenamic Paracetamol Syrup", active: false},
        ],
        "Related Brands": [
            {name: 'Cipmol Paracetamol', active: false},
            {name: "Pandal Paracetamol Tablets", active: false},
            {name: "Combiflam", active: false},
            {name: "Crocin Tablets", active: false},
            {name: "Calpol Paracetamol Tablets", active: false},
            {name: "Sumo Tablets", active: false},
        ],
        "Buissness Type": [
            {name: "Wholesaler", active: false},
            {name: "Manufacturer", active: false},
            {name: "Retailer", active: false},
            {name: "Explorer", active: false},
        ],
        "Strengths": [
            {name: "500mg", active: false},
            {name: "650mg", active: false},
        ],
        "Manufacturers": [
            {name: "Intas Pharmaceutical Ltd", active: false},
            {name: "Alkem Laboratories Ltd", active: false},
        ],
        "Prescription/Non Prescription": [
            {name: "Intas Pharmaceutical Ltd", active: false},
            {name: "Alkem Laboratories Ltd", active: false},
        ]
    };
    const [items, setItems] = useState([
        {
            imgsrc: "",
            name: "Favipiravir 400mg (Fabiflu) Tablets",
            price: "Rs 1,775",
            manufacturer: "Glenmark Pharmaceutical Limited",
            location: "PARVAT PATIYA, SURAT, GUJRAT",
            contact: ""
        },
        {
            imgsrc: "",
            name: "Favipiravir 400mg (Fabiflu) Tablets",
            price: "Rs 1,775",
            manufacturer: "Glenmark Pharmaceutical Limited",
            location: "PARVAT PATIYA, SURAT, GUJRAT",
            contact: ""
        },
        {
            imgsrc: "",
            name: "Favipiravir 400mg (Fabiflu) Tablets",
            price: "Rs 1,775",
            manufacturer: "Glenmark Pharmaceutical Limited",
            location: "PARVAT PATIYA, SURAT, GUJRAT",
            contact: ""
        },
        {
            imgsrc: "",
            name: "Favipiravir 400mg (Fabiflu) Tablets",
            price: "Rs 1,775",
            manufacturer: "Glenmark Pharmaceutical Limited",
            location: "PARVAT PATIYA, SURAT, GUJRAT",
            contact: ""
        },
        {
            imgsrc: "",
            name: "Favipiravir 400mg (Fabiflu) Tablets",
            price: "Rs 1,775",
            manufacturer: "Glenmark Pharmaceutical Limited",
            location: "PARVAT PATIYA, SURAT, GUJRAT",
            contact: ""
        },
        {
            imgsrc: "",
            name: "Favipiravir 400mg (Fabiflu) Tablets",
            price: "Rs 1,775",
            manufacturer: "Glenmark Pharmaceutical Limited",
            location: "PARVAT PATIYA, SURAT, GUJRAT",
            contact: ""
        },
    ]);
    const [itemDescription, setItemDescription] = useState({name: "Paracetamol", num_of_items: 128});
    const [filters, setFilters] = useState([]);
    const [categories, setCategories] = useState(init_categories);

    const removeFilter = (index) => {
        const new_filter = filters.filter((item, i) => i != index);
        let new_categories = {...categories};
        new_categories[filters[index]["parent"]][filters[index]["index"]].active = false
        setFilters(new_filter);
        setCategories(new_categories);
    }

    const removeAllFilters = () => {
        setFilters([]);
        setCategories(init_categories);
    }

    const toggleFilter = (title, index) => {
        let new_categories = {...categories};
        if(new_categories[title][index]["active"]){
            const new_filter = filters.filter((item) => (item.name != new_categories[title][index].name));
            setFilters(new_filter);
        }
        else{
            filters.push({name: new_categories[title][index].name, parent: title, index});
        }
        new_categories[title][index].active = !new_categories[title][index].active;
        setCategories(new_categories);
    }

    return(
        <ItemContext.Provider value={{items, itemDescription, filters, categories, removeFilter, removeAllFilters, toggleFilter}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider;
export const useItemContext = () => (useContext(ItemContext));