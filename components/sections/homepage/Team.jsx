import Image from "next/image"
import Button from "../../ui/buttons/Button"

export default function TeamSection() {
  return (
    <section className="bg-[#F6F6F6] px-9 lg:px-0 z-40 relative">
          <div className="max-w-6xl m-auto grid grid-cols-1 z-[100000] lg:grid-cols-2 py-10 lg:py-40 ">
            <div className="w-fit my-auto">
              <h1 className="font-sans-bold text-5xl leading-70 ">
                Agile team <br />
                on demand
              </h1>
            </div>
            <div>
              <Image
                src="/assets/img/agile-team-on-demand.webp"
                className="block lg:hidden py-10"
                alt=""
                width={250}
                height={162}
              />
              <p className="w-full lg:w-3/5 mb-8  text-secondry-800 mt-2">
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
              </p>
              <Button title="See Our Services" />
            </div>
          </div>
          <Image
            src="/assets/img/agile-team-on-demand.webp"
            className="hidden lg:block absolute right-0 -z-[1] -bottom-2"
            alt=""
            width={338}
            height={220}
          />
        </section>
  )
}
