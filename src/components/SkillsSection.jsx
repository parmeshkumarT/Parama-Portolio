import { use, useState } from "react"
import { cn } from "../lib/utils";


const skills = [
    //frontend
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "Embedded javascript", level: 85, category: "frontend" },
    { name: "React.js", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },

    //backend
    { name: "node.js", level: 70, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "javascript", level: 75, category: "backend" },

    //Databases
    { name: "MongoDB", level: 90, category: "databases" },
    { name: "PostgreSQL", level: 80, category: "databases" },


    { name: "c++", level: 90, category: "programming language" },
    { name: "Javascript", level: 80, category: "programming language" },
    { name: "C", level: 85, category: "programming language" },

]
const categories = ["all", "frontend", "backend", "databases", "programming language"];

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
                        <div className="w-full bg-secondary/0 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level + "%"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}