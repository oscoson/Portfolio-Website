import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading
          tag="What I've Done"
          title="Projects"
        />

        <div className="relative">
          <LeftLine />
          <RightLine />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 ">
          {[
            {
              title: "Portfolio Website",
              image: "/images/portfolio.png",
              description: "A personal portfolio website to showcase my projects and skills.",
              link: "https://github.com/yourusername/portfolio-website",
              tools: ["React", "Tailwind CSS", "Vite"],
            },
            {
              title: "E-commerce Store",
              image: "/images/ecommerce.png",
              description: "A full-featured e-commerce store with shopping cart and payment integration.",
              link: "https://github.com/yourusername/ecommerce-store",
              tools: ["React", "Redux", "Node.js", "MongoDB"],
            },
            {
              title: "Chat Application",
              image: "/images/chatapp.png",
              description: "A real-time chat application with group and private messaging.",
              link: "https://github.com/yourusername/chat-app",
              tools: ["React", "Socket.io", "Express", "Node.js"],
            },
            // Add more projects as needed
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-4 border-blue-400 shadow-lg transition-transform transition-shadow duration-200 hover:scale-105 hover:border-blue-600 hover:shadow-2xl group flex flex-col items-center p-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border-2 border-blue-200 group-hover:border-blue-400 transition"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
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
    </Section>
  );
};

export default Pricing;
