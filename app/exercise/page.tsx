"use client"
import CategoryBox from '@/components/exercises/CategoryBox'
import ExerciseBox from '@/components/exercises/ExerciseBox'
import {useEffect, useState} from 'react'

const ExercisePage = () => {
    const [bodyPartList,setBodyPartList] = useState([])
    const [exerciseList,setExerciseList] = useState([])

    useEffect(() => {
      const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
        .then(response => response.json())
        .then(data => {
            setBodyPartList(data)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    useEffect(() => {
      const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        fetch('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setExerciseList(data)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])
    
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-medium my-6'>Awesome Exercises</h1>
        <div className='flex gap-x-4'>
            <input type='text' placeholder='Search Exercises...' className='border-2 px-2 py-2 outline-none min-w-[600px]'></input>
            <button className='bg-pink-600 text-white py-2 px-10 rounded-md'>Search</button>
        </div>
        <div className='flex overflow-x-auto whitespace-nowrap w-screen'>
            {
                bodyPartList.map((bodypart)=>(
                <CategoryBox key={bodypart} name={bodypart}/>    
                ))
            }
        </div>
        <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3'>
            {
                exerciseList.map((exercise)=>(
                <ExerciseBox key={exercise.id} gifUrl={exercise.gifUrl}/>    
                ))
            }
        </div>
    </div>
  )
}

export default ExercisePage