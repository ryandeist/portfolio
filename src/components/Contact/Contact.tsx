import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ContactHeader from '../ContactHeader/ContactHeader';

const Contact: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                'service_x1jiqmd',
                'template_4mxjprm',
                form.current,
                'RBn94utGb-zHcfS_h'
            )
            .then(
                () => {
                    setSent(true);
                    form.current?.reset();
                },
                (error) => {
                    console.error('Email send error:', error.text);
                }
            );
    };

    return (
        <main className="max-w-4xl mx-auto px-4 pt-24 pb-16 text-gray-800">
            <ContactHeader />

            <div className="text-center mb-6">
                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-semibold transition"
                >
                    {isFormOpen ? 'Hide Contact Form' : 'Send a Message'}
                </button>
            </div>

            {isFormOpen && (
                <section className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-medium mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-md font-semibold transition"
                            >
                                Send
                            </button>
                        </div>
                        {sent && (
                            <p className="text-green-600 text-center font-medium">
                                Message sent successfully!
                            </p>
                        )}
                    </form>
                </section>
            )}
        </main>
    );
};

export default Contact;
