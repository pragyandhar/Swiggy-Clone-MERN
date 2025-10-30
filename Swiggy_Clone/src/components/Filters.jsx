import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Filters = () => {
  const filterItems = [
    { label: "Fast Delivery" },
    { label: "New on Swiggy" },
    { label: "Ratings 4.0+" },
    { label: "Pure Veg" },
    { label: "Offers" },
    { label: "Rs. 300-Rs. 600" },
    { label: "Less than Rs. 300" },
  ];
  const allRestaurants = Apicalling()
  const [allRestData,setAllRestData] = useState(allRestaurants);

  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)

  useEffect(()=>{
    if(allRestaurants && allRestaurants.length){
      setAllRestData(allRestaurants)
    }
  },[allRestaurants])

  function handleTopRest(allRestaurants){
    setAllRestData( allRestaurants.filter((rest)=> rest.info.avgRating>4.2) )
    setIsClicked1(true) 
    setIsClicked2(false) 
  }
  function handleReset(allRestaurants){
    setAllRestData(allRestaurants)
    setIsClicked1(false)
    setIsClicked2(true) 
  }

  return (
    <div className="flex items-center gap-3 overflow-x-auto py-3 my-4 mx-4">
      <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer" >
        Filter
        <FiFilter size={18} />
      </button>

      <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer">
        Sort By
        <IoIosArrowDown size={16} />
      </button>

      {filterItems.map((item, idx) => (
        <button
          onClick={() => handleTopRest(allRestaurants)}
          key={idx}
          className={isClicked1?"bg-amber-200 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer" : "border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer"}
        >
          {item.label}
        </button>
      ))}

      <button className={isClicked2?"bg-amber-200 flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer" : "flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer"} onClick={()=>handleReset(allRestaurants)}>
        Reset
        <IoIosArrowDown size={16} />
      </button>
    </div>
  );
};

export default Filters;
