import Head from "next/head";
import HeroSection from "../components/sections/homepage/Hero";
import ProductSection from "../components/sections/homepage/Product";
import TeamSection from "../components/sections/homepage/Team";
import BlogSection from "../components/sections/homepage/Blog";
import AboutSection from "../components/sections/homepage/About";
import CourseSection from "../components/sections/homepage/Course";
import CareerSection from "../components/sections/homepage/Career";
import OfficeSection from "../components/sections/homepage/Office";
import TopicSection from "../components/sections/homepage/Topic.jsx";
import ProjectSection from "../components/sections/homepage/Project";
import ServiceSection from "../components/sections/homepage/Service";
export default function Home() {
  return (
    <div>
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta name="description" content="NEAR dev 101" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <ProductSection />
        <ServiceSection />
        <TeamSection />
        <BlogSection />
        <AboutSection />
        <CourseSection />
        <CareerSection />
        <OfficeSection />
        <TopicSection />
        <ProjectSection />
      </main>
    </div>
  );
}
