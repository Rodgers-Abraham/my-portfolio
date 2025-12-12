import Link from "next/link";
import { client, urlFor } from "../../../sanity/client"; // Import the new urlFor helper
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// 1. Fetch the data (including the main image if you used it)
async function getBlogPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    category,
    publishedAt,
    mainImage,
    body
  }`;
  
  const data = await client.fetch(query, { slug });
  return data;
}

// 2. Define how to render images inside the text body
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
          {/* This converts the strange Sanity code into a real URL */}
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            className="object-cover w-full h-full"
          />
        </div>
      );
    },
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return <div className="min-h-screen bg-[#05050A] text-white flex items-center justify-center">Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#05050A] text-gray-200 p-6 md:p-24 relative overflow-hidden">
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10 mt-10">
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition mb-8">
                ← Back to Journal
            </Link>

            <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex gap-3 text-sm mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {post.category || "Article"}
                    </span>
                    <span className="flex items-center text-gray-500">
                        {post.publishedAt 
                          ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                          : 'Recent'}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                    {post.title}
                </h1>

                {/* SHOW MAIN IMAGE (If you uploaded one at the top) */}
                {post.mainImage && (
                  <div className="w-full h-[400px] relative rounded-xl overflow-hidden mb-8 border border-white/10">
                    <img
                      src={urlFor(post.mainImage).url()}
                      alt="Main Cover"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-loose">
                {/* We pass the custom component here! */}
                <PortableText value={post.body} components={ptComponents} />
            </div>
            
        </div>
    </main>
  );
}