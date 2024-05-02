'use client';
import styles from './style.module.scss';
import Rounded from "@/common/RoundedButton"
import Magnetic from "@/common/Magnetic"
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {

  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e: any) => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Get in touch -</p>
          <p ref={secondText}>Get in touch -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>let's talk about geting your BRAND to the next LEVEL.</p>
      </div>
      <div className="sm:px-16 px-6 py-8 w-full relative mt-[60vh]">
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex flex-col">
        
        <Link href="/contact" className={styles.buttonContainer}>
          <div className='flex flex-row w-full font-bold justify-end items-end'>
            <Rounded backgroundColor={"black"}>
              <p className='text-white'>Get In Touch</p>
            </Rounded>
          </div>

        </Link>
        <div className="mb-[50px] mt-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Trader AD
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022. All rights reserved.
          </p>
          <span>
            <div className="flex flex-row gap-4">
              <span>
                <Magnetic>
                  <img src="facebook.svg" alt="" />
                </Magnetic>
              </span>
              <span>
                <Magnetic>
                  <img src="instagram.svg" alt="" />
                </Magnetic>
              </span>
              <span>
                <Magnetic>
                  <img src="linkedin.svg" alt="" />
                </Magnetic>
              </span>
              <span>
                <Magnetic>
                  <img src="twitter.svg" alt="" />
                </Magnetic>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
      </div>
      
    </motion.main>
  );
}