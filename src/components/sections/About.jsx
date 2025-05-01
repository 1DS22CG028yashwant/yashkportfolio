import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "Javascript", "TailwindCSS"];
    const backendSkills = ["Node.js", "Python", "MySql"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate about building machine learning models, testing their accuracy, and deploying impactful solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Frontend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.E. in Computer Science and Design Engineering </strong> - Dayananda Sagar College of Engineering (2022-2026)
                            </li>
                        </ul>


                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Achievements </h3>
                        <div className="space-y-4 text-gray-300 ">
                            <div>
                                <h4 className="font-semibold"> Patent Contributor: On-Booking Ambulance Service (Dec 2024)</h4>
                                <h5> Application Number: 202441091901 </h5>
                                    <p>
                                    Developed a mobile app concept for real-time ambulance booking to improve emergency response, streamlined logistics, and contributed to its patent application.
                                    </p>
                                
                            </div>
                            <div>
                                <h4 className="font-semibold"> Patent Contributor: Skin-care Smart Mirror (Nov 2024)</h4>
                                <h5> Application Number: 202441088578 </h5>
                                    <p>
                                    Co-invented a patented AI-powered smart mirror for skincare diagnostics, enabling real-time skin analysis and personalized treatment recommendations, and contributed to its patent research and documentation.
                                    </p>
                               
                            </div>

                        </div>


                    </div>


                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
