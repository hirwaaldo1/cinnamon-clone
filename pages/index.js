import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import ButtonBlog from "../components/ButtonBlog";
import ImgSection from "../components/ImgSection";
import SaleCard from "../components/SaleCard";
import Service from "../components/Service";
import { application, services, techTopics, who } from "../data/data";
export default function Home() {
  const [cursor, setCursor] = useState("default");
  return (
    <div>
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta name="description" content="NEAR dev 101" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`cursor-${cursor} w-full h-full`}
        onClick={() => {
          setCursor("pointer");
          setTimeout(() => {
            setCursor("default");
          }, 100);
        }}
      >
        <section
          className={`bg-section-bg bg-[#1C1C1C] h-fit pb-20 lg:pb-[190px] mb-20`}
        >
          <div className="max-w-6xl m-auto px-6 py-4 pt-20 lg:pt-52 flex flex-col ">
            <h1 className="text-white  text-4xl lg:text-80 lg:leading-150 font-sans-heavy ">
              Results or treat design & development agency.
            </h1>
            <p className="lg:w-3/5 max-w-[40rem] mt-5 text-xl leading-[32px] text-secondry-900">
              Extend your team with our high performing specialists or hire us
              to shape your product from scratch. Either way, we’ll get your
              product off the ground and build a momentum for your success.
            </p>
          </div>
        </section>
        <ImgSection
          bgColor="#91F1C3"
          img="/assets/img/Mockup_1.webp"
          title="Corrily:  Optimize prices  to maximize revenue"
          description={`Corrily  tailors your prices and discounts to the needs of different user segments in order to \n increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily  \n and incorporating a fresh, and stunning website redesign.`}
        />
        <ImgSection
          bgColor="#52247F"
          img="/assets/img/Fiona_Thumbnail.webp"
          title={`Fiona: Engage & \n Decide`}
          description={`Fiona is a fintech consumer-facing website that enables users to search for financial \n products, discover them, and receive personalized recommendations.`}
        />
        <ImgSection
          bgColor="#FFCB47"
          img="/assets/img/thumbnail.webp"
          title={`Ukulele: \n The largest ukulele tabs archive`}
          description={`Ukulele is the number one ukulele community, where players of any level can find the most \n complete tabs and chords. Cinnamon offered a complete platform redesign including \n expansions and new features, focusing on keeping the user longer on the website.`}
        />
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
                    <Service
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
        <section className="bg-[#F6F6F6] px-9 lg:px-0 z-40 relative">
          <div className="max-w-6xl m-auto grid grid-cols-1 z-[100000] lg:grid-cols-2 py-10 lg:py-32 ">
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

        <section>
          <div className="max-w-6xl flex lg:flex-nowrap flex-wrap m-auto py-20 lg:py-36 ">
            <div className="relative">
              <span className="absolute text-258 leading-none font-sans-bold -top-16 -z-10 lg:-left-20 text-[#EDEAFF] w-fit h-fit m-0 p-0">
                “
              </span>
              <h1 className="font-sans-bold px-5 lg:px-0 text-3xl lg:text-4xl  lg:leading-56 lg:w-3/4 mb-10">
                They’re consistent, and the communication is good.
              </h1>
              <p className="px-5 lg:px-0 lg:w-3/5 mb-8 text-secondry-800 mt-2">
                When I have a deadline, they would work extra hours on the
                weekend and after hours. Cinnamon gives the impression of being
                a smaller team that’s focused on customers.
              </p>
              <div className="flex px-5 lg:px-0 space-x-5">
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
              <div className="lg:absolute bottom-5 px-5 lg:px-0">
                <ButtonBlog title="View more blogs" />
              </div>
            </div>
          </div>
        </section>
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
                <p className="w-4/5 mb-8 text-secondry-800 mt-2">
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

        <section className="bg-section-bg bg-[#1C1C1C]">
          <div className="max-w-6xl m-auto lg:px-0 px-5  grid-cols-1 grid lg:grid-cols-2 lg:space-x-20  py-10 lg:py-48">
            <div>
              <h1 class="font-sans-bold text-5xl text-white leading-56 ">
                We’re growing
              </h1>
              <p className=" text-secondry-900  w-4/5 my-5 mb-10">
                Jump on board with Cinnamon and get the privilege of working on
                challenging projects for leading global companies! Make the
                world a better, more connected place.
              </p>
              <Button title="See All Positions" />
            </div>
            <div>
              {application.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-between py-8 space-x-3 lg:w-10/12   border-b border-secondry-800 "
                  >
                    <p className="font-sans-semibold text-2xl text-white leading-40">
                      {v}
                    </p>
                    <Image
                      src="/assets/img/arrowRightWhite.webp"
                      className="cursor-pointer transition duration-300 h-5 my-auto ease-in-out hover:-translate-y-0.5"
                      width={48}
                      height={27}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl m-auto py-20 lg:pl-0 pl-5 lg:py-32">
            <h1 class="font-sans-bold text-4xl lg:text-5xl leading-56 ">
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

        <section>
          <div className="max-w-6xl m-auto lg:px-0 px-5 pb-20">
            <h3 className="font-sans-bold text-4xl  lg:text-5xl lg:leading-56 ">
              Stay in the loop <br /> on tech topics
            </h3>
            <div className="flex overflow-hidden lg:grid  lg:grid-cols-3 gap-8 mt-10 lg:mt-20">
              {techTopics.map((v, i) => {
                return (
                  <SaleCard
                    key={i}
                    img={v.img}
                    type={v.type}
                    name={v.name}
                    date={v.date}
                    time={v.time}
                    title={v.title}
                  />
                );
              })}
            </div>
            <ButtonBlog title="View more blogs" />
          </div>
        </section>

        <section className="bg-[#F6F6F6] relative">
          <div className="max-w-6xl m-auto  text-center py-32 ">
            <h3 className="font-sans-bold text-center text-5xl leading-56 mb-10">
              Have a project in mind? <br />
              Let{"'"}s work together.
            </h3>
            <Button title="Contact us" />
          </div>
          <Image
            src="/assets/img/job-application.webp"
            className="w-32 lg:w-auto absolute left-0 -bottom-0"
            alt=""
            width={428}
            height={338}
          />
        </section>
      </main>
    </div>
  );
}
