import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  
  const [newItemName, setNewItemName] = useState("")
  const [newCategoryName, setNewCategoryName] = useState("Produce")

  const [newItemData, setNewItemData] = useState( {
    name: "",
    category: "Produce"
  })
  
  function handleChange(event) {
    setNewItemData({
      ...newItemData, 
      [event.target.name]:event.target.value
    })
  }


  function handleSubmit(event) {
    event.preventDefault()
    
    const newItem = {
      id: uuid(),
      ...newItemData
    } 
    props.onItemFormSubmit(newItem)
    // console.log(newItem)
  }
  
  // 

  return (
    <form onSubmit ={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange ={handleChange} type="text" name="name" value={newItemData.name}/>
      </label>

      <label>
        Category:
        <select onChange ={handleChange} name="category" value={newItemData.category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
