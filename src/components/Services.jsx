import sampleGif from "../assets/sample.jpg"
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Services() {    
    useScrollToTop();

    const services = [
        {
            type: "video",
            title: "Product Visualization",
            video: "https://www.youtube.com/embed/NM600z8McII",
            desc: "High-quality cinematic renders and animations..."
        },
        // {
        //     type: "text",
        //     title: "Automotive CGI",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        // },
        {
            type: "image",
            title: "Interactive 3D Solutions",
            image: sampleGif,
            desc: "Photo-real product visuals designed for marketing..."
        },
        {
            type: "image",
            title: "Interactive 3D Solutions",
            image: sampleGif,
            desc: "Photo-real product visuals designed for marketing..."
        },
        {
            type: "video",
            title: "VR/MR/XR Development",
            video: "https://www.youtube.com/embed/PhxfspwMdww",
            desc: "Dynamic storytelling through smooth motion graphics..."
        },
        {
            type: "image",
            title: "Real-Time Engineering Experiences",
            image: sampleGif,
            desc: "Immersive real-time experiences optimized for web..."
        },
        {
            type: "text",
            title: "Design Consultation",
            desc: "Helping teams improve visual communication..."
        }
    ];

    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-16">
                    Our Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-white-500 transition-all duration-500 hover:-translate-y-2 group"
                        >
                            {/* Video */}
                            {service.type === "video" && (
                                <div className="aspect-video overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src={service.video}
                                        title={service.title}
                                        allowFullScreen
                                    />
                                </div>
                            )}

                            {/* Image */}
                            {service.type === "image" && (
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Text Only Header */}
                            {service.type === "text" && (
                                <div className="h-52 flex items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                                    <div className="text-center">
                                        <div className="w-16 h-[2px] bg-white-500 mx-auto mb-4"></div>
                                        <h3 className="text-3xl font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            )}

                            {/* Common Content */}
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-3 text-white">
                                    {service.title}
                                </h2>

                                <p className="text-zinc-400 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}