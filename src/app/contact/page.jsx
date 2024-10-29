'use client'; // Asegúrate de que esto esté en la parte superior

import { useState } from "react";

const Page = () => {
    const [data, setData] = useState({ email: '', subject: '', message: '' });
    const [alert, setAlert] = useState({ message: '', type: '' }); // Estado para el alert

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new URLSearchParams(data).toString();
            const res = await fetch("https://formsubmit.co/robertclasing@gmail.com", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });
    
            // Check if the response is okay
            if (!res.ok) {
                const errorText = await res.text(); // Get response as text
                throw new Error(`Network response was not ok: ${errorText}`);
            }
    
            // Handle response (if necessary)
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("text/html")) {
                const responseText = await res.text();
                console.log('Response received:', responseText); // Log the HTML response for debugging
                // Optionally, you could show a success message or handle the response
            }
    
            // Clear the form
            setData({ email: '', subject: '', message: '' });
            
            // Show success alert
            setAlert({ message: 'Message sent successfully!', type: 'success' });
         
        } catch (error) {
            console.error('Error:', error);
            setAlert({ message: 'Failed to send message. Please try again.', type: 'error' });
        }
    }
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>

                {/* Alerta */}
                {alert.message && (
                    <div className={`mb-4 p-4 text-sm rounded-lg ${alert.type === 'success' ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`} role="alert">
                        {alert.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8" method="POST">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={data.subject}
                            onChange={handleChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            value={data.message}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                        name="sendmessage"
                   >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Page;
