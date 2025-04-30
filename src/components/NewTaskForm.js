import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); // St
  const [category, setCategory] = useState(categories[1]); 

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newTask = { text, category };  

    onTaskFormSubmit(newTask);  

    // Reset form fields
    setText("");
    setCategory(categories[1]);  
  };

  
  const filteredCategories = categories.filter((cat) => cat !== "All");

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="task-details">New Task Details</label>
      <input
        id="task-details"  // Link the label with the input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}  // Update state with the input value
        placeholder="New task details"
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"  // Link the label with the select
        value={category}
        onChange={(e) => setCategory(e.target.value)}  // Update the selected category
      >
        {filteredCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
