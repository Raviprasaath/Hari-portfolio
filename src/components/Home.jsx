import HomeBanner from '../assets/home banner gif.mp4'
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function Home() {
    useScrollToTop();

    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 text-white">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover animate-[slowZoom_20s_linear_infinite_alternate]"
            >
                <source src={HomeBanner} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Purple Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl text-center animate-[fadeUp_0.8s_ease-out]">
                <h1 className="text-sm md:text-base uppercase tracking-[0.35em] text-white-500 mb-4">
                    About Us
                </h1>

                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    Where Engineering
                    <span className="block text-white-400">
                        Meets Cinematics
                    </span>
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
                    <p>
                        At{" "}
                        <span className="text-white font-semibold">
                            DimenX Studios
                        </span>
                        , we optimize CAD and bring automotive ideas to life
                        through high-end visualization.
                    </p>

                    <p>
                        We transform complex models into efficient,
                        real-time-ready assets while creating striking,
                        photo-real visuals that communicate design with clarity
                        and impact.
                    </p>

                    <p className="text-white-300">
                        A small team, driven by precision, speed, and a
                        relentless focus on quality.
                    </p>
                </div>
            </div>

        </section>
    );
}