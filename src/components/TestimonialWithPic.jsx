import React from "react"
import icon from "../assets/Icon.svg"
import zoro from "../assets/zoro.jpg"

export default function TestimonialWithPic(){
    return (
        <div className="w-[24rem] bg-[#2545B8] p-8 mt-24 md:flex md:w-full md:gap-12 md:h-[25rem] md:items-center md:object-contain">
            <img className="w-[21rem] h-[13rem] -mt-32 mb-10 rounded-lg md:m-0 md:h-[29rem] md:w-[24rem]" src={zoro} alt="wanted poster of Roronoa Zoro" />
            <div>
                <img src={icon} alt="icon" />
                <p className="font-medium font-Inter text-xl text-white my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos similique atque nam exercitationem! Facere quidem blanditiis ipsa maxime aliquid placeat quibusdam ipsam aut. Vero asperiores obcaecati a eos nihil.</p>
                <h2 className="font-bold font-Inter text-white">Roronoa Zoro</h2>
                <h3 className="font-medium font-Inter text-white">Vice Captain, StrawHat Pirates</h3>
            </div>
        </div>
    )
}