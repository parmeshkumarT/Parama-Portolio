import { use, useState } from "react"
import { cn } from "../lib/utils";


const skills = [
    //frontend
    { name: "Banking(Coorporate and Retail)", level: 90, category: "Domain Expertise" },
    { name: "SWIFT MT & MX messages", level: 85, category: "Domain Expertise" },
    { name: "Cards and Payments", level: 95, category: "Domain Expertise" },

    //Databases
    { name: "JAVA(OOPS)", level: 90, category: "Languages and Frameworks" },
    { name: "C++", level: 80, category: "Languages and Frameworks" },
    { name: "React.js", level: 80, category: "Languages and Frameworks" },
    { name: "SUPABASE", level: 80, category: "Languages and Frameworks" },
    { name: "SQL", level: 80, category: "Languages and Frameworks" },
    
    { name: "PostgreSQL(SUPABASE)", level: 90, category: "Databases & Tools" },
    { name: "Git/GitHub", level: 90, category: "Databases & Tools" },
    { name: "JIRA TOOL(Basic)", level: 90, category: "Databases & Tools" },

    {name:"SDLC-AGILE",category:"Methodologies"}


]
const categories = ["all", "Domain Expertise","Languages and Frameworks","Databases & Tools","Methodologies"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtereSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-6 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalized", "cursor-pointer",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtereSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover border border-border">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
