import React from "react"
import logo from "../assets/Logo.svg"
import pattern from "../assets/pattern.svg"

export default function TestimonialWithoutPic(){
    return(
        <div className="w-[24rem] bg-white p-8 relative md:w-full md:flex md:gap-5">
            <img className="mx-auto w-[12rem]" src={logo} alt="logo" />
            <p className="font-medium font-Inter text-xl text-[#111827] my-5">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos similique atque nam exercitationem! Facere quidem blanditiis ipsa maxime aliquid placeat quibusdam ipsam aut. Vero asperiores obcaecati a eos nihil."</p>
            <h2 className="font-bold font-Inter text-[#111827] z-10">Roronoa Zoro</h2>
            <h3 className="font-medium font-Inter text-[#6B7280] mb-12">Vice Captain, StrawHat Pirates</h3>
        </div>
    )
}
{/* <img src={pattern} alt="dotted pattern" className="absolute left-0 bottom-0" /> */}