import Image from "next/image";

export default function SaleCard({img,type,name,date,time,title}) {
  return (
    <div className="cursor-pointer group">
      <div className="relative w-[175.95px] h-[115.95px] lg:w-auto lg:h-[215.95px]">
        {" "}
        <Image alt="" layout="fill" src={img} />
      </div>
      <p className="font-sans-bold text-xs my-5 mb-3 group-hover:text-primary-900">{type}</p>
      <div className="flex space-x-4">
        <p className="hidden lg:block  text-secondry-800 mb-0 trun m-auto truncate flex-1">
          {name}
        </p>
        <span className="h-1.5 w-1.5 bg-[#FFCB47] block rounded-full m-auto"></span>
        <p className="text-secondry-800 mb-0 m-auto truncate">{date}</p>
        <span className="h-1.5 w-1.5 bg-[#FFCB47] block rounded-full m-auto"></span>
        <p className=" text-secondry-800 mb-0 m-auto truncate">{time}</p>
      </div>
      <h3 className="font-sans-bold  text-2xl mt-5 group-hover:text-primary-900">
        {title}
      </h3>
    </div>
  );
}
