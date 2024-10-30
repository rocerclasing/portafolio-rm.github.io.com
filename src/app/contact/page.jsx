'use client'; // Make sure this is at the top

import { useState } from "react";
import emailjs from "emailjs-com"; // Make sure to import emailjs


const Page = () => {
    const [data, setData] = useState({
        to_name: '',
        from_name: '',
        message: '',
        reply_to: ''
    });
    const [alert, setAlert] = useState({ message: '', type: '' });
    const [loading, setLoading] = useState(false);

    const serviceID = 'service_4yl0kbk';
    const templateID = 'template_bw6ay6d';
    const publicKey = 'e2SnqavPZWpQGwyg9'; // Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await emailjs.send(serviceID, templateID, data, publicKey);
            setAlert({ message: 'Message sent successfully!', type: 'success' });
            setData({ to_name: '', from_name: '', message: '', reply_to: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setAlert({ message: error.text || 'Error sending message. Please try again.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Do you have a technical issue? Want to send feedback about a beta feature? Need details about our business plan? Let us know.
                </p>

                {/* Alert */}
                {alert.message && (
                    <div className={`mb-4 p-4 text-sm rounded-lg ${alert.type === 'success' ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`} role="alert">
                        {alert.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8" method="POST">
                    <div>
                        <label htmlFor="to_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recipient's Name</label>
                        <input
                            type="text"
                            id="to_name"
                            name="to_name"
                            value={data.to_name}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={data.from_name}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            value={data.message}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="reply_to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <input
                            type="email"
                            id="reply_to"
                            name="reply_to"
                            value={data.reply_to}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700`}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Page;
