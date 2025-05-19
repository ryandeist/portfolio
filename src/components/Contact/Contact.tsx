import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { CSSTransition } from 'react-transition-group';
import ContactHeader from '../ContactHeader/ContactHeader';
import './Contact.css';

const Contact: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const nodeRef = useRef(null);

    const validateEmail = (email: string): boolean =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const email = formData.get('email') as string;

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsSending(true);

        try {
            await emailjs.sendForm(
                'service_x1jiqmd',
                'template_4mxjprm',
                form.current,
                'RBn94utGb-zHcfS_h'
            );

            toast.success('Message sent successfully!');
            form.current.reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again later.');
            console.error(error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main className="max-w-4xl mx-auto px-4 pt-24 pb-16 text-gray-800">
            <Toaster position="top-center" reverseOrder={false} />
            <ContactHeader />

            <div className="text-center mb-6">
                <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-semibold transition"
                >
                    {isFormOpen ? 'Nevermind' : 'Can\'t wait?'}
                </button>
            </div>

            <CSSTransition
                in={isFormOpen}
                timeout={300}
                classNames="slide-up"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <section
                    ref={nodeRef}
                    className="bg-white rounded-xl shadow-md p-6 sm:p-8"
                >
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                disabled={isSending}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                disabled={isSending}
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
                                disabled={isSending}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`px-6 py-2 rounded-md font-semibold transition ${isSending
                                        ? 'bg-gray-400 text-white cursor-not-allowed'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    }`}
                            >
                                {isSending ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </section>
            </CSSTransition>
        </main>
    );
};

export default Contact;
