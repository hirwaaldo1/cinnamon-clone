import Image from "next/image";
import Link from "next/link";
import { location } from "../../data/data";

export default function FooterLayout() {
  return (
    <footer className="bg-section-bg h-full relative px-6 lg:px-0 pb-1 bg-[#1C1C1C]">
        <div className="max-w-6xl border-b  border-b-secondry-800 flex flex-wrap lg:flex-nowrap space-x-0 m-auto pt-20 pb-5">
            <div className="text-white lg:w-3/5 w-full  relative">
            <Image src="/assets/img/logo.svg" className="cursor-pointer object-contain" height="20" width="160" alt=""/> 
            <ul className="my-10 grid grid-cols-2 lg:block">
                {
                   ['Home','Projects','Services','About Us','Carrers','Blog'].map((v,i)=>{
                    return <p className="mb-3 text-secondry-900" key={i}>{v}</p>
                   })
                }
            </ul>
            <Link className="lg:block hidden absolute bottom-14  underline text-sm" href="hello@cinnamon.agency">
             hello@cinnamon.agency
            </Link>
            </div>
            <div className="text-white relative mt-10 lg:mt-0">
                <h1 className="font-sans-bold text-xl lg:text-3xl ">All software, zero bullshit.</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-10 lg:mb-36">
                    {
                        location.map((v, i)=>{
                            return(
                                <div key={i}>
                                    <h4 className="font-sans-bold text-lg ">{v.name}</h4>
                                    <p className="text-secondry-900 text-sm lg:w-3/4">{v.details}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="lg:flex-nowrap flex-wrap flex justify-between">
                    <div className="w-full lg:w-64">
                        <p className="font-sans-bold text-lg">Our newsletter</p>
                        <div className="relative z-0 my-3 mb-6 w-full group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-secondry-900 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary-900 peer" placeholder=" " required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-secondry-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <button className="border-primary-900 button w-full cursor-pointer  m-0 pt-2 px-8 pb-2 border-2 text-white bg-primary-900 text-base">
                        Subscribe
                        </button>
                    </div>
                    <div className="w-fit m-auto lg:m-0">
                        <Image src="/assets/img/Capture.PNG" width={216} height={159} alt="" />
                        <div className="text-center w-fit m-auto  mt-10">
                        <Link className="underline block lg:hidden text-base " href="hello@cinnamon.agency">
                          hello@cinnamon.agency
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-6xl  mt-5 lg:mt-8 mb-7 text-white m-auto">
            <div className="  flex-col-reverse lg:flex-row lg:flex-nowrap items-center flex justify-between">
                    <div className="flex lg:pt-0 pt-5 border-t lg:border-none border-secondry-700 w-full space-x-6 font-sans-semibold text-secondry-500">
                        <p>© 2022 Cinnamon</p>
                        <p className="underline ">Privacy Policy</p>
                    </div>
                    <div className="lg:mb-0 mb-5">
                        <Image  src="/assets/img/Capture1.PNG" alt="" width={246} height={21} />
                    </div>
            </div>
        </div>
    </footer>
  )
}
