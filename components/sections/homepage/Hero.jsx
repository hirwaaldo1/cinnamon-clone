export default function HeroSection() {
  return (
    <section
          className={`bg-section-bg bg-[#1C1C1C] h-fit pb-28 lg:pb-[190px] mb-20`}
        >
          <div className="max-w-6xl m-auto lg:px-0 px-6 py-4 pt-20 lg:pt-52 flex flex-col ">
            <h1 className="text-white text-38.5 lg:text-80 lg:leading-150 font-sans-heavy ">
              Results focused design & development agency.
            </h1>
            <p className="lg:w-3/5 max-w-[40rem] mt-5 text-lg lg:text-xl leading-[32px] text-secondry-900">
              Extend your team with our high performing specialists or hire us
              to shape your product from scratch. Either way, we’ll get your
              product off the ground and build a momentum for your success.
            </p>
          </div>
        </section>
  )
}
