import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Filters = () => {
  const filterItems = [
    { label: "Fast Delivery" },
    { label: "New on Swiggy" },
    { label: "Ratings 4.0+" },
    { label: "Pure Veg" },
    { label: "Offers" },
    { label: "Rs. 300–Rs. 600" },
    { label: "Less than Rs. 300" },
  ];

  return (
    <div className="flex items-center gap-3 overflow-x-auto py-3 my-4 mx-4">
      <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer">
        Filter
        <FiFilter size={18} />
      </button>

      <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer">
        Sort By
        <IoIosArrowDown size={16} />
      </button>

      {filterItems.map((item, idx) => (
        <button
          key={idx}
          className="border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
