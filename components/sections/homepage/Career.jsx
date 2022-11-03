import Image from 'next/image';
import React from 'react'
import { application } from '../../../data/data';
import Button from '../../ui/buttons/Button';

export default function CareerSection() {
  return (
    
    <section className="bg-section-bg bg-[#1C1C1C]">
    <div className="max-w-6xl m-auto lg:px-0 px-5  grid-cols-1 grid lg:grid-cols-2 lg:space-x-20  py-10 lg:py-48">
      <div>
        <h1 className="font-sans-bold text-5xl text-white leading-56 ">
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
  )
}
