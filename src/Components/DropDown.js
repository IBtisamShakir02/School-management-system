import React, { useState } from "react";

const DropDown = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const catagories = props.categories || [];
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="block w-full px-4 py-1 border outline-none rounded-[0.25rem] shadow-sm"
      >
        <option value="" disabled>
          {props.lable}
        </option>
        {catagories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
