import { useState } from "react"
import{cn} from "../lib/utlis"

const Skills = [
  {name :"HTML/CSS", level:95, category:"frontend"},
  {name :"javascript", level:95, category:"frontend"},
  {name :"react", level:95, category:"frontend"},
  {name :"typescript", level:75, category:"frontend"},
  {name :"tailwind CSS", level:95, category:"frontend"},
//backend
{name :"mangoDB", level:95, category:"backend"},
{name :"express", level:85, category:"backend"},
{name :"node.js", level:95, category:"backend"},
// tools
  {name :"Git/github", level:99, category:"tools"},
  {name :"figma", level:95, category:"tools"},
  {name :"VS code", level:95, category:"tools"},


]

const category =["all","frontend","backend","tools"]





   export const SkillSection =() =>{
    const [activeCategory,setactive] = useState("all")

    const  filterSkill = Skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
  return(
    <div>
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        my <span className="text-primary">skills</span>
      </h2>
 <div className="flex flex-wrap justify-center gap-4 mb-12">
{category.map((category,key)=>(
  <button key={key} 
   onClick={()=> setactive(category)}
  
  
  
  className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
    {category}
  </button>
)
 
)}
 </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterSkill.map((skill,key)=>(
          <div key ={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
   <div className="text-left mb-4">
    <h3 className="font-semibold text-lg">
      {skill.name}
    </h3>
   </div>
   <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
   <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>


   </div>
<div className="text-right mt-1">
  <span className=" text-sm text-muted-foreground">
    {skill.level} %
  </span>
</div>


            </div>
        ))}

      </div>
    </div>


      </section>
    </div>
  )
}