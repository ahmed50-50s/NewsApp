import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-6" style={{width:"100%"}}>
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="mt-2 text-gray-700">
          Welcome to <strong>Your News Website Name</strong>, your trusted source for accurate and timely news.
          We are committed to delivering insightful analysis and in-depth reports on politics, business, technology, 
          entertainment, sports, and more.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2 text-gray-700">
          Our mission is to inform, educate, and empower our readers with reliable news coverage. We strive to provide 
          unbiased and fact-checked information to keep you updated on global and local events.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          <li><strong>Integrity:</strong> Adhering to the highest ethical standards in journalism.</li>
          <li><strong>Accuracy:</strong> Ensuring well-researched and fact-checked news.</li>
          <li><strong>Independence:</strong> Remaining unbiased and transparent in our reporting.</li>
          <li><strong>Diversity:</strong> Covering stories from multiple perspectives.</li>
          <li><strong>Engagement:</strong> Encouraging reader participation and discussions.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          <li>24/7 coverage of breaking news</li>
          <li>Expert opinions and exclusive interviews</li>
          <li>Trusted sources and investigative journalism</li>
          <li>User-friendly and engaging reading experience</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
        <p className="mt-2 text-gray-700">
          We value your feedback and welcome your input. Contact us at:
        </p>
        <p className="mt-2 text-gray-900 font-semibold">📧 Email: ak728233@gmail.com</p>
        <p className="text-gray-900 font-semibold">🌐 Website: www.newsApp.com</p>
        <p className="text-gray-900 font-semibold">📱 Follow us on Social Media</p>
      </section>
    </div>
  );
}