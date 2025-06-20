import { Instagram, Linkedin, Mail, MailIcon, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import * as emailjs from "emailjs-com";
import { useState } from "react"


export const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = "service_r3mrsvm";
    const TEMPLATE_ID = "template_lylztzs";
    const PUBLIC_KEY = "feTIUDiKkl2ED3MB_"
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((reult) => {
                alert("message sent");
                setFormData({ name: "", email: "", message: "" })
            })
            .catch(() => alert("OOPS something went wrong"));


    }
    return <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have any project or any idea in mind regarding web developmet,
                feel free to reach out. I'm always open for opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+918072937034" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 8072937034
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <MailIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email To</h4>
                                <a href="mailto:tparmeshkumar18506@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    tparmeshkumar18506@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Chennai, TamilNadu, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/parmesh-kumar-t-721696318/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/parmeshkumar.t/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded=lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-baclground focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-baclground focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="enter your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-baclground focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="type your message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        </div>
                        <button className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                            Send Message
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}