
import React from "react";

function ContactUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600">Contact Us</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Have questions? We’d love to help you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6 bg-white shadow-lg p-8 rounded-2xl">
          <div>
            <h3 className="block mb-2 font-medium">Your Name</h3>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <h3 className="block mb-2 font-medium">Email Address</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <h3 className="block mb-2 font-medium">Message</h3>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-b from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:to-green-700"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <p className="text-gray-600">
              You can reach us through the form or using the details below:
            </p>
          </div>

          <div>
            <p className="mb-2">📍 Address: 123 Fresh Street, New Delhi, India</p>
            <p className="mb-2">📞 Phone: +91 98765 43210</p>
            <p className="mb-2">📧 Email: support@grocerysite.com</p>
          </div>

          {/* Optional Map */}
          <iframe
            title="map"
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924827333!2d77.068897!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd50f70a6f0f%3A0x19df6e8ad3d0c9bd!2sDelhi!5e0!3m2!1sen!2sin!4v1672131234567!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
