import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_2tqg50d", 
        "template_jcniw7m",
        formData,
        "VuBqKM2ImAYO_2t3x"      
      );

      if (response.status === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-indigo-400 via-blue-300 to-white items-center">
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Contact me</h1>
          <p className="text-lg text-gray-700 mb-8">
            I’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/dominik-takáč-542666322/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:scale-105 transition-transform"
            >
              <FaLinkedin className="text-white text-2xl" />
            </a>
            <a
              href="mailto:dominik.takac1337@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:scale-105 transition-transform"
            >
              <FaEnvelope className="text-white text-2xl" />
            </a>
            <a
              href="https://www.github.com/imtaki"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:scale-105 transition-transform"
            >
              <FaGithub className="text-white text-2xl" />
            </a>
          </div>
        </div>


        <div className="md:w-1/2 p-8">
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

