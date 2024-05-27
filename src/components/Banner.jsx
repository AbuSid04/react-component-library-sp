import React  from "react"
import Data from "./Data"
import success  from "../assets/success.svg"
import warning  from "../assets/warning.svg"
import error  from "../assets/error.svg"
import neutral  from "../assets/neutral.svg"
import classNames from "classnames"

export default function Banner({status, isExpanded}){

    const svgs = {
        success,
        warning,
        error,
        neutral,
    }

    const titleObj = {
       status : status === 'success' ? "Congratulation!" : 
                status === 'warning' ? "Alert" :
                status === 'neutral' ? "Update available" :
                status === 'error' ? "There is a problem with your application" : ""
    }

    const title = status && titleObj.status
    const src = status && svgs[status]
    const themeClass = status && Data[status]
    const twClass = "flex items-start p-4 rounded-lg gap-3"
    const allClass = classNames(twClass, themeClass)

    console.log(status && Data[status])

    return (
        <div className={allClass}>
            <img src={src} alt={title} className="w-6 pt-1" />
            <div className="flex flex-col  ">
                <h1 className="font-Inter font-medium text-lg">{title}</h1>
                {isExpanded && <p className="font-normal font-Inter">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minima perspiciatis cupiditate quis a voluptate reprehenderit, natus assumenda cumque numquam deserunt qui exercitationem, optio vel sunt? At rem dolorum unde!</p>}
            </div>
        </div>
    )
}