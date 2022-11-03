import Image from "next/image";
import ButtonBlog from "../../ui/buttons/ButtonBlog";

export default function BlogSection() {
  return (
    <section>
          <div className="max-w-6xl flex lg:flex-nowrap flex-wrap m-auto py-20 lg:py-36 ">
            <div className="relative">
              <span className="absolute text-258 leading-none font-sans-bold -top-16 -z-10 lg:-left-20 text-[#EDEAFF] w-fit h-fit m-0 p-0">
                “
              </span>
              <h1 className="font-sans-bold leading-[44px] px-5 lg:px-0 text-3xl lg:text-4xl  lg:leading-56 lg:w-3/4 mb-10">
                They’re consistent, and the communication is good.
              </h1>
              <p className="px-5 lg:px-0  mb-8 text-secondry-800 mt-2">
                When I have a deadline, they would work extra hours on the
                weekend and after <br/> hours. Cinnamon gives the impression of being
                a smaller team that’s focused on <br/> customers.
              </p>
              <div className="flex px-5 lg:px-0 space-x-5 py-5">
                <Image
                  src="/assets/img/GarinProfile.webp"
                  height={68}
                  width={68}
                  alt=""
                />
                <div>
                  <h4 className="font-sans-bold text-2xl">Garin Toren,</h4>
                  <span>CEO, ping</span>
                </div>
              </div>
              <div className="flex px-5 lg:px-0 space-x-12 mt-10">
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
            <div className="lg:mt-16  relative">
              <Image
                src="/assets/img/pingLogo.webp"
                width={310}
                className="lg:block hidden "
                height={200}
                alt=""
              />
              <div className="lg:absolute bottom-2 px-5 lg:px-0">
                <ButtonBlog title="View more blogs" />
              </div>
            </div>
          </div>
        </section>
  )
}
