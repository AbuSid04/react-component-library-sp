import React from "react"
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"

export default function App(){
  return (
    <main className="w-fit h-full min-h-screen mx-auto bg-slate-400 flex flex-col justify-center items-center px-24 gap-5 p-20">
      <h1 className="text-4xl font-Inter font-bold text-gray-100 self-start mb-5">This is a Banner component...</h1>
      <Testimonial />
    </main>
  )
}
      

      {/* <Card /> */}

      // {<div className="flex gap-3 flex-col">
      //   <Banner status="success" isExpanded={false} />
      //   <Banner status="warning" isExpanded={false} />
      //   <Banner status="error" isExpanded={false} />
      //   <Banner status="neutral" isExpanded={false} />
      // </div>
      // <div className="flex gap-3 flex-col">
      //   <Banner status="success" isExpanded={true} />
      //   <Banner status="warning" isExpanded={true} />
      //   <Banner status="error" isExpanded={true} />
      //   <Banner status="neutral" isExpanded={true} />
      // </div>}


      // <div className="flex gap-2 justify-center items-center">
      //   <Badge theme="red" pill={false}>Badge</Badge>
      //   <Badge theme="yellow" pill={false}>Badge</Badge>
      //   <Badge theme="green" pill={false}>Badge</Badge>
      //   <Badge theme="blue" pill={false}>Badge</Badge>
      //   <Badge theme="indigo" pill={false}>Badge</Badge>
      //   <Badge theme="purple" pill={false}>Badge</Badge>
      //   <Badge theme="pink" pill={false}>Badge</Badge>
      // </div>
      // <div className="flex gap-2 justify-center items-center">
      //   <Badge theme="red" pill={true}>Badge</Badge>
      //   <Badge theme="yellow" pill={true}>Badge</Badge>
      //   <Badge theme="green" pill={true}>Badge</Badge>
      //   <Badge theme="blue" pill={true}>Badge</Badge>
      //   <Badge theme="indigo" pill={true}>Badge</Badge>
      //   <Badge theme="purple" pill={true}>Badge</Badge>
      //   <Badge theme="pink" pill={true}>Badge</Badge>
      // </div>