import React from 'react'
import { techTopics } from '../../../data/data';
import SaleCard from '../../cards/Sale';
import ButtonBlog from '../../ui/buttons/ButtonBlog';

export default function TopicSection() {
  return (
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
  )
}
