'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24 text-center text-white">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      {/* Email + LinkedIn */}
      <motion.div
        className="flex justify-center gap-6 mb-10 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="mailto:riyapathania@gmail.com"
          className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/harshitha-pathania-3a9907351/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/riyapathania"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>
      </motion.div>

      {/* Contact Form via FormSubmit */}
      <motion.form
        action="https://formsubmit.co/harshithapathania9@gmail.com"
        method="POST"
        className="max-w-xl mx-auto space-y-6 text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Hidden setup fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-purple-500"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 transition-all">
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-purple-500"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 transition-all">
            Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Message"
            className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-purple-500"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 transition-all">
            Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md transition text-white font-semibold"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
