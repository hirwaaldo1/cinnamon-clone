import Image from "next/image";
import Link from "next/link";
import { location } from "../data/data";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-section-bg bg-[#1C1C1C]">
        <div className="max-w-6xl flex space-x-0 m-auto py-20">
            <div className="text-white w-3/5 relative">
            <Image src="/assets/img/logo.svg" className="cursor-pointer object-contain" height="20" width="160" alt=""/> 
            <ul className="my-10">
                {
                   ['Home','Projects','Services','About Us','Carrers','Blog'].map((v,i)=>{
                    return <p className="mb-4 text-secondry-900" key={i}>{v}</p>
                   })
                }
            </ul>
            <Link className="absolute bottom-5  underline text-sm" href="hello@cinnamon.agency">
             hello@cinnamon.agency
            </Link>
            </div>
            <div className="text-white relative">
                <h1 className="font-sans-bold  text-3xl ">All software, zero bullshit.</h1>
                <div className="grid grid-cols-3 space-x-10 mt-16 mb-56">
                    {
                        location.map((v, i)=>{
                            return(
                                <div key={i}>
                                    <h4 className="font-sans-bold text-lg ">{v.name}</h4>
                                    <p className="text-secondry-900 text-sm">{v.details}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-between">
                    <div className="w-64">
                        <p className="font-sans-bold text-lg">Our newsletter</p>
                        <div className="relative z-0 my-3 mb-6 w-full group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-secondry-900 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-900 peer" placeholder=" " required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-secondry-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <button className="border-primary-900  w-full cursor-pointer  m-0 pt-2 px-8 pb-2 border-2 text-white bg-primary-900 text-base">
                        Subscribe
                        </button>
                    </div>
                    <div>
                        <Image src="/assets/img/Capture.PNG" width={216} height={159} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
