import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items , setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  // const [newItemData, setNewItemData] = useState( {
  //   name: "",
  //   category: "Produce"
  // })


  function onItemFormSubmit(newItem) {
    // const updatedItems = [...items, newItem]
    setItems([...items, newItem])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchInput(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

   const filteredItemsToDisplay = itemsToDisplay.filter((item) => {
    if (searchInput === "") return true;

    return item.name.toUpperCase().includes(searchInput.toUpperCase()) ;
   })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchInput} />
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
