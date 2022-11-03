import Image from 'next/image'
export default function ImageSection({bgColor, img , title, description}) {
  return (
    <section >
          <div className='max-w-6xl m-auto  lg:px-0 px-6 py-4 lg:py-16'>
            <div className={`w-full py-0 overflow-hidden `} style={{backgroundColor:bgColor}}>
            <Image src={img} className='transition duration-700 ease-in-out hover:scale-105' width={1120} height={518} alt="" />
            </div>
            <div className="flex space-x-8 mt-5  lg:mt-10 text-xs font-sans-bold text-secondry-800">
                <p>PRODUCT DESIGN</p>
                <p>QUALITY ASSURANCE</p>
            </div>
            <h1 className="font-sans-bold  text-3xl lg:text-4xl whitespace-pre-line mb-5 lg:mb-0 leading-10 lg:leading-56 mt-5" >{title}</h1>
            <p className='leading-26 text-secondry-800 lg:whitespace-pre-line mt-2 mb-10 lg:mb-0'>
            {description}
            </p>
          </div>
    </section>
  )
}
