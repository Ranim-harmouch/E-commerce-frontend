
import React from "react";
import Header from "../components/header";
import ContactForm from "../components/contactForm";
import { FiMail } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto py-12 px-6">
        <div className="text-gray-500 mb-6">Home / <span className="text-black">Contact</span></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="border p-6 rounded-md shadow-sm w-3/4 md:w-2/3">
            <div className="flex items-center space-x-3 mb-4 ">
              <div className="bg-red-500 text-white p-3 rounded-full ">
                <FiMail className="text-white-500" />
                </div>
              <h2 className="text-lg font-semibold">Write To Us</h2>
            </div>
            <p className="text-gray-600 mb-4">Fill out our form and we will contact <br/> you within 24 hours.</p>
            <p className="text-gray-600 flex items-center space-x-2">
              <a href="mailto:customer@powertech.com" className="text-black-500">customer@powertech.com</a>
            </p>
            <p className="text-gray-600 flex items-center space-x-2">
              <a href="mailto:support@powertech.com" className="text-black-500">support@powertech.com</a>
            </p>
          </div>
          <div>
            <ContactForm />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
