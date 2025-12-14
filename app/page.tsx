/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link"; 
import { client } from "../sanity/client"; // IMPORTED SANITY CLIENT
// IMPORTING ICONS
import { FaInstagram, FaWhatsapp, FaTiktok, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

type ColorStyle = {
  bg: string;
  text: string;
  border: string;
  shadow: string;
};

// --- FETCHING DATA FROM SANITY ---
async function getRecentPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0..1] {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    excerpt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  
  // FETCH REAL POSTS
  const recentPosts = await getRecentPosts();

  // --- DATA ---
  const services = [
    { id: 1, title: "Web Development", description: "Building fast, responsive websites using Next.js, React, and Tailwind CSS.", icon: "💻", color: "blue" },
    { id: 2, title: "Programming", description: "Low-level system programming, algorithms, and data structures.", icon: "⚙️", color: "green" },
    { id: 3, title: "Content Creation", description: "Producing engaging tech and humor content for TikTok & Instagram.", icon: "🎥", color: "purple" },
    { id: 4, title: "UI/UX Design", description: "Designing intuitive user interfaces that look great and are easy to navigate.", icon: "🎨", color: "orange" }
  ];

  // (Removed hardcoded recentBlogs array since we are fetching them now)

  const experience = [
    { id: 1, role: "BSIT Student", company: "University of Embu", date: "Aug 2025 - Present", description: "Pursuing a BSc in Information Technology. Focusing on software engineering, C programming, and web development.", color: "blue" },
    { id: 2, role: "Content Creator", company: "TikTok and Instagram", date: "2024 - Present", description: "Creating digital content, growing a personal brand, and engaging with an online audience.", color: "green" },
    { id: 3, role: "Martial Arts Enthusiast", company: "Personal Interest", date: "2023 - Present", description: "Active practitioner of Karate and Taekwondo, focusing on discipline and physical fitness.", color: "red" },
  ];

  // --- FEATURED PROJECTS ---
  const featuredProjects = [
    { id: 1, title: "Matatu Radar", tech: ["TypeScript"], description: "Helps day to day commuters on traffic inconveniences along their normal route.", link: "https://matatu-radar-app.vercel.app/" },
    { id: 2, title: "Allergen App", tech: ["JavaScript"], description: "AI mobile app to detect allergens with gamified safety alerts.", link: "https://allergen-app-eight.vercel.app/" },
  ];

  const skills = [
    { category: "Languages", items: ["C", "Python", "JavaScript", "TypeScript"] },
    { category: "Frameworks", items: ["Next.js", "React", "Tailwind CSS"] },
    { category: "Tools", items: ["VS Code", "Git", "GitHub", "Linux"] },
    { category: "Soft Skills", items: ["Content Creation", "Problem Solving"] },
  ];

  // --- CONTACTS WITH ICONS ---
  const contacts = [
    { name: "WhatsApp", link: "https://wa.me/254758904083", handle: "Chat on WhatsApp", icon: <FaWhatsapp className="text-3xl group-hover:text-green-500 transition"/> },
    { name: "Call Me", link: "tel:+254758904083", handle: "+254 758904083", icon: <FaPhone className="text-3xl group-hover:text-blue-500 transition"/> },
    { name: "Instagram", link: "https://instagram.com/black._.puppy", handle: "@black._.puppy", icon: <FaInstagram className="text-3xl group-hover:text-pink-500 transition"/> },
    { name: "TikTok", link: "https://tiktok.com/@black._.puppy", handle: "@black._.puppy", icon: <FaTiktok className="text-3xl group-hover:text-cyan-500 transition"/> },
    { name: "LinkedIn", link: "https://linkedin.com/in/rodgers-abraham", handle: "Rodgers Abraham", icon: <FaLinkedin className="text-3xl group-hover:text-blue-600 transition"/> },
    { name: "Twitter", link: "https://twitter.com/black_pappy17", handle: "@black_pappy17", icon: <FaTwitter className="text-3xl group-hover:text-sky-500 transition"/> },
    { name: "Email", link: "mailto:abrahamrodgers2@gmail.com", handle: "abrahamrodgers2@gmail.com", icon: <FaEnvelope className="text-3xl group-hover:text-yellow-500 transition"/> },
  ];

  // Helper for glassmorphism card style
  const glassCard = "bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300";

  // Helper for dynamic colors
  const getColorClass = (color: string, type: keyof ColorStyle) => {
    const colors: Record<string, ColorStyle> = {
      blue: { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500", shadow: "shadow-blue-500" },
      green: { bg: "bg-green-500", text: "text-green-400", border: "border-green-500", shadow: "shadow-green-500" },
      purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500", shadow: "shadow-purple-500" },
      orange: { bg: "bg-orange-500", text: "text-orange-400", border: "border-orange-500", shadow: "shadow-orange-500" },
      red: { bg: "bg-red-500", text: "text-red-400", border: "border-red-500", shadow: "shadow-red-500" },
    };
    return colors[color]?.[type] || "";
  };

  return (
    <main className="min-h-screen bg-[#05050A] text-gray-200 scroll-smooth relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#05050A]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-blue-500/50">
              <Image src="/profile.jpg" alt="Profile" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-white font-bold leading-tight">Rodgers Abraham</h1>
              <p className="text-xs text-gray-400 leading-tight">Software Engineer</p>
            </div>
          </div>
          {/* Desktop Menu - Using Links for Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            <Link href="/" className="px-4 py-1.5 text-sm text-white bg-white/10 rounded-full transition">Home</Link>
            <Link href="/projects" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition">Projects</Link>
            <Link href="/blog" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition flex items-center gap-1">
              Blog <span className="text-[10px]">↗</span>
            </Link>
            <a href="#contact" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition">Contact</a>
          </div>
          <div className="md:hidden text-2xl">☰</div>
        </div>
      </nav>

      <div className="flex flex-col items-center p-6 md:p-24 pt-32">
        {/* --- HERO SECTION --- */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-xl text-blue-400 font-medium tracking-wide">HEY, I&apos;M RODGERS ABRAHAM</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Software <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Engineer.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              IT student at University of Embu focused on programming and web development. Building scalable systems and digital content.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/projects" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/25">
                View Projects
              </Link>
              <a href="#contact" className={`px-8 py-3 ${glassCard} font-semibold text-white hover:bg-white/10`}>Contact Me</a>
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative h-full w-full rounded-full overflow-hidden border-[6px] border-white/10 z-10">
                 <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
                </div>
            </div>
          </div>
        </div>

        {/* --- ABOUT & STATS --- */}
        <div id="about" className="max-w-4xl w-full mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            I sit at the intersection of logic and creativity. While I spend my nights debugging C code, I spend my days creating engaging content. My goal is to simplify complex systems, whether via clean code or a 60-second video.
          </p>
          <div className={`grid grid-cols-3 gap-4 ${glassCard} p-8`}>
            <div><span className="block text-3xl font-bold text-blue-400">2+</span><span>Years Coding</span></div>
            <div><span className="block text-3xl font-bold text-purple-400">10k+</span><span>Views Generated</span></div>
            <div><span className="block text-3xl font-bold text-green-400">4+</span><span>Major Projects</span></div>
          </div>
        </div>

        {/* --- SERVICES SECTION --- */}
        <div className="max-w-6xl w-full mx-auto mt-32">
          <h2 className="text-3xl font-bold mb-12 text-white">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className={`${glassCard} p-6 group relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 right-0 h-1 ${getColorClass(service.color, 'bg')}`}></div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- JOURNEY SECTION --- */}
        <div id="journey" className="max-w-4xl w-full mx-auto mt-32">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">My Journey</h2>
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
            
            <div className="space-y-12">
              {experience.map((item, index) => (
                // Alternating Layout
                <div key={item.id} className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className={`w-[45%] ${glassCard} p-6 relative group`}>
                    <div className={`absolute top-0 left-0 h-full w-1 ${getColorClass(item.color, 'bg')} rounded-l-2xl opacity-60 group-hover:opacity-100 transition`}></div>
                    <div className="pl-4">
                        <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                        <p className={`text-sm font-medium mb-3 ${getColorClass(item.color, 'text')}`}>{item.company}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        <span className="text-xs text-gray-500 mt-4 block">{item.date}</span>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 flex items-center justify-center w-[10%]">
                    <div className={`h-4 w-4 rounded-full ${getColorClass(item.color, 'bg')} ring-4 ring-[#05050A] ${getColorClass(item.color, 'shadow')} shadow-[0_0_15px] animate-pulse`}></div>
                    <div className={`absolute h-0.5 w-full top-1/2 bg-gradient-to-r from-${item.color}-500/50 to-transparent ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'}`}></div>
                  </div>

                  <div className="w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- REAL-TIME GITHUB SECTION --- */}
        <div className="max-w-6xl w-full mx-auto mt-32">
          <h2 className="text-3xl font-bold mb-8 text-white">GitHub Stats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Streak Stats */}
            <div className={`${glassCard} p-6 flex flex-col items-center justify-center min-h-[250px]`}>
               <img 
                src="https://nirzak-streak-stats.vercel.app/?user=Rodgers-Abraham&theme=dark&hide_border=false" 
                alt="GitHub Streak"
                className="w-full max-w-sm"
               />
            </div>

            {/* Card 2: Contribution Graph */}
            <div className={`${glassCard} p-6 flex flex-col items-center justify-center min-h-[250px]`}>
              <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                <FaGithub /> Contribution Graph
              </h3>
              <div className="w-full overflow-x-auto">
                 <img 
                    src="https://ghchart.rshah.org/3b82f6/Rodgers-Abraham" 
                    alt="Rodgers Abraham's Github Chart" 
                    className="w-full min-w-[1200px]"
                  />
              </div>
            </div>

          </div>
        </div>

        {/* --- FEATURED PROJECTS SECTION --- */}
        <div id="projects" className="max-w-6xl w-full mx-auto mt-32">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
             <h2 className="text-3xl font-bold text-white">Featured Works</h2>
             <Link href="/projects" className="text-blue-400 hover:text-blue-300 text-sm">View All Projects →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <a key={project.id} href={project.link} target={project.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" 
                 className={`${glassCard} p-8 block group hover:-translate-y-1`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">{project.title}</h3>
                  <span className="text-gray-600 text-2xl group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition">↗</span>
                </div>
                <p className="text-gray-400 mb-6 h-12 overflow-hidden">{project.description}</p>
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

        {/* --- LATEST BLOGS SECTION (DYNAMIC NOW) --- */}
        <div id="blogs" className="max-w-6xl w-full mx-auto mt-32">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-bold text-white">Latest from Journal</h2>
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm">View All Posts →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.length > 0 ? (
                recentPosts.map((blog: any) => (
                <Link key={blog._id} href={`/blog/${blog.slug}`} className={`${glassCard} p-6 hover:bg-white/5 transition block`}>
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase">{blog.category || "Tech"}</span>
                        <span className="text-xs text-gray-500">
                          {blog.publishedAt 
                            ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                            : 'Recent'}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{blog.excerpt || "Click to read the full story..."}</p>
                </Link>
                ))
            ) : (
                <div className="text-gray-500 col-span-2 text-center py-6">
                    No recent posts found. Check Sanity Studio.
                </div>
            )}
          </div>
        </div>

        {/* --- RESUME SECTION --- */}
        <div className="max-w-6xl w-full mx-auto mt-32 p-8 md:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
            <h2 className="text-3xl font-bold text-white">Technical Skills & Resume</h2>
            <a href="/resume.pdf" download className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-500/20">
               Download CV ↓
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg font-semibold text-gray-200 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-400 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- CONTACT SECTION --- */}
        <div id="contact" className="max-w-4xl w-full mx-auto mt-32 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Let&apos;s Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact) => (
              <a key={contact.name} href={contact.link} target="_blank" rel="noopener noreferrer"
                className={`${glassCard} p-6 flex items-center gap-6 group hover:bg-white/5`}>
                
                {/* The Icon */}
                <div className="p-3 bg-white/5 rounded-full group-hover:scale-110 transition">
                   {contact.icon}
                </div>

                <div className="flex-1">
                  <span className="text-sm text-gray-500 block mb-1">{contact.name}</span>
                  <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition">{contact.handle}</span>
                </div>
                
                <span className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="w-full max-w-6xl mx-auto py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Rodgers Abraham. Built with Next.js & Tailwind.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
          </div>
        </footer>
        
        {/* Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                <span>📅</span> Book a One on One Session
            </button>
        </div>

      </div>
    </main>
  );
}