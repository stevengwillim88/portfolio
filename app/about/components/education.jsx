import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Me4 from "@/public/image/me4.jpeg";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
      <motion.div
        className="flex justify-center items-start flex-col mb-5 "
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,

          type: "spring",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>
          <p className="text-muted-foreground ">
            Get to know more about my educational background.
          </p>
        </div>
        <div className="grid gap-8 md:gap-12">
          <div className="">
            <div className="px-5">
              <div className="font-medium text-lg">2007 - 2011</div>
              <div>
                <h2 className="font-semibold text-xl">
                  Simon Fraser University
                </h2>
                <h3 className="text-md font-normal mb-3">
                  Bachelor's Degree in Computer Science
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
