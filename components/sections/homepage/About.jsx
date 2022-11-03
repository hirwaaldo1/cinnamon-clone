import Image from "next/image";
import { who } from "../../../data/data";
import Button from "../../ui/buttons/Button";

export default function AboutSection() {
  return (
    <section className="bg-[#F6F6F6] overflow-hidden relative">
    <div className="max-w-6xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 px-5 lg:px-0 lg:py-48 ">
      <div>
        <h1 className="font-sans-bold text-5xl leading-56 ">
          Who we are
        </h1>
        <p className="lg:w-4/5 mb-8 text-secondry-800 mt-6">
          Meet our international teams made up of 86 innovators, branched
          into 8 departments, that influence the market throughout 20
          different countries.
        </p>
        <Image
          src="/assets/img/who-we-are.webp"
          alt=""
          className="mb-8 block lg:hidden"
          width={280}
          height={444}
        />
        <div className="hidden lg:grid grid-cols-2 gap-10 my-16">
          {who.map((v, i) => {
            return (
              <div key={i}>
                {v.titles.map((v, k) => {
                  return (
                    <p key={k} className="font-sans-bold text-xl mb-6">
                      {v}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Button title="Read About Us" />
      </div>
    </div>
    <div className="lg:block hidden absolute right-0 top-20 h-full">
      <Image
        src="/assets/img/who-we-are.webp"
        alt=""
        width={521}
        height={812}
      />
    </div>
  </section>
  )
}
