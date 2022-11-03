import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/buttons/Button";

export default function HeaderLayout() {
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
    <header style={{background:bgColor}} className=" transition duration-300 ease-in-out cursor-default  fixed w-full  px-6 py-4 z-50">
        <div className="lg:w-9/8 flex justify-between m-auto">
        <Image src={headerImg} className="cursor-pointer object-contain" height="20" width="160" alt=""/> 
        <div className="flex space-x-12">
        <ul style={{color:`${borderColor === "#5135FF" ? "black" : "white"}`}} className="hidden lg:flex space-x-8 justify-center h-full  text-base m-auto  font-simebold">
            {
                ["Projects","Services","About us","Carrers","Blog"].map((v,i)=>{
                    return (
                        <li key={i} className="relative mb-1  flex w-fit h-full overflow-hidden  duration-300 ease-in-out group justify-center items-center cursor-pointer">
                {v}
                <span  className="absolute   transition duration-300  ease-in-out  z-[10000] group-hover:-translate-x-0 group-hover:block -translate-x-20 bottom-0.5 w-1.5 h-1.5 bg-primary-900  rounded-full "></span>    
            </li>
                    )
                })
            }
        </ul>
        <div style={{border:`2px solid ${borderColor}`}} className="cursor-pointer bg-transparent testButton hidden lg:flex justify-center p-2 rounded-full " >
            <Image src={`${borderColor === "#5135FF" ?"/assets/img/play-blue.svg":"/assets/img/play.svg"}`} className="ml-1" alt="" width={20} height={17} />
        </div>
        <div className="hidden lg:flex">
        <Button  title="Contact Us" />
        </div>
        <div className="flex lg:hidden py-2">
            <Image src="/assets/img/menu.svg" className={bgColor === "white" ?"invert":""} alt="" width={32} height={32} /> 
        </div>
        </div>
        </div>
      
      
    </header>
  )
}
