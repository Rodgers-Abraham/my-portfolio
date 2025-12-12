import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: "Matatu Radar", tech: ["TypeScript"], description: "Helps day to day commuters on traffic inconveniences along their normal route.", link: "https://matatu-radar-app.vercel.app/" },
    { id: 2, title: "Allergen App", tech: ["JavaScript"], description: "AI mobile app to detect allergens with gamified safety alerts.", link: "https://allergen-app-eight.vercel.app/" },
    { id: 3, title: "Content Dashboard", tech: ["Analytics", "UI Design"], description: "Concept dashboard for tracking video engagement and analytics.", link: "#" },
    { id: 4, title: "Simple Shell", tech: ["C", "Linux Systems"], description: "Basic implementation of a UNIX command line interpreter.", link: "#" },
    { id: 5, title: "University Portal Redesign", tech: ["Figma", "UI/UX"], description: "A proposed redesign for the student portal focusing on mobile accessibility.", link: "#" }
  ];

  const glassCard = "bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300";

  return (
    <main className="min-h-screen bg-[#05050A] text-gray-200 p-6 md:p-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                <div>
                    <Link href="/" className="text-gray-400 hover:text-white mb-4 block transition">← Back to Home</Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">All Projects</h1>
                    <p className="text-gray-400 mt-2">A complete archive of my engineering work.</p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                <a key={project.id} href={project.link} target={project.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" 
                    className={`${glassCard} p-8 block group hover:-translate-y-1`}>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">{project.title}</h3>
                        <span className="text-gray-600 text-2xl group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition">↗</span>
                    </div>
                    <p className="text-gray-400 mb-6 h-20 overflow-hidden">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            {tech}
                            </span>
                        ))}
                    </div>
                </a>
                ))}
            </div>
        </div>
    </main>
  );
}