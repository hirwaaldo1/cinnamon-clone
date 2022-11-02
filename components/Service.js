import Image from "next/image";

export default function Service({url,name,desc}) {
  return (
    <div>
      <Image src={url} alt="" width={48} height={48} />
      <h3 className="font-sans-bold  text-2xl leading-10 mt-5">
        {name}
      </h3>
      <p className=" text-secondry-900 mt-2">
        {desc}
      </p>
    </div>
  );
}
