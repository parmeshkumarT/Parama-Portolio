import { Book, Code, Computer } from "lucide-react"

export const AboutMe = () => {
    return <>
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">passionate web developer and keen interest on Database Management Systems concepts</h3>
                        <p className="text-muted-foreground">
                            I'm a Computer Science student at CEG, Anna University, passionate about building secure and scalable software for the banking and financial services industry.
                            With hands-on experience in banking concepts, payment systems, SWIFT messaging, and enterprise application development, I combine my knowledge of modern full-stack technologies with a strong interest in financial technology. 
                            My goal is to develop reliable, high-performance solutions that simplify complex banking operations and deliver secure digital experiences.
                        </p>
                        <p className="text-muted-foreground">
                            In Database Management Systems, I excel in the concepts of
                            normalization and Transaction management of relational databases
                        </p>

                        <div className="flex flex-col sm:flex-row pt-4 justify-center">
                            <a href="#contacts" className="cosmic-button">
                                GET IN TOUCH
                            </a>
                            <a href="https://drive.google.com/file/d/1LHJg4hkxCpgbolSAINrIrsuFXWgp7V1w/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Domain Expertise</h4>
                                    <p className="text-muted-foreground">banking concepts,messaging standards,cards and payments</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Computer className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Internship</h4>
                                    <p className="text-muted-foreground">Technology intern in Virtusa.Inc for two months 
                                                                        gained knowledge on Agile development and Banking Domain</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Book className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Education</h4>
                                    <h2 className="font-semibold">UG</h2>
                                    <p className="text-muted-foreground">COLLEGE OF ENGINEERING GUINDY</p>
                                    <h2 className="font-semibold">HSE</h2>
                                    <p className="text-muted-foreground">SIVAKASI JAYCEES MATRICULATION SCHOOL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
