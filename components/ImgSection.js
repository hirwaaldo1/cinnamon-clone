import Image from 'next/image'
export default function ImgSection({bgColor, img , title, description}) {
  return (
    <section >
          <div className='max-w-6xl m-auto px-9 py-20'>
            <div className={`w-full py-5  `} style={{backgroundColor:bgColor}}>
            <Image src={img} className='transition duration-700 ease-in-out hover:scale-105' width={1120} height={518} alt="" />
            </div>
            <div className="flex space-x-10 mt-10 text-xs font-sans-bold text-secondry-800">
                <p>PRODUCT DESIGN</p>
                <p>QUALITY ASSURANCE</p>
            </div>
            <h1 className="font-sans-bold w-2/5 text-4xl leading-56 mt-5" >{title}</h1>
            <p className='w-4/5 text-secondry-800 mt-2'>
            {description}
            </p>
          </div>
    </section>
  )
}
