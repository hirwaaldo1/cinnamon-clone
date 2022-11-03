import Image from "next/image";

export default function OfficeSection() {
  return (
    <section>
          <div className="max-w-6xl m-auto py-20 lg:pl-0 pl-5 lg:py-32">
            <h1 className="font-sans-bold text-4xl lg:text-5xl leading-56 ">
              Our offices
            </h1>
            <div className=" flex overflow-hidden space-x-6 mt-2  lg:mt-16">
              {[1, 2, 3, 4].map((v, i) => {
                return (
                  <div key={i}>
                    <Image
                      src="/assets/img/zagreb.webp"
                      alt=""
                      className="min-w-[244px] lg:min-w-[544px]"
                      width={544}
                      height={378}
                    />
                    <div className="flex space-x-2 mt-8">
                      <div className="w-fit mt-1">
                        <Image
                          src="/assets/img/location.svg"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>

                      <div>
                        <h5 className="font-sans-bold text-xl mb-3">Zagreb</h5>
                        <p className=" text-secondry-800  mb-0">
                          Slavonska avenija 6, 10000, Zagreb, Croatia
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-12 mt-16">
              <Image
                src="/assets/img/arrow-left.webp"
                className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2"
                width={48}
                height={27}
                alt=""
              />
              <Image
                src="/assets/img/arrow-right.webp"
                className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2"
                width={48}
                height={27}
                alt=""
              />
            </div>
          </div>
        </section>
  )
}
