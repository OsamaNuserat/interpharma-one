import React, { useState } from "react";
import ContactUs from "../components/ContactUs";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          topic: "General Inquiry",
          message: "",
        });
      } else {
        setResponseMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ContactUs />
      
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white" id="contact-us">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">
              Let's Connect
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions or need assistance? We're here to help! Fill out the
              form below and our team will get back to you shortly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information Panel */}
            <div className="bg-orange-600 text-white p-8 rounded-xl shadow-xl md:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-orange-100">info@interpharmaone.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-orange-100">+(962) 6515 1133</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-orange-100">Amman, Jordan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-xl md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 font-medium bg-white outline-none focus-visible:outline-none"
                      style={{
                        color: '#111827',
                        backgroundColor: '#ffffff'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 font-medium bg-white outline-none focus-visible:outline-none"
                      style={{
                        color: '#111827',
                        backgroundColor: '#ffffff'
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 font-medium bg-white outline-none focus-visible:outline-none"
                      style={{
                        color: '#111827',
                        backgroundColor: '#ffffff'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 font-medium bg-white outline-none focus-visible:outline-none"
                      style={{
                        color: '#111827',
                        backgroundColor: '#ffffff'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Topic
                  </label>
                  <div className="relative">
                    <select
                      id="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-gray-900 font-semibold appearance-none cursor-pointer hover:border-gray-400 shadow-sm outline-none focus-visible:outline-none"
                      style={{ 
                        backgroundColor: '#ffffff',
                        color: '#111827',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      <option value="General Inquiry" className="bg-white text-gray-900 py-3 font-semibold" style={{color: '#111827', backgroundColor: '#ffffff', fontWeight: '600'}}>General Inquiry</option>
                      <option value="Pharmaceutical Development" className="bg-white text-gray-900 py-3 font-semibold" style={{color: '#111827', backgroundColor: '#ffffff', fontWeight: '600'}}>Pharmaceutical Development</option>
                      <option value="Quality Assurance" className="bg-white text-gray-900 py-3 font-semibold" style={{color: '#111827', backgroundColor: '#ffffff', fontWeight: '600'}}>Quality Assurance</option>
                      <option value="Testing Services" className="bg-white text-gray-900 py-3 font-semibold" style={{color: '#111827', backgroundColor: '#ffffff', fontWeight: '600'}}>Testing Services</option>
                      <option value="Consultation" className="bg-white text-gray-900 py-3 font-semibold" style={{color: '#111827', backgroundColor: '#ffffff', fontWeight: '600'}}>Consultation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        style={{color: '#374151'}}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none text-gray-900 font-medium bg-white outline-none focus-visible:outline-none"
                    style={{
                      color: '#111827',
                      backgroundColor: '#ffffff'
                    }}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {responseMessage && (
                  <div className={`p-4 rounded-lg text-center font-medium ${
                    responseMessage.includes("successfully") 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {responseMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
