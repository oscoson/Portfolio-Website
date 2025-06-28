import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

import { 
  
  csharp,
  cplus,
  c,
  python,
  javascript,
  java,
  html,
  css,
  yaml,
  unity,
  unreal,
  pandas,
  cypress,
  jest,
  nodejs,
  nextjs,
  tailwind,
  bootstrap,
  git,
  githubIcon,
  vscode,
  visualStudio,
  eclipse,
  intellij,
  jupyter,
  jira,
  confluence,
  figmaIcon,
  windows,
  macos,
  linux,
  metahorizon,
  vmware,
  openai,
  llama
 } from "../assets/index.js"; 

const Collaboration = () => {
  // Split panels into rows of two
  const panels = [
    {
      title: "Languages",
      items: [
        { name: "C#", icon: csharp },
        { name: "C++", icon: cplus },
        { name: "C", icon: c },
        { name: "Python", icon: python },
        { name: "JavaScript", icon: javascript },
        { name: "Java", icon: java },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "YAML", icon: yaml },
      ],
      gradient: "from-yellow-700 via-orange-700 to-pink-700",
      linear: "linear-gradient(270deg, #be995c, #fe995c, #be555e,  #be185d)",
    },
    {
      title: "Frameworks/Libraries",
      items: [
        { name: "Unity", icon: unity },
        { name: "Unreal", icon: unreal },
        { name: "Pandas", icon: pandas },
        { name: "Cypress", icon: cypress },
        { name: "Jest", icon: jest },
        { name: "Node.js", icon: nodejs },
        { name: "NextJS", icon: nextjs },
        { name: "Tailwind", icon: tailwind },
        { name: "Bootstrap", icon: bootstrap },
      ],
      gradient: "from-blue-700 via-cyan-700 to-green-700",
      linear: "linear-gradient(270deg, #1d4ed8, #059669, #1d4ed8, #059669)",
    },
    {
      title: "Developer Tools",
      items: [
        { name: "Git", icon: git },
        { name: "GitHub", icon: githubIcon },
        { name: "VS Code", icon: vscode },
        { name: "Visual Studio", icon: visualStudio },
        { name: "Eclipse", icon: eclipse },
        { name: "IntelliJ", icon: intellij },
        { name: "Jupyter Notebook", icon: jupyter },
        { name: "Jira", icon: jira },
        { name: "Confluence", icon: confluence },
        { name: "Figma", icon: figmaIcon },
      ],
      gradient: "from-purple-700 via-indigo-700 to-blue-700",
      linear: "linear-gradient(270deg, #6d28d9, #1d4ed8, #6d28d9, #1d4ed8)",
    },
    {
      title: "Technologies",
      items: [
        { name: "Windows", icon: windows },
        { name: "MacOS", icon: macos },
        { name: "Linux", icon: linux },
        { name: "Meta Horizon OS", icon: metahorizon },
        { name: "VMWare Workstation", icon: vmware },
        { name: "OpenAI", icon: openai },
        { name: "Llama", icon: llama },
      ],
      gradient: "from-green-700 via-lime-700 to-yellow-700",
      linear: "linear-gradient(270deg, #b45309, #b45309, #047857, #047857)",
    },
  ];

  // Helper to chunk panels into rows of two

  // Decreased gap between panel columns from gap-2 to gap-1
  const chunkPanels = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

  return (
    <Section crosses id="skills">
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
                  className={`rounded-2xl p-6 shadow-lg relative transition-transform duration-300 hover:scale-105 ease-in-out`}
                  style={{
                    zIndex: 10 - (rowIdx * 2 + idx),
                    width: "32.5%",
                    maxWidth: "32.5%",
                    background: panel.linear,
                    backgroundSize: "600% 600%",
                    animation: "gradientMove 10s ease-in-out infinite",
                  }}
                >
                  <h3 className="text-2xl text-white mb-4 drop-shadow text-center">
                    {panel.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {panel.items.map((item) => (
                      <div
                        key={item.name}
                        className="group border-2 border-white/60 rounded-xl p-3 bg-white/20 backdrop-blur flex flex-col items-center transition-all duration-200 hover:border-white hover:bg-white/5 hover:shadow-xl cursor-pointer"
                        title={item.name}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-10 h-10 mb-1 transition-transform duration-200 group-hover:scale-110"
                        />
                        <span className="text-xs text-white font-medium ">{item.name}</span>
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
