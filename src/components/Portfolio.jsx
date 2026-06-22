import { useState } from "react";
import sampleGif from "../assets/sample.jpg";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Portfolio() {
    useScrollToTop();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        mobile: "",
        company: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [apiError, setApiError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Full Name
        if (!form.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        // Email
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        // Mobile
        if (!form.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(form.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number";
        }

        // Subject
        if (!form.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        // Message
        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setApiError("");
        setSubmitted(false);

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("http://localhost:5000/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error(`Server Error (${res.status})`);
            }

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
                setForm({
                    fullName: "",
                    email: "",
                    mobile: "",
                    company: "",
                    subject: "",
                    message: "",
                });
            } else {
                setApiError(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Submit Error:", error);

            if (error.message === "Failed to fetch") {
                setApiError(
                    "Unable to connect to the server. Please try again later."
                );
            } else {
                setApiError(error.message || "Something went wrong.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Portfolio Section */}
            <section className="min-h-screen bg-black text-white px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-center mb-4">
                        Gallery
                    </h1>

                    <h2 className="text-xl text-zinc-400 text-center mb-16">
                        Our Creative Showcase
                    </h2>

                    <div className="rounded-xl overflow-hidden border border-zinc-800 mb-5">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/IZHGcU0U_W0"
                                title="Portfolio Video"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2].map((item) => (
                            <div
                                key={item}
                                className="overflow-hidden rounded-xl border border-zinc-800"
                            >
                                <img
                                    src={sampleGif}
                                    alt={`Gallery ${item}`}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-zinc-950 text-white px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    <h2
                        id="contact-us"
                        className="text-5xl font-bold text-center mb-4"
                    >
                        Contact Us
                    </h2>

                    <p className="text-zinc-400 text-center mb-12">
                        Let's discuss your next project.
                    </p>

                    {submitted && (
                        <div className="mb-6 rounded-lg bg-green-600/20 border border-green-500 text-green-400 p-4">
                            Message sent successfully!
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Full Name */}
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.fullName}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Mobile */}
                        <div>
                            <input
                                type="tel"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.mobile}
                                </p>
                            )}
                        </div>

                        {/* Company */}
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company / Brand"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                        />

                        {/* Subject */}
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <textarea
                                rows="6"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-purple-500 resize-none"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="md:col-span-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 transition py-4 rounded-lg font-semibold"
                        >
                            {isSubmitting
                                ? "Sending..."
                                : "Send Message"}
                        </button>
                        {apiError && (
                            <div className="mb-auto rounded-lg border border-red-500 bg-red-500/10 p-4 text-red-400">
                                {apiError}
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
}