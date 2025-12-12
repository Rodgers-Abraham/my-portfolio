import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    { id: 1, title: "My Experience at the Nairobi Tech Week", category: "Tech Tour", date: "Nov 2024", excerpt: "Networking with industry leaders and learning about the future of AI in Kenya." },
    { id: 2, title: "Why I Chose C as My First Language", category: "Coding", date: "Oct 2024", excerpt: "Most people start with Python. Here is why I went the hard way with C and why I love it." },
    { id: 3, title: "Building the Matatu Radar App", category: "Case Study", date: "Sept 2024", excerpt: "The challenges of mapping local routes and how we solved traffic data problems." },
    { id: 4, title: "Understanding Pointers in C", category: "Tutorial", date: "Aug 2024", excerpt: "A visual guide to understanding memory management and pointers for beginners." }
  ];

  const glassCard = "bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300";

  return (
    <main className="min-h-screen bg-[#05050A] text-gray-200 p-6 md:p-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-16">
                <Link href="/" className="text-gray-400 hover:text-white mb-4 block transition">← Back to Home</Link>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Tech Tours & Journal</h1>
                <p className="text-gray-400 mt-2">Thoughts on coding, tech events in Kenya, and my learning journey.</p>
            </div>

            <div className="space-y-6">
                {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`} className="block">
                    <article className={`${glassCard} p-8 hover:bg-white/5 transition group cursor-pointer`}>
                        <div className="flex items-center gap-4 text-xs mb-4">
                            <span className="text-blue-400 font-semibold tracking-wider uppercase">{blog.category}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">{blog.date}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition">{blog.title}</h2>
                        <p className="text-gray-400 leading-relaxed">{blog.excerpt}</p>
                        <div className="mt-4 text-blue-400 text-sm group-hover:translate-x-2 transition inline-block">Read Article →</div>
                    </article>
                </Link>
                ))}
            </div>
        </div>
    </main>
  );
}