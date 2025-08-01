import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Website_Recording from "../assets/WEBSITE_VIDEO_HQ.mp4";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="oscar"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {` `}
            <span className="inline-block relative">
              Oscar San{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Building passion into projects - every step of the way.
          </p>
          {/* <Button href="/About Me" white>
            About Me
          </Button> */}
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[1024/490] lg:aspect-[1920/1080]">
                {/* Video Section */}
                  <div className="relative z-[5]">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={Website_Recording} type="video/mp4" />
                    </video>
                  </div>
                  {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                  {/* <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Code generation"
                    />
                  </ScrollParallax> */}
                </div>
              </div>

              <Gradient />
            </div>

            <BackgroundCircles />
          </div>
        </div>
      </div>
      {/* Background gradient*/}
      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"
                  style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(255, 0, 128, 0.8), rgba(0, 0, 128, 0.8), #000)',
          filter: 'blur(240px)',
        }}>
      </div>
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}


      <BottomLine />
    </Section>
  );
};

export default Hero;
