import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
    const [bgColor, setBgColor] = useState("transpart")
    const [borderColor, setBorderColor] = useState("white")
    const [headerImg, setHeaderImg] = useState("/assets/img/logo.svg")
    useEffect(() => {
        window.addEventListener('scroll',(()=>{
            if(window.scrollY > 5){
                setBgColor("white")
                setBorderColor("#5135FF")
                setHeaderImg("/assets/img/logo-black.svg")
            }else{
                setBgColor("none")
                setBorderColor("white")
                setHeaderImg("/assets/img/logo.svg")
            }
        }))
    }, [])
    
 
    
  return (
    <header style={{background:bgColor}} className=" transition duration-300 ease-in-out cursor-default  fixed w-full  px-9 py-4 z-50">
        <div className="max-w-7xl flex justify-around m-auto">
        <Image src={headerImg} className="cursor-pointer object-contain" height="20" width="160" alt=""/> 
        <div className="flex space-x-10">
        <ul style={{color:`${borderColor === "#5135FF" ? "black" : "white"}`}} className="flex space-x-10 text-base m-auto  font-simebold">
            <li className="relative flex justify-center cursor-pointer">
                Projects
                <span  className="absolute -bottom-4 w-1.5 h-1.5 bg-primary-900  rounded-full "></span>    
            </li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About us </li>
            <li className="cursor-pointer">Carrers</li>
            <li className="cursor-pointer">Blog</li>
        </ul>
        <div style={{border:`2px solid ${borderColor}`}} className="cursor-pointer bg-transparent flex justify-center p-2 rounded-full " >
            <Image src={`${borderColor === "#5135FF" ?"/assets/img/play-blue.svg":"/assets/img/play.svg"}`} className="ml-0.5" alt="" width={20} height={17} />
        </div>
        <Button title="Contact Us" />
        </div>
        </div>
      
      
    </header>
  )
}
