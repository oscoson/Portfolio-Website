import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  // Split panels into rows of two
  const panels = [
    {
      title: "Languages",
      items: [
        { name: "C#", icon: "/icons/javascript.svg" },
        { name: "C++", icon: "/icons/typescript.svg" },
        { name: "C", icon: "/icons/python.svg" },
        { name: "Python", icon: "/icons/cpp.svg" },
        { name: "JavaScript", icon: "/icons/java.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "HTML", icon: "/icons/java.svg" },
        { name: "CSS", icon: "/icons/java.svg" },
        { name: "YAML", icon: "/icons/java.svg" },
      ],
      gradient: "from-yellow-400 via-orange-400 to-pink-400",
      linear: "linear-gradient(90deg, #facc15 0%, #fb7185 100%)",
    },
    {
      title: "Frameworks/Libraries",
      items: [
        { name: "Unity", icon: "/icons/react.svg" },
        { name: "Unreal", icon: "/icons/react.svg" },
        { name: "Pandas", icon: "/icons/react.svg" },
        { name: "Cypress", icon: "/icons/nextjs.svg" },
        { name: "Jest", icon: "/icons/nodejs.svg" },
        { name: "Node.js", icon: "/icons/express.svg" },
        { name: "NextJS", icon: "/icons/tailwindcss.svg" },
        { name: "Tailwind", icon: "/icons/tailwindcss.svg"},
        { name: "Bootstrap", icon: "/icons/tailwindcss.svg" },
      ],
      gradient: "from-blue-400 via-cyan-400 to-green-400",
      linear: "linear-gradient(90deg, #60a5fa 0%, #34d399 100%)",
    },
    {
      title: "Developer Tools",
      items: [
        { name: "Git", icon: "/icons/vscode.svg" },
        { name: "GitHub", icon: "/icons/github.svg" },
        { name: "VS Code", icon: "/icons/npm.svg" },
        { name: "Visual Studio", icon: "/icons/webpack.svg" },
        { name: "Eclipse", icon: "/icons/vscode.svg" },
        { name: "IntelliJ", icon: "/icons/git.svg" },
        { name: "Jupyter Notebook", icon: "/icons/github.svg" },
        { name: "Jira", icon: "/icons/npm.svg" },
        { name: "Confluence", icon: "/icons/webpack.svg" },
        { name: "Figma", icon: "/icons/webpack.svg" },
      ],
      gradient: "from-purple-400 via-indigo-400 to-blue-400",
      linear: "linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)",
    },
    {
      title: "Technologies",
      items: [
        { name: "Windows", icon: "/icons/docker.svg" },
        { name: "MacOS", icon: "/icons/mongodb.svg" },
        { name: "Linux", icon: "/icons/firebase.svg" },
        { name: "Meta Horizon OS", icon: "/icons/aws.svg" },
        { name: "VMWare Workstation", icon: "/icons/linux.svg" },
        { name: "OpenAI", icon: "/icons/docker.svg" },
        { name: "Llama", icon: "/icons/mongodb.svg" },
      ],
      gradient: "from-green-400 via-lime-400 to-yellow-400",
      linear: "linear-gradient(90deg, #34d399 0%, #facc15 100%)",
    },
  ];

  // Helper to chunk panels into rows of two

  // Decreased gap between panel columns from gap-2 to gap-1
  const chunkPanels = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

  return (
    <Section crosses>
      <div className="mt-[-80px]">
        <h2 className="text-3xl font-bold text-center text-white mb-10 drop-shadow">
          Skills
        </h2>
        <div className="flex flex-col gap-5 w-full">
          {chunkPanels(panels, 2).map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-row justify-center w-full gap-5"
            >
              {row.map((panel, idx) => (
                <div
                  key={panel.title}
                  className={`rounded-2xl p-6 shadow-lg relative transition-transform duration-300 hover:scale-105`}
                  style={{
                    zIndex: 10 - (rowIdx * 2 + idx),
                    width: "32.5%",
                    maxWidth: "32.5%",
                    background: panel.linear,
                    backgroundSize: "200% 200%",
                    animation: "gradientMove 6s ease-in-out infinite",
                  }}
                >
                  <h3 className="text-2xl text-white mb-4 drop-shadow text-center">
                    {panel.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {panel.items.map((item) => (
                      <div
                        key={item.name}
                        className="group border-2 border-white/60 rounded-xl p-3 bg-white/20 backdrop-blur flex flex-col items-center transition-all duration-200 hover:border-yellow-300 hover:bg-white/40 hover:shadow-xl cursor-pointer"
                        title={item.name}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-10 h-10 mb-1 transition-transform duration-200 group-hover:scale-110"
                        />
                        <span className="text-xs text-white font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes gradientMove {
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

export default Collaboration;
