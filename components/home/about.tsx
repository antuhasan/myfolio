import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = ({ clientHeight }) => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.2,
        delay: 1,
      });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center 25%",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div
        className={`
          ${
            clientHeight > 650 ? "pt-40 pb-16" : "pt-48 pb-24"
          } section-container
        `}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-3xl sm:text-4xl md:text-6xl"
        >
          <span className="about-1 leading-tight">
          ON2 — a digital designer and developer who creates things with computers, Digital Craftsman best describes my skill set {" "}
          </span>
          <span className="about-2 leading-tight">
            I am passionate
about communications and strive to push the boundaries, achieving
high results through all aspects of my professional life.{" "}
          </span>
          <span className="about-3 leading-tight">
          I've worked in creative studios, digital agencies and as a freelancer for over ten years.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About;
