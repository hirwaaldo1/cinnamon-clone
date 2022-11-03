import ImgSection from "./Image";

export default function ProductSection() {
  return (
    <>
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
    </>
  );
}
