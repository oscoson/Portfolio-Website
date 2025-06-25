import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { experience } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="experience">
    <div className="container md:pb-10">
      <Heading tag="What I've been a part of" title="Experience" />
      {/* Allocation of experience items */}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {experience.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

            return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              {/* /* // This handles the main container for each experience item displayed */}
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 transition-shadow duration-300 hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.3)] hover:bg-n-7">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={275}
                    height={275}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  {/* // This handles the top section with the date and status */}
                  <div className=" font-bold flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                  <Tagline>{item.date}</Tagline>
                  <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                    <img
                    className="mr-2.5"
                    src={item.status === "done" ? check2 : loading1}
                    width={16}
                    height={16}
                    alt={status}
                    />
                    <div className="tagline">{status}</div>
                  </div>
                  </div>
                  {/* This handles the images within containers */}
                  <div className="mb-10 -my-10 -mx-15 flex justify-center">
                  <div className="w-1/2 rounded-xl p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <img
                    className="w-full h-auto rounded-lg bg-white"
                    src={item.imageUrl}
                    width={314}
                    height={213}
                    alt={item.title}
                    />
                  </div>
                  </div>
                  {/* This handles the text within containers */}
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
            );
        })}

        <Gradient />
      </div>
{/* 
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div> */}
    </div>
  </Section>
);

export default Roadmap;
