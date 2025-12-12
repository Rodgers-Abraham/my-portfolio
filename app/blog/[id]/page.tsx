import Link from "next/link";
import { notFound } from "next/navigation";

// 1. We copy the data here so the page knows what to look for.
// In a real app, this would come from a database.
const blogs = [
  { 
    id: 1, 
    title: "My Experience at the Nairobi Tech Week", 
    category: "Tech Tour", 
    date: "Nov 2024", 
    content: `
      Nairobi Tech Week was an eye-opener. The sheer energy in the room was palpable. 
      I had the chance to meet developers from Google, Microsoft, and several local startups.
      
      The biggest takeaway for me was the shift towards "Edge Computing" in Kenya. 
      With internet speeds improving, more processing can happen closer to the user.
      
      I also attended a workshop on System Design which completely changed how I look at 
      backend architecture. It's not just about writing code; it's about writing code that survives scale.
    `
  },
  { 
    id: 2, 
    title: "Why I Chose C as My First Language", 
    category: "Coding", 
    date: "Oct 2024", 
    content: `
      Most people start with Python because it's "easy". I chose C because I wanted to understand 
      what happens under the hood. 
      
      Pointers, memory management, and garbage collection are things you take for granted in high-level languages.
      Learning C forced me to think like a computer, not just a programmer.
      
      Yes, segmentation faults are annoying. But fixing them gives you a level of confidence 
      that simply using print() in Python never will.
    `
  },
  { 
    id: 3, 
    title: "Building the Matatu Radar App", 
    category: "Case Study", 
    date: "Sept 2024", 
    content: `
      The Matatu Radar app was born out of frustration. Traffic in Nairobi is unpredictable.
      We used TypeScript for the frontend because we needed type safety when dealing with 
      complex map data objects.
      
      One of the hardest challenges was getting real-time data without draining the user's battery.
      We solved this by implementing "passive geolocation" strategies that only ping the server
      when significant movement is detected.
    `
  },
  { 
    id: 4, 
    title: "Understanding Pointers in C", 
    category: "Tutorial", 
    date: "Aug 2024", 
    content: `
      Pointers are variables that store memory addresses. That's it. 
      
      The confusion comes when you try to dereference them. 
      Think of a pointer as a signpost. The signpost isn't the destination; 
      it just tells you where the destination is.
      
      * int x = 10;
      * int *ptr = &x;
      
      Here, 'ptr' holds the address of 'x'. If we change *ptr, we change x.
    `
  }
];

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  // Await the params to get the ID (Next.js 15 requirement)
  const { id } = await params;
  
  // Find the post that matches the ID in the URL
  const post = blogs.find((b) => b.id === parseInt(id));

  // If no post is found (e.g., /blog/999), show a 404 page
  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#05050A] text-gray-200 p-6 md:p-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10 mt-10">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition mb-8">
                ← Back to Journal
            </Link>

            {/* Header */}
            <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex gap-3 text-sm mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {post.category}
                    </span>
                    <span className="flex items-center text-gray-500">
                        {post.date}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {post.title}
                </h1>
            </div>

            {/* Content Body */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-loose">
                {/* This splits the text by newlines so it renders paragraphs properly */}
                {post.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                        {paragraph}
                    </p>
                ))}
            </div>
            
        </div>
    </main>
  );
}