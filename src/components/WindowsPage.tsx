import { Image, Menu, Power, Settings, User } from "lucide-react";
import React from "react";

const programs = [
  { letter: "C", items: [{ name: "CSS", icon: "/css.png", prior: false }] },
  { letter: "D", items: [{ name: "Docker", icon: "/docker.png", prior: false }] },
  { letter: "E, É", items: [{ name: "Express", icon: "/express.png", prior: false }] },
  { letter: "F", items: [{ name: "Figma", icon: "/figma.png", prior: false }] },
  { letter: "G", items: [{ name: "Github", icon: "/github.png", prior: false }] },
  { letter: "H", items: [{ name: "Html", icon: "/html.png", prior: false }] },
  { letter: "J", items: [{ name: "Javascript", icon: "/js.png", prior: false }] },
  {
    letter: "M",
    items: [
      { name: "Markdown", icon: "/markdown.png", prior: false },
      { name: "MongoDB", icon: "/mongoDB.png", prior: false },
      {name: "MySQL", icon: "/mysql.png", prior: false}
    ],
  },
  {
    letter: "N",
    items: [
      { name: "Next.js", icon: "/nextjs.png", prior: true },
      { name: "Node.js", icon: "/node.png", prior: false },
    ],
  },
  {
    letter: "P",
    items: [
      { name: "PostgreSQL", icon: "/postgresql.png", prior: true },
      { name: "Prisma", icon: "/prisma.png", prior: true },
    ],
  },
  {
    letter: "R",
    items: [
      { name: "React", icon: "/react.png", prior: true },
      { name: "Redux", icon: "/redux.png", prior: true },
    ],
  },
  { letter: "S", items: [{ name: "Shadcn/ui", icon: "/shadcnui.png", prior: false }] },
  {
    letter: "T",
    items: [
      { name: "Tailwind", icon: "/tailwind.png", prior: true  },
      { name: "Trello", icon: "/trello.png", prior: false },
      { name: "Typescript", icon: "/typescript.png", prior: true  },
    ],
  },
  {
    letter: "V",
    items: [
      { name: "Vercel", icon: "/vercel.png", prior: false},
      { name: "Vite", icon:"/vite.png", prior: false},
    ],
  },
];

function WindowsPage({ windowsPageRef }: {windowsPageRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div
      ref={windowsPageRef}
      className="fixed bottom-[48px] w-[344px] bg-[rgb(205,205,205)] h-[650px] flex flex-col cursor-default"
    >
      {/* Bal oldali ikonok */}
        <div className="w-[48px] h-[48px] flex justify-center items-center absolute top-0">
          <Menu />
        </div>
      <div className="absolute bottom-0 left-0 flex flex-col">
        <div className="w-[48px] h-[48px] flex justify-center items-center">
          <User />
        </div>
        <div className="w-[48px] h-[48px] flex justify-center items-center">
          <Image />
        </div>
        <div className="w-[48px] h-[48px] flex justify-center items-center">
          <Settings />
        </div>
        <div className="w-[48px] h-[48px] flex justify-center items-center">
          <Power />
        </div>
      </div>

      {/* Programok listája */}
      <div
        className="ml-[48px] p-2 text-sm overflow-y-auto"
        style={{ height:"100%" }}
      >
        <p className="h-[30px] font-medium hover:bg-[rgb(244,244,244)] pl-1 flex items-center">Gyakran használt</p>

        {programs.map((group) => {
          return ( <div key={group.letter} className={`mb-${group.items.length > 2 ? '2' : '0'} `}>
            {/* Programok */}
            {group.items.map((program, index) => {
              if (program.prior) {
                return (
                  <div key={program.name} className="h-[30px] flex items-center gap-3 hover:bg-[rgb(244,244,244)] pl-1">
                    <img src={program.icon} alt={program.name} className="h-[24px]" />
                    <span>{program.name}</span>
                  </div>
                )
              }
              else{
                return <React.Fragment key={index}></React.Fragment>
              }
          })}
          </div>)
        })}

        {/* Programok felsorolása */}
        {programs.map((group) => (
          <div key={group.letter} className={`mb-${group.items.length > 2 ? '2' : '0'} cursor-default`}>
            {/* Betű */}
            <p className="h-[30px] font-medium hover:bg-[rgb(244,244,244)] pl-1 flex items-center">{group.letter}</p>

            {/* Programok */}
            {group.items.map((program) => (
              <div key={program.name} className="h-[30px] flex items-center gap-3 hover:bg-[rgb(244,244,244)] pl-1">
                <img src={program.icon} alt={program.name} className="h-[24px]" />
                <span>{program.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WindowsPage;
