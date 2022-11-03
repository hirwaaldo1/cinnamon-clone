import Image from "next/image";
import Button from "../../ui/buttons/Button";
export default function ProjectSection() {
  return (
    <section className="bg-[#F6F6F6] z-10 relative">
    <div className="max-w-6xl m-auto  text-center py-32 ">
      <h3 className="font-sans-bold text-center text-5xl leading-56 mb-10">
        Have a project in mind? <br />
        Let{"'"}s work together.
      </h3>
      <Button title="Contact us" />
    </div>
    <Image
      src="/assets/img/job-application.webp"
      className="w-32 lg:w-auto absolute left-0 -z-[1] -bottom-0"
      alt=""
      width={428}
      height={338}
    />
  </section>
  )
}
