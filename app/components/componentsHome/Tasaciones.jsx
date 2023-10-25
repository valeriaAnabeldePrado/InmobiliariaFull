"use client";
import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/image";
import logo2 from "../../../public/Images/logo2.png";
import Title from "./Title";
import Button2 from "./Button2";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Tasaciones = () => {
  const contRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contRef.current,
        start: "top center",
      },
    });
    tl.fromTo(
      imgRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
      .fromTo(
        titleRef.current,
        {
          y: 300,
          opacity: 0,
        },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        pRef.current,
        {
          y: 300,
          opacity: 0,
        },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        btnRef.current,
        {
          y: 300,
          opacity: 0,
        },
        { y: 0, opacity: 1 }
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={contRef} className="tasas_container">
      <div className="tasas_div">
        <Image
          ref={imgRef}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          src={logo2}
          alt="logo2"
          className="tasas_logo alto"
        />
      </div>
      <div className="tasas_div tasas_ajust">
        <div ref={titleRef}>
          <Title>TASACIONES</Title>
        </div>
        <p ref={pRef}>
          Somos una inmobiliaria especializada en tasaciones precisas y
          confiables. Nuestro equipo de expertos garantiza un servicio de
          calidad y excelencia para conocer el valor real de su propiedad.
        </p>
        <section>
          <Link ref={btnRef} href={"/contactate"}>
            <Button2>Contactanos</Button2>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Tasaciones;
