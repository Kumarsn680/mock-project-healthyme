"use client"
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'

const NutritionPage = () => {
    const [nutritionList,setNutritionList] = useState([])

    useEffect(() => {
        const fetchOptions = {
  method: "GET",
  headers: {
    "Accept-Language": "en",
    "X-RapidAPI-Key": "2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};
     fetch(
    'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field[0]=uri&beta=true&random=true&cuisineType[0]=American&imageSize[0]=LARGE&mealType[0]=Breakfast&health[0]=alcohol-cocktail&diet[0]=balanced&dishType[0]=Biscuits and cookies',fetchOptions
  )
    .then((response) => response.json())
    .then((data) => {
        setNutritionList(data.hits)
        console.log(data.hits)
    });
    }, [])
    
  return (
    <div>
        <h1>Nutrition App</h1>
        <div className='grid  grid-cols-3'>
       { nutritionList.map((nutrition)=>(
        <div>
            <Link href={nutrition.recipe.url}>
            <div>
                <div className='w-[300px] h-[300px] relative'>
                <Image src={nutrition.recipe.image} fill alt="recipe"/>
            </div>
            {nutrition.recipe.label}
            </div>
            </Link>
            
        </div>
       ))}
        
    </div>
    </div>
    
    
  )
}

export default NutritionPage