import { useState } from "react";
import FeatherIcon from "feather-icons-react"
const CatagoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isCat, setIsCat] = useState(false);


  function dropdownHandler() {
    setIsOpen(!isOpen);
  }
  function catagoryHandler() {
    setIsCat(!isCat);
}
  const tempData = [
    
    
    {
      id: 1,
      name: "pop",
    },
    {
      id: 2,
      name: "rock",


    },
  ];
  
  

  return (
    <div>
      <div onClick={dropdownHandler} className="bg-catColor-200 text-2xl flex justify-between font-semibold text-white items-center">
        <span>Catagory</span>
        <FeatherIcon icon="more-horizontal" />
      </div>
      {isOpen &&
        tempData.map((item, index) => (
          <ul key={index}>
            <li onClick={catagoryHandler}>{item.name}</li>
            {isCat &&  <span>Hello</span>}
          </ul>
        ))}
    </div>
  );
};

export default CatagoryDropdown;
