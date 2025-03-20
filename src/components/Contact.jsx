import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-8 pt-24 md:pt-40">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:item-center gap-8">
          {/* Contact - Email */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white/50">
              Get In <span className="text-violet-200/70">Touch</span>
            </h2>
            <a
              href="mailto:tllee2687@gmail.com"
              target="_blank"
              className="text-4xl max-sm:text-2xl md:text-5xl font-semibold underline decoration-gray-400 decoration-3"
            >
              tllee2687@gmail.com
            </a>
          </div>

          {/* Contact - Phone & Location */}
          <div className="text-white/50 mt-2">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <p className="text-2xl">+60 11 3712 2687</p>
            </div>
            <div className="mb-8">
              <p className="text-lg mb-1">Location</p>
              <p className="text-2xl">Malaysia</p>
            </div>
          </div>
        </div>

        {/* Contact - Name */}
        <div className="z-10 text-center mt-8 py-12">
          <h1 className="text-8xl max-sm:text-6xl md:text-[120px] lg:text-[160px] font-bold text-white/10 flex flex-col md:flex-row justify-center">
            <span>MARSON</span>
            <span>LEE</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Contact;
