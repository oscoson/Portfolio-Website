import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="projects">
      <div className="container relative z-2">
        <Heading
          tag="What I've Done"
          title="Projects"
        />

        <div className="relative">
          <LeftLine />
          <RightLine />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 ">
          {[
            {
              title: "Crash Kitchen",
              image: "/images/portfolio.png",
              description: "University capstone project featuring multiplayer, VR and physics-based mechanics. Players must prepare meals under time pressure while driving and avoiding obstacles.",
              link: "https://github.com/yourusername/portfolio-website",
              tools: ["3D", "Multiplayer", "Physics-based", "VR"],
            },
            {
              title: "Flight-Booking System",
              image: "/images/ecommerce.png",
              description: "Worked with a team of 3 to build a website simulating the booking process of flight tickets. Leveraged Cypress and Jest frameworks for quality assurance testing.",
              link: "https://github.com/yourusername/ecommerce-store",
              tools: ["JavaScript", "Cypress", "Jest", "Node.js", "NextJS"],
            },
            {
              title: "Mirror Madness",
              image: "/images/chatapp.png",
              description: "The most recent game jam project I participated in. Mirrors and various forms of symmetry can be utilised to create paths towards level-end goal.",
              link: "https://github.com/yourusername/chat-app",
              tools: ["2D", "Puzzle", "Platformer"],
            },
            {
              title: "Arctic Mania",
              image: "/images/portfolio.png",
              description: "A week long game jam project where I took leadership of a team of 8. Players control a penguin, cycling through weaponry and fending off hordes of arctic animals.",
              link: "https://github.com/yourusername/portfolio-website",
              tools: ["2D", "Top-Down", "Shoot-em-up"],
            },
            {
              title: "Extreme Karim",
              image: "/images/ecommerce.png",
              description: "Took on the role as team lead in an agile development environment to create a desmonstrative platforming game with Unreal Engine 4 and C++.",
              link: "https://github.com/yourusername/ecommerce-store",
              tools: ["3D", "Platformer"],
            },
            {
              title: "Dice Quest",
              image: "/images/chatapp.png",
              description: "A game jam project with a heavy amount of refinement poured into it after the event. Players roll a variety of dice to strategically defeat enemies and progress through levels.",
              link: "https://github.com/yourusername/chat-app",
              tools: ["2D", "Turn-Based", "Adventure"],
            },
            {
              title: "Hamstar",
              image: "/images/portfolio.png",
              description: "A gravity-themed platformer where players navigate a hamster around planets simulating gravitional pull. The crafted experience of this game jam project landed a 1st place win.",
              link: "https://github.com/yourusername/portfolio-website",
              tools: ["2D", "Platformer", "Gravity"],
            },
            // Add more projects as needed
          ].map((project, idx) => (
            <div
              key={idx}
              className=" scale-105 border-l-indigo-900 border-r-indigo-900 rounded-xl border-4 border-violet-900 shadow-lg transition-all duration-250 hover:scale-110 ease-in-out hover:border-purple-700 hover:shadow-2xl group flex flex-col items-center p-2 bg-[#12101f] hover:bg-gradient-animate"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border-2 border-indigo-900 group-hover:border-color-1 transition"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-violet-600 text-white px-2 py-1 rounded text-xs font-medium "
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .hover\\:bg-gradient-animate:hover {
            background: linear-gradient(270deg, #11000f, #140F32, #11000f, #140F32, #11000f);
            background-size: 600% 600%;
            animation: gradientBG 15s ease-in-out infinite;
          }
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </Section>
  );
};

export default Pricing;
