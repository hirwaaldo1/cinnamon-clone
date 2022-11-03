import { services } from "../../../data/data";
import ServiceCard from "../../cards/Service";
import Button from "../../ui/buttons/Button";
export default function ServiceSection() {
  return (
    <section className="bg-section-bg mt-16 bg-[#1C1C1C]">
          <div className="max-w-6xl m-auto px-9 py-20 lg:py-44 text-white">
            <div className="lg:flex-nowrap flex-wrap flex gap-20 lg:gap-32">
              <div className="">
                <h1 className="font-sans-bold  text-5xl leading-56 ">
                  Our services
                </h1>
              </div>
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-24">
                {services.map((v, i) => {
                  return (
                    <ServiceCard
                      key={i}
                      url={v.img}
                      name={v.title}
                      desc={v.details}
                    />
                  );
                })}
                <Button title="See Our Services" />
              </div>
            </div>
          </div>
        </section>
  )
}
