import React from "react";
import "./styles.scss";
import gallery1 from "../../../public/Images/gallery1.webp";
import gallery2 from "../../../public/Images/gallery2.webp";
import gallery3 from "../../../public/Images/gallery3.webp";
import gallery4 from "../../../public/Images/gallery4.webp";
import gallery5 from "../../../public/Images/gallery5.webp";
import gallery6 from "../../../public/Images/gallery6.webp";
import gallery7 from "../../../public/Images/gallery7.webp";
import gallery8 from "../../../public/Images/gallery8.webp";
import Image from "next/image";

const itemData = [
  {
    img: gallery1,
    title: "Kitchen",
    rows: 2,
    cols: 2,
  },
  {
    img: gallery7,
    title: "Backyard",
  },
  {
    img: gallery3,
    title: "Park",
  },
];
const imgdata2 = [
  {
    img: gallery4,
    title: "Livin",
    cols: 2,
  },
  {
    img: gallery5,
    title: "Room",
    cols: 2,
  },
  {
    img: gallery6,
    title: "Front",
    rows: 2,
    cols: 2,
  },
];
const imgData3 = [
  {
    img: gallery2,
    title: "Balcony",
  },

  {
    img: gallery8,
    title: "Build",
  },
];
const ImagesGallery = () => {
  return (
    <>
      <div className="galeria">
        {itemData.map((item, i) => (
          <section className="imagenesCont" key={i}>
            <Image
              placeholder="blur"
              fill={true}
              src={item.img}
              alt={item.title}
              className="images"
              style={{ width: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </section>
        ))}
      </div>
      <div className="galeriaDos">
        {imgData3.map((imagen, i) => (
          <section key={i} className="imagesCont2">
            <Image
              placeholder="blur"
              fill={true}
              src={imagen.img}
              alt={imagen.title}
              className="images2"
              style={{ width: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </section>
        ))}
      </div>
      <div className="galeria">
        {imgdata2.map((item, i) => (
          <section className="imagenesCont" key={i}>
            <Image
              placeholder="blur"
              fill={true}
              src={item.img}
              alt={item.title}
              className="images"
              style={{ width: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </section>
        ))}
      </div>
    </>
  );
};

export default ImagesGallery;
