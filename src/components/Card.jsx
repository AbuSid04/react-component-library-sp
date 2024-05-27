import React from "react"
import cardIcon from "../assets/card-icon.svg"
import classNames from "classnames"

export default function Card(){

    const [isHovered, setIsHovered] = React.useState(false)
    const checkHovered = isHovered ? "hover:shadow-[0_0_16px_16px_#1f2937]" : ""
    const twClass = "bg-white w-[24rem] rounded-lg flex flex-col relative justify-center items-center p-10 text-center"
    const allClasses = classNames(twClass, checkHovered)

    return(
        <div 
            className={allClasses} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
        >
            <img src={cardIcon} alt="Icon of an card" className="-mt-16"/>
            <h1 className="text-lg font-medium font-Inter">Easy Deployment</h1>
            <p className="text-[#6B7280] font-Inter mt-5">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </div>
    )
}