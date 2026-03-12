"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";
import WorkCard from "../components/WorkCard";
import CaseCard from "../components/CaseCard";


export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        
        <div className="hero-left">
          <p className="tracking-in-expand">Hello! I'm Laíla.</p>
        </div>

        <div className="hero-right">
          <h1 className="fade-in">
            I transform complex problems into practical solutions that drive
            business growth.
          </h1>

          <p className="fade-up-delay">
            Product Designer based in Brazil.
          </p>
        </div>
      </section>

     {/* STATS */}
<section className="stats">
  <div className="stats-container">

    <div className="stat">
      <h2>
        <CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
      </h2>
      <p>Years of Experience as a Product Designer</p>
    </div>

    <div className="stat">
      <h2>
        <CountUp end={4} duration={2} enableScrollSpy scrollSpyOnce />+
      </h2>
      <p>Years of Experience Developing Digital Products</p>
    </div>

    <div className="stat">
      <h2>
        <CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
      </h2>
      <p>SaaS B2B Products Designed</p>
    </div>

  </div>
</section>

  {/* WORK */}
<section className="work">
  <div className="work-container">

    <motion.h2
      className="work-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      How I...
    </motion.h2>

    <div className="work-list">

      <WorkCard
        title="Reduced task completion time by 70%"
        delay={0.2}
      >
        Redesigned a critical workflow, reducing the average completion time
        from 7 minutes to 2 minutes based on user session analysis.
      </WorkCard>

      <WorkCard
        title="Helped increase NPS metrics from –11 to 42"
        delay={0.4}
      >
        By analyzing the support workflow, designing an improved process,
        and implementing it using Zendesk.
      </WorkCard>

      <WorkCard
        title="Deliver real impact"
        delay={0.6}
      >
        I collaborate with cross-functional teams to launch solutions that
        drive business growth.
      </WorkCard>

    </div>

  </div>
</section>    

<div className="cases-grid">

  <CaseCard
    title="Freight Quotation Optimization"
    image="/cases/freight.jpg"
    delay={0.1}
  />

  <CaseCard
    title="Customer Support Workflow"
    image="/cases/support.jpg"
    delay={0.2}
  />

  <CaseCard
    title="Shipping Automation Platform"
    image="/cases/shipping.jpg"
    delay={0.3}
  />

  <CaseCard
    title="Notification Center"
    image="/cases/notification.jpg"
    delay={0.4}
  />

  <CaseCard
    title="CRM for Franchises"
    image="/cases/crm.jpg"
    delay={0.5}
  />

  <CaseCard
    title="E-commerce Integrations"
    image="/cases/integrations.jpg"
    delay={0.6}
  />

</div>

    </>
  );
}