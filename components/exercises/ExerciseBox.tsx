import Image from "next/image";
import React from "react";

interface ExerciseBoxProps  {
bodyPart?:string;
equipment?:string;
gifUrl:string;
name:string;
target?:string;
}

const ExerciseBox:React.FC<ExerciseBoxProps> = ({gifUrl}) => {
  return (
    <div className="p-5 border shadow m-10">
        <div className="w-[300px] h-[300px] relative">
            <Image fill alt="exercise" src={gifUrl} sizes="300 300"/>
        </div>
    </div>
  )
}

export default ExerciseBox