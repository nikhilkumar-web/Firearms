import Link from 'next/link';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Customer 1: Sarah M., Colorado */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 space-y-4 shadow-lg">
            <div>
              <h3 className="text-lg font-bold text-white">Sarah M., Colorado</h3>
              <div className="flex text-[#BC8914] text-xl mt-1">
                ★★★★★
              </div>
            </div>
            <p className="text-sm text-[#D6DBDD] leading-relaxed italic">
              &quot;As a first-time gun owner, I was overwhelmed by the amount of conflicting information online. The American Firearms Network provided clear, concise, and—most importantly—safe guidance. Their commitment to responsible ownership is exactly what the community needs.&quot;
            </p>
          </div>

          {/* Customer 2: Renee Howard */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 space-y-4 shadow-lg">
            <div>
              <h3 className="text-lg font-bold text-white">Renee Howard</h3>
              <div className="flex text-[#BC8914] text-xl mt-1">
                ★★★★★
              </div>
            </div>
            <p className="text-sm text-[#D6DBDD] leading-relaxed italic">
              &quot;I’ve been a member of several forums over the years, but the quality of discussion on AFN is unmatched. It’s a professional environment where experts and beginners can actually talk without the typical internet noise. It’s my go-to hub for staying informed.&quot;
            </p>
          </div>
        </div>

        {/* Exact Button from Live Site */}
        <div className="text-center mt-10">
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3.5 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-wider transition-colors"
          >
            More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
