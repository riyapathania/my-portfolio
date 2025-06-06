'use client';

import { motion } from 'framer-motion';

const experiences = [
  // 2024–2025
  {
    title: 'Undergraduate Researcher — Quantum Magnetism & Thermal Transport',
    time: 'June 2024 – Present',
    description:
      'Investigating exfoliated quantum magnetic materials (e.g. NaCeO₂) using COMSOL Multiphysics. Simulating thermal conductivity and diffusion in layered spin-liquid systems.',
  },
  {
    title: 'AI for Real-Time Patient Safety & Outcomes — Purdue Research Expo',
    time: 'Dec. 2024',
    description:
      'Presented a hybrid RCT framework and secondary outcome analysis for evaluating clinical AI deployments. Focused on equitable infrastructure and automation in real-time risk prediction.',
  },

  // 2023
  {
    title: 'Engineering & Analytics Intern — Tata Autocorp (Mercedes-Benz EV Reducer)',
    time: 'May 2023 – Aug. 2023',
    description:
      'Reduced component defect rate by 28% by building predictive maintenance models and optimizing manufacturing QA protocols. Automated trend detection pipelines across supplier data using statistical testing and anomaly scoring. Produced dashboards for tracking performance metrics across EV reducer lines, increasing early-warning incident detection.',
  },

  // 2022–2023
  {
    title: 'Student Technical Representative — Syracuse IT',
    time: 'Jan. 2022 – Jan. 2023',
    description:
      'Diagnosed and resolved 1500+ IT service requests, including network-level access, phishing escalations, and login infrastructure debugging. Partnered with security teams to enhance multi-factor authentication rollout and optimize system onboarding efficiency.',
  },

  // 2020–2021
  {
    title: 'Author — "My Compendium on Quantum Mechanics"',
    time: 'Aug. 2020 – Dec. 2021',
    description: (
      <>
        Published a 100+ page technical book translating frontier quantum research into simulation frameworks. Explores probabilistic models, symmetry groups, and quantum energy landscapes.{' '}
        <a
          href="https://www.amazon.in/Compendium-Quantum-Mechanics-Origin-Implications-ebook/dp/B09P4H32M1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          View on Amazon
        </a>
        .
      </>
    ),
  },
  {
    title: 'COVID-19 Physics Researcher — Punjab University',
    time: 'Apr. 2020 – Sep. 2021',
    description:
      'Led statistical analysis of regional COVID mortality using climate-linked time series. Developed policy-aligned regression models; results presented at academic review panels.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-purple-600 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-6"
          >
            <div className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full border-4 border-white" />
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-purple-400 mb-2">{exp.time}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
