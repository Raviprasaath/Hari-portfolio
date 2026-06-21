import sampleGif from "../assets/sample.jpg"
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Portfolio() {
    useScrollToTop();

    return (
        <>
            {/* Portfolio */}
            <section className="min-h-screen bg-black text-white px-6 py-20">
                <div className="max-w-7xl mx-auto">

                    <h1 className="text-5xl font-bold text-center mb-4">
                        Gallery
                    </h1>

                    <h2 className="text-xl text-zinc-400 text-center mb-16">
                        Our Creative Showcase
                    </h2>

                    {/* Featured Video */}
                    <div className="rounded-xl overflow-hidden border border-zinc-800 mb-5">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                                title="Portfolio Video"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="overflow-hidden rounded-xl border border-zinc-800">
                            <img
                                src={sampleGif}
                                alt="Gallery 1"
                                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                            />
                        </div>

                        <div className="overflow-hidden rounded-xl border border-zinc-800">
                            <img
                                src={sampleGif}
                                alt="Gallery 2"
                                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-zinc-950 text-white px-6 py-24">
                <div className="max-w-4xl mx-auto">

                    <h2 id="contact-us" className="text-5xl font-bold text-center mb-4">
                        Contact Us
                    </h2>

                    <p className="text-zinc-400 text-center mb-12">
                        Let's discuss your next project.
                    </p>

                    <form className="grid md:grid-cols-2 gap-6">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                        />

                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                        />

                        <input
                            type="text"
                            placeholder="Company / Brand"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                        />

                        <textarea
                            rows="6"
                            placeholder="Tell us about your project..."
                            className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500 resize-none"
                        />

                        <button
                            type="submit"
                            className="md:col-span-2 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-lg font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}