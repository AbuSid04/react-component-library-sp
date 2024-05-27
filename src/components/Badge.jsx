import React from "react"
import classnames from "classnames"
import Data from "./Data"

export default function Badge({children, theme, pill}){

    let themeClass = theme ? Data[theme] : ""
    let shapeClass = pill ? Data.pill : ""
    let twClass = "bg-[#F3F4F6] text-[#1F2937] px-5 py-2 text-xl font-medium font-Inter rounded w-full"
    let allClass = classnames(twClass, themeClass, shapeClass)

    console.log(allClass)

    return (
        <div className={allClass}>{children}</div>
    )
}