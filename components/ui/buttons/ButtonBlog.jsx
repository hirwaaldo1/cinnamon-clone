import Image from "next/image";

export default function ButtonBlog({title}) {
  return (
    <div className="flex space-x-3 mt-20">
    <Image
      src="/assets/img/arrowicon.svg"
      className="my-auto"
      width={8}
      height={11}
      alt=""
    />
    <p className="font-sans-bold text-primary-900 text-base uppercase border-b-2 border-primary-900  ">
      {title}
    </p>
  </div>
  )
}
