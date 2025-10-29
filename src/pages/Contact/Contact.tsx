import {useState} from "react";


function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // зупиняємо стандартну поведінку форми

        const res = await fetch("https://formspree.io/f/movpeybd", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setFormData({ name: "", email: "", message: "" });
            alert("Your form was submitted successfully!");
        } else {
            alert("Something went wrong!");
            console.log("error occurred while submitting");
        }
    }
    return (
        <div>
            <div className="bg-white min-h-screen flex items-center justify-center py-12 px-6">
                <div className="w-full max-w-md">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-light text-gray-900 mb-3">
                            Contact
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Let's start a conversation
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-0 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-cyan-700 transition-colors duration-300"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-0 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-cyan-700 transition-colors duration-300"
                            />
                        </div>

                        <div>
            <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-cyan-700 transition-colors duration-300 resize-none"
            />
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full py-3 text-cyan-700 font-medium border border-cyan-700 hover:bg-cyan-700 hover:text-white transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-xs text-gray-400 mb-6">Or reach us directly</p>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-600">utereskovi@gmail.com</p>
                            <p className="text-sm text-gray-600">+380 66 726 39 12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;