"use client";
import React, { useEffect, useRef } from "react";
import { Icons } from "./IconsVar";
import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Title from "./Title";
import Link from "next/link";

const MediosContact = () => {
  const refs = useRef([]);
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  console.log(refs);

  useEffect(() => {
    gsap.to(refs.current, {
      opacity: 1,
      scale: 1,
      stagger: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "center bottom",
        end: "center center",
      },
    });
  }, []);

  return (
    <div className="medios_container">
      <Title>OTROS CANALES DE CONTACTO</Title>
      <div ref={container} className="medios_icons_container">
        {Icons.map(({ Ico, h6, href }, index) => {
          return (
            <div
              ref={(ref) => (refs.current[index] = ref)}
              className="medios_icon"
              key={`$here_${index}`}
            >
              {href ? (
                <Link
                  href={href}
                  passHref
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Ico />
                  <h6 style={{ padding: "1rem" }}>{h6}</h6>
                </Link>
              ) : (
                <>
                  <Ico />
                  <h6>{h6}</h6>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediosContact;
