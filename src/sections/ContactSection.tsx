'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
   <section class="text-gray-600 body-font relative w-full min-h-screen flex items-center">
  <div class="absolute inset-0 bg-gray-300">
    <iframe 
      width="100%" 
      height="100%" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0" 
      title="map" 
      scrolling="no" 
      src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Prayagraj,Uttar+Pradesh" 
      style="filter: grayscale(1) contrast(1.2) opacity(0.5); border: 0;">
    </iframe>
    
    <iframe 
      width="100%" 
      height="100%" 
      src="https://maps.google.com/maps?q=Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0"
      style="filter: grayscale(1) contrast(1.2) opacity(0.6);">
    </iframe>
  </div>

  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-2xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-2xl border-t-8 border-orange-600">
      <h2 class="text-gray-900 text-2xl mb-1 font-bold title-font tracking-tight">Get In <span class="text-orange-600">Touch</span></h2>
      <p class="leading-relaxed mb-5 text-gray-600 text-sm">Have a project in mind? Let's build something amazing together.</p>
      
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
        <input type="email" id="email" name="email" placeholder="hemant@example.com" class="w-full bg-gray-50 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-4 transition-all duration-200 ease-in-out">
      </div>
      
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
        <textarea id="message" name="message" placeholder="How can I help you?" class="w-full bg-gray-50 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-all duration-200 ease-in-out"></textarea>
      </div>
      
      <button class="text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 rounded-xl text-lg font-bold shadow-lg transition-all transform active:scale-95">
        Shoot Message
      </button>
      
      <p class="text-[10px] text-gray-400 mt-4 text-center italic font-medium">
        I'll get back to you as soon as possible!
      </p>
    </div>
  </div>
</section>
  );
}