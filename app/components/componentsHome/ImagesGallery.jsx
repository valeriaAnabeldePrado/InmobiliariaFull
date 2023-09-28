import { ImageList, ImageListItem } from "@mui/material";
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
    img: gallery2,
    title: "Balcony",
  },
  {
    img: gallery3,
    title: "Park",
  },
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
  {
    img: gallery7,
    title: "Backyard",
  },
  {
    img: gallery8,
    title: "Build",
  },
];

const ImagesGallery = () => {
  return (
    <>
      <ImageList className="una" variant="quilted" cols={4} rowHeight={170}>
        {itemData.map((item, i) => (
          <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 2}>
            <Image
              placeholder="blur"
              fill={true}
              src={item.img}
              alt={item.title}
              className="images"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImagesGallery;
