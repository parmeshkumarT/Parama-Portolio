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
                        <h3 className="text-2xl font-semibold">passionate web developer and keen interest on Database Management Systems theorotical concepts</h3>
                        <p className="text-muted-foreground">
                            i have a passionate interest in creating front-end applications
                            and single page web applications using react and also currently
                            gaining knowledge on the utility first styling tailwindcss by
                            exploring may of the inbuitl and also creating custom utility classes.
                        </p>
                        <p className="text-muted-foreground">
                            In Database Management Systems, I excel in the concepts of
                            normalization and Transaction management of relational databases
                            I also explore on SQL queries using different function,procedures,
                            triggers andf cursors
                        </p>

                        <div className="flex flex-col sm:flex-row pt-4 justify-center">
                            <a href="#contacts" className="cosmic-button">
                                GET IN TOUCH
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">
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
                                    <h4 className="font-semibold text-lg">web development</h4>
                                    <p className="text-muted-foreground">creating responsive and visualy appealing websites</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Computer className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">DBMS</h4>
                                    <p className="text-muted-foreground">excelling in normalization and transaction management</p>
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
                                    <h2 className="font-semibold">HSE</h2>
                                    <p className="text-muted-foreground">SIVAKASI JAYCEES MATRICULATION SCHOOL</p>
                                    <h2 className="font-semibold">UG</h2>
                                    <p className="text-muted-foreground">COLLEGE OF ENGINEERING GUINDY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}