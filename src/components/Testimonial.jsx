import React from "react"
import TestimonialWithPic from "./TestimonialWithPic"
import TestimonialWithoutPic from "./TestimonialWithoutPic"

export default function Testimonial({ children }){
    return (
        <div>
            <TestimonialWithPic>{children}</TestimonialWithPic>
        </div>
    )
}
{/* <TestimonialWithoutPic>{children}</TestimonialWithoutPic> */}