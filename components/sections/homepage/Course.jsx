import Image from "next/image";
import Button from "../../ui/buttons/Button";

export default function CourseSection() {
  return (
    <section className="relative">
          <div className="max-w-6xl m-auto  py-20 lg:py-48">
            <div className="max-w-4xl grid lg:px-0 px-5 grid-cols-1 lg:grid-cols-2 gap-0">
              <div>
                <Image
                  src="/assets/img/cinn-college.webp"
                  alt=""
                  className="lg:mb-0 mb-5"
                  width={300}
                  height={197.98}
                />
              </div>
              <div>
                <p className="w-4/5 mb-8 leading-26 text-secondry-800 mt-2">
                  Seize the unique opportunity to participate in a wide range of
                  courses conducted by professionals with an impeccable
                  reputation in the digital industry.
                </p>
                <Button title="See How It Works" />
              </div>
            </div>
          </div>
          <Image
            src="/assets/img/cinn-college-illustration.webp"
            alt=""
            width={556}
            height={402}
            className="lg:block hidden  absolute right-0 bottom-0"
          />
        </section>
  )
}
