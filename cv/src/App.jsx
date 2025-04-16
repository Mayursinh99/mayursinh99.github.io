import React from 'react';
import './index.css';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-cyan-400">Mayursinh Jadeja</h1>
        <p className="text-lg">Associate Security Engineer</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">About Me</h2>
        <p className="mt-2">
          Passionate InfoSec professional with 3 years of experience in web and mobile penetration testing, 
          specializing in uncovering vulnerabilities and securing modern applications.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Experience</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Atos (Eviden) - Associate Security Engineer</h3>
          <p className="text-sm text-gray-400">April 2023 - Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Performed web & mobile app penetration testing (OWASP Top 10)</li>
            <li>Used MobSF, Frida, JADX, Burp Suite, Metasploit, Nessus</li>
            <li>Created detailed PoC reports & collaborated with devs</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Nangia Andersen LLP - Associate Engineer</h3>
          <p className="text-sm text-gray-400">March 2022 - February 2023</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Worked on international project in Riyadh, KSA</li>
            <li>Conducted full-stack testing of web, mobile, and APIs</li>
            <li>Discovered critical vulnerabilities in production systems</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Education</h2>
        <ul className="list-disc list-inside mt-2">
          <li>B.E. in Information Technology, Gujarat Technological University (2017 - 2021)</li>
          <li>Higher Secondary School, Shree Dakshinamurty Vinay Mandir (2015 - 2017)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Skills</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          {["Web App Pentesting", "Mobile App Pentesting", "Network Pentesting", "API Security", "Thick Client Testing"].map(skill => (
            <li key={skill} className="bg-gray-700 px-3 py-1 rounded-md">{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Certifications</h2>
        <ul className="list-disc list-inside mt-2">
          <li>eWPTX (eLearn Security)</li>
          <li>Certified AppSec Practitioner (The SecOps)</li>
          <li>Certified Cloud Security Practitioner - AWS (The SecOps)</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        Contact: <a href="mailto:Jadeja281299@gmail.com" className="text-cyan-400">Jadeja281299@gmail.com</a> | +91 9998393633
      </footer>
    </div>
  );
}

export default App;
