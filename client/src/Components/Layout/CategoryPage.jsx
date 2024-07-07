  import React, { useEffect } from 'react'
  import BestCategories from '../Landing/BestCategories'
  // import { allListings } from './allListings.js'
  import ListingCard from '../Landing/ListingCard.jsx'
  import { Link, useParams } from 'react-router-dom'
  import { useDispatch, useSelector } from "react-redux";
  import { getAllDesignsAction } from "../../redux/actions/designActions.js";

  const CategoryPage = () => {
    const {category} = useParams()
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getAllDesignsAction());
      }, []);

      const { allListings } = useSelector((state) => state.designReducer);

    const filteredCategroy = allListings.filter((items)=>{
      return items.category.toLowerCase().replace(/\s+/g, "-") === category
    })
    return (
      <div>
        <BestCategories />
        <div className="grid grid-cols-3 place-items-center mobile:grid-cols-1">
          {category === "all"
            ? allListings.map((item, index) => {
                return <Link key={index} to={`/design/${item._id}`}>
                <ListingCard key={index} item={item} />
                
                </Link> 
              })
            : filteredCategroy.map((item, index) => {
              return <Link key={index} to={`/design/${item.id}`}>
                <ListingCard key={index} item={item} />
                </Link> 

              })}
        </div>
      </div>
    ) 
  }

  export default CategoryPage