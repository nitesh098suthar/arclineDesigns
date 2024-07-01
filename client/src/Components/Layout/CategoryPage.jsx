  import React from 'react'
  import BestCategories from '../Landing/BestCategories'
  import { allListings } from './allListings.js'
  import ListingCard from '../Landing/ListingCard.jsx'
  import { useParams } from 'react-router-dom'
  const CategoryPage = () => {
    const {category} = useParams()
    const filteredCategroy = allListings.filter((items)=>{
      return items.category.toLowerCase().replace(/\s+/g, "-") === category;
    })
    return (
      <div>
        <BestCategories />
        <div className="grid grid-cols-3 place-items-center">
          {category === "all"
            ? allListings.map((item, index) => {
                return <ListingCard key={index} item={item} />;
              })
            : filteredCategroy.map((item, index) => {
                return <ListingCard key={index} item={item} />;
              })}
        </div>
      </div>
    ); 
  }

  export default CategoryPage
