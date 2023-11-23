import { useState } from "react"
import downarrow from "../utils/down-arrow.png"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setShowIndex}) => { 

  const handleClick = () => {
      setShowIndex()
  }

  return (
    <>
    {/* // Accordion Header */}
    <div className="shadow-lg font-bold text-gray-700 text-base flex w-6/12 justify-between items-center p-5 m-auto my-5" onClick={handleClick}>
      <p>{data.title} ({data.title.length})</p>
      <img className="w-6 h-6" src={downarrow} alt="" />
    </div>

    {/* // Accordion ItemList */}
    {showItems && <ItemList key={data?.itemCards?.card?.info?.id} items={data.itemCards} />} 
    </>
  )
}

export default RestaurantCategory
