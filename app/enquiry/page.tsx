"use client";

import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const EnquiryPage: NextPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    project: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Enquiry - Avadh Group</title>
      </Head>
      <div className="relative min-h-screen w-full">
        <Image
          src="/images/resi-ongoing/01-riverside.webp"
          alt="Luxury real estate background"
          fill
          className="object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">Start Your Journey</h1>
              <p className="mt-2 text-white/80">
                Ready to experience the Avadh lifestyle? Fill out the form below.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="peer block w-full appearance-none rounded-lg border-2 border-white/30 bg-transparent px-4 py-3 text-white transition-colors duration-300 focus:border-white focus:outline-none"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="peer block w-full appearance-none rounded-lg border-2 border-white/30 bg-transparent px-4 py-3 text-white transition-colors duration-300 focus:border-white focus:outline-none"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="mobile"
                    className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer block w-full appearance-none rounded-lg border-2 border-white/30 bg-transparent px-4 py-3 text-white transition-colors duration-300 focus:border-white focus:outline-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <select
                  name="project"
                  id="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="peer block w-full appearance-none rounded-lg border-2 border-white/30 bg-transparent px-4 py-3 text-white transition-colors duration-300 focus:border-white focus:outline-none"
                  required
                >
                  <option value="" disabled className="text-gray-500">Select an Interested Project</option>
                  <option value="avadh-antilia" className="text-black">Avadh Antilia</option>
                  <option value="avadh-symphony" className="text-black">Avadh Symphony</option>
                  <option value="avadh-utopia" className="text-black">Avadh Utopia</option>
                  <option value="commercial" className="text-black">Commercial Projects</option>
                  <option value="other" className="text-black">Other</option>
                </select>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer block w-full appearance-none rounded-lg border-2 border-white/30 bg-transparent px-4 py-3 text-white transition-colors duration-300 focus:border-white focus:outline-none"
                  placeholder=" "
                  rows={4}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 origin-[0] -translate-y-6 scale-75 transform text-white/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Message (Optional)
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-rose-500 px-8 py-4 text-lg font-bold text-white transition-transform duration-300 hover:scale-105"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryPage;
