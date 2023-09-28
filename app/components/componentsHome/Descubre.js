"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { TbBuilding } from "react-icons/tb";
import { BsHouse } from "react-icons/bs";
import { MdCropLandscape } from "react-icons/md";
import "./styles.scss";
import Image from "next/image";
import descubre from "../../../__MACOSX/public/Images/imagenesHome/descubre.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";

const array = [
  {
    Ico: FaRegBuilding,
    p: "Departamentos",
  },
  {
    Ico: BsHouse,
    p: "Casas",
  },
  {
    Ico: MdCropLandscape,
    p: "Terrenos",
  },
  {
    Ico: BiStore,
    p: "Locales",
  },
  {
    Ico: TbBuilding,
    p: "Oficinas",
  },
];

const Descubre = () => {
  const refs = useRef([]);
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  console.log(refs);

  useEffect(() => {
    gsap.to(refs.current, {
      y: 0,
      x: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "100px bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="descubre_container">
      <div className="descubre_div">
        <Title>Descubre</Title>
        <div ref={container} className="descubre_icons_container">
          {array.map(({ p, Ico }, index) => {
            return (
              <div
                ref={(el) => {
                  refs.current.push(el);
                }}
                key={index}
                className="descubre_icons"
              >
                <h3>{p}</h3>
                <Ico />
              </div>
            );
          })}
        </div>
      </div>
      <div className="descubre_div">
        <Image
          fill={true}
          src={descubre}
          alt="descubre"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Descubre;
