import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./App.css"; // Ensure Tailwind is working

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white font-sans">
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-40 h-40 object-cover"
          />
          <h1 className="text-4xl font-bold mt-4">Mayursinh Jadeja</h1>
          <p className="text-xl mt-2">Associate Security Engineer</p>
          <p className="mt-4 text-center max-w-3xl mx-auto text-lg">
            Passionate InfoSec professional with 2.5 years of experience in web and mobile penetration testing, specializing in uncovering vulnerabilities and securing modern applications. Proficient in assessing complex security challenges, applying enterprise-grade strategies, and leveraging networking fundamentals. Skilled in both independent execution and collaborative teamwork, with a strong focus on adaptability and learning emerging technologies. Committed to continuous improvement and delivering innovative solutions to fortify web and mobile application defenses.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">Web App Pen Testing</h3>
              <div className="h-2 bg-gray-600 mt-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">Mobile App Pen Testing</h3>
              <div className="h-2 bg-gray-600 mt-2 rounded-full">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">API Security Testing</h3>
              <div className="h-2 bg-gray-600 mt-2 rounded-full">
                <div
                  className="bg-yellow-600 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">Network Pen Testing</h3>
              <div className="h-2 bg-gray-600 mt-2 rounded-full">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">Cloud Security</h3>
              <div className="h-2 bg-gray-600 mt-2 rounded-full">
                <div
                  className="bg-teal-600 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <div className="mt-4">
            <div className="bg-gray-700 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold">Atos (Eviden) | April 2023 - Present</h3>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>Conducted comprehensive web application penetration tests, identifying and exploiting vulnerabilities based on OWASP Top 10 and business logic flaws.</li>
                <li>Performed mobile application security assessments for iOS and Android platforms, using tools like MobSF, Frida, and JADX.</li>
                <li>Delivered detailed vulnerability reports, including proof-of-concept (PoC) exploitation, and actionable remediation recommendations.</li>
                <li>Used Burp Suite, OWASP ZAP, Metasploit, and Nessus for automated and manual testing.</li>
                <li>Collaborated with cross-functional teams to secure applications during the development lifecycle.</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold">Nangia Andersen LLP | March 2022 - February 2023</h3>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>Participated in an international project in Riyadh, KSA, conducting web and mobile penetration testing.</li>
                <li>Uncovered vulnerabilities in APIs (REST, SOAP) and applications, ensuring compliance with OWASP Top 10 and Mobile Top 10 standards.</li>
                <li>Discovered critical vulnerabilities in production applications, significantly improving overall security posture.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold">Education</h2>
          <div className="mt-4">
            <div className="bg-gray-700 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold">Bachelor's Degree (B.E.) in Information Technology</h3>
              <p className="text-lg mt-2">2017 - 2021</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold">Higher Secondary School</h3>
              <p className="text-lg mt-2">2015 - 2017</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <div className="mt-4">
            <ul className="list-disc list-inside text-lg">
              <li>eWPTX (eLearn Security)</li>
              <li>Certified AppSec Practitioner (The SecOps)</li>
              <li>Certified Cloud Security Practitioner (AWS - The SecOps)</li>
              <li>Associate Engineer - Cyber Security</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold">Contact</h2>
          <div className="mt-4">
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>© 2025 Mayursinh Jadeja. All Rights Reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
