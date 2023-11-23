import React from 'react'
import './CategoryCard.css'


// differnce between ts and js is that you have to declare type here
// like in props you have to declare datatype not like in react js
// we have declare the object data which is coming from props in categoriesSlider as custom data type
// Category is custom data type here
interface Category{
    name: string;
    path: string;
    bgcolor: string;
}

function CategoryCard(data: Category) {
    const {name, path, bgcolor} = data
  return (
    <div className='categorycard' >
        <p style={{fontSize: "18px"}}> {name} </p>    
    </div>
  )
}

export default CategoryCard