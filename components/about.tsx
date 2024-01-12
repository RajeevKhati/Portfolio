"use client";

import React from "react";
import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
      }}
      className="text-center"
    >
      <SectionHeading heading="About Me" />
      <p className="px-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        ullam a mollitia laudantium, totam eius qui perspiciatis, natus quos
        nemo, impedit alias cupiditate? Voluptas vero id tempora dolores
        quibusdam esse sequi laboriosam quis autem impedit sit eum unde
        doloribus ipsa, dignissimos asperiores ab! Rem provident, et autem
        delectus dolore non nihil eligendi, neque, omnis eaque quod sit aliquam.
        Deleniti, quae! A aspernatur eligendi ea libero consequatur sunt
        mollitia? Molestias possimus similique vero quod iusto? Dignissimos,
        doloremque consectetur inventore, harum autem necessitatibus optio porro
        in, eveniet unde vel expedita ipsam. Enim repellendus nostrum maiores
        necessitatibus quod, velit in ut laborum consectetur!
      </p>
    </motion.section>
  );
};
