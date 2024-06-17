import Project from "./ProjectItem";
import { projects } from "@/data/projects";


export default function Projects(): JSX.Element {
   return (
      <section
         id="projects"
         className="w-full pb-6 z-30 overflow-hidden my-6 flex items-center flex-col gap-14"
      >
         <h2 className="text-bold text-3xl text-center my-4 text-[#61DAFB]">My Recents projects</h2>
         <div className=" flex flex-wrap items-center justify-center gap-12 w-full">
            {projects.map((item: IprojectCard, key: number) => (
               <Project
                  key={key}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  link={item.link}
               />
            ))}
         </div>
      </section>
   );
}
