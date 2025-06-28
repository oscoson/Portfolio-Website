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
        { name: "C#", icon: "./icons/c-sharp.svg" },
        { name: "C++", icon: "src/assets/icons/icons8-c++.svg" },
        { name: "C", icon: "src/assets/icons/icons8-c-programming.svg" },
        { name: "Python", icon: "src/assets/icons/icons8-python.svg" },
        { name: "JavaScript", icon: "src/assets/icons/icons8-javascript.svg" },
        { name: "Java", icon:  "src/assets/icons/icons8-java.svg"},
        { name: "HTML", icon: "src/assets/icons/icons8-html.svg" },
        { name: "CSS", icon: "src/assets/icons/icons8-css.svg" },
        { name: "YAML", icon: "src/assets/icons/Official_YAML_Logo.svg" },
      ],
      gradient: "from-yellow-700 via-orange-700 to-pink-700",
      linear: "linear-gradient(270deg, #be995c, #fe995c, #be555e,  #be185d)",
    },
    {
      title: "Frameworks/Libraries",
      items: [
        { name: "Unity", icon: "src/assets/icons/icons8-unity.svg" },
        { name: "Unreal", icon: "src/assets/icons/icons8-unreal-engine.svg" },
        { name: "Pandas", icon: "src/assets/icons/icons8-pandas.svg" },
        { name: "Cypress", icon: "src/assets/icons/cypress-1.svg" },
        { name: "Jest", icon: "src/assets/icons/Jest.svg" },
        { name: "Node.js", icon: "src/assets/icons/Node.js.svg" },
        { name: "NextJS", icon: "src/assets/icons/Next.js.svg" },
        { name: "Tailwind", icon: "src/assets/icons/Tailwind CSS.svg"},
        { name: "Bootstrap", icon: "src/assets/icons/icons8-bootstrap.svg" },
      ],
      gradient: "from-blue-700 via-cyan-700 to-green-700",
      linear: "linear-gradient(270deg, #1d4ed8, #059669, #1d4ed8, #059669)",
    },
    {
      title: "Developer Tools",
      items: [
        { name: "Git", icon: "src/assets/icons/Git.svg" },
        { name: "GitHub", icon: "src/assets/icons/GitHub.svg" },
        { name: "VS Code", icon: "src/assets/icons/Visual Studio Code (VS Code).svg" },
        { name: "Visual Studio", icon: "src/assets/icons/Visual Studio.svg" },
        { name: "Eclipse", icon: "src/assets/icons/Eclipse IDE.svg" },
        { name: "IntelliJ", icon: "src/assets/icons/IntelliJ IDEA.svg" },
        { name: "Jupyter Notebook", icon: "src/assets/icons/Jupyter.svg" },
        { name: "Jira", icon: "src/assets/icons/Jira.svg" },
        { name: "Confluence", icon: "src/assets/icons/Confluence.svg" },
        { name: "Figma", icon: "src/assets/icons/Figma.svg" },
      ],
      gradient: "from-purple-700 via-indigo-700 to-blue-700",
      linear: "linear-gradient(270deg, #6d28d9, #1d4ed8, #6d28d9, #1d4ed8)",
    },
    {
      title: "Technologies",
      items: [
        { name: "Windows", icon: "src/assets/icons/Windows 11.svg" },
        { name: "MacOS", icon: "src/assets/icons/MacOS_logo.svg" },
        { name: "Linux", icon: "src/assets/icons/Linux.svg" },
        { name: "Meta Horizon OS", icon: "src/assets/icons/meta-color.svg" },
        { name: "VMWare Workstation", icon: "src/assets/icons/Vmware_workstation_16_icon.svg" },
        { name: "OpenAI", icon: "src/assets/icons/icons8-chatgpt.svg" },
        { name: "Llama", icon: "src/assets/icons/meta-text.svg" },
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
