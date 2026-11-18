import React from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import CtaStrip from "../../components/CtaStrip";
import { ArrowRight } from "../../components/Icons";
import { certificates, education, workExperiences } from "../../data/work-experience";

const HOBBIES = ["Running", "Cycling", "Workouts", "IoT & home automation", "Game jams", "Continuous learning"];

const AboutPage = () => {
  // Oldest first on the timeline.
  const jobs = [...workExperiences].reverse();

  return (
    <div className="p-about">
      <PageMeta
        title="About – Juho Heikkinen | Software Developer"
        description="About Juho Heikkinen – full-stack software developer from Finland, working in software since 2017. Career, education and certificates."
        path="/about"
        ogDescription="Software developer from Finland. Bachelor's degree in IT from Haaga-Helia, professional experience since 2017 across private and public sector projects."
      />

      <section className="split" aria-labelledby="about-h">
        <figure className="photo" style={{ margin: 0 }}>
          <img src="/images/juho-profile-photo.jpg" alt="Portrait of Juho Heikkinen" width={800} height={800} />
          <figcaption aria-hidden="true">[02] ABOUT</figcaption>
        </figure>
        <div className="panel">
          <h1 className="hei" id="about-h">
            <span className="ln"><span style={{ animationDelay: ".1s" }}><em>Hei,</em></span></span>{" "}
            <span className="ln"><span style={{ animationDelay: ".22s" }}>I&apos;m Juho.</span></span>
          </h1>
          <p className="lede fade" style={{ animationDelay: ".5s" }}>
            A full-stack software developer from Finland. I take products from definitions through development, CI and
            release to long-term maintenance — for web, mobile and the cloud.
          </p>
          <dl className="spec fade" style={{ animationDelay: ".7s" }}>
            <div><dt>Based in</dt><dd>Finland</dd></div>
            <div><dt>Currently</dt><dd>Full-stack at Zure</dd></div>
            <div><dt>In software since</dt><dd>2017</dd></div>
            <div><dt>Education</dt><dd>Bachelor&apos;s in IT</dd></div>
          </dl>
        </div>
      </section>

      <section className="essay" aria-labelledby="story-h">
        <div className="wrap">
          <h2 className="kick" id="story-h">The short story</h2>
          <p className="lead">
            I&apos;ve worked in software since 2017 — across <mark>three companies</mark>, on private and public sector
            projects for <mark>15+ customers</mark>. I focus on solutions that are{" "}
            <mark>reliable, maintainable, and useful</mark> in everyday work.
          </p>
          <div className="cols">
            <p><b>01 — Day to day</b>Definitions and specs, frontend and backend, mobile apps, Azure cloud services, CI/CD pipelines, automated testing — and the maintenance that keeps products healthy after launch.</p>
            <p><b>02 — Free time</b>I build games, web and mobile apps, and side tools, and tinker with IoT and home automation to learn new technologies in hands-on ways.</p>
            <p><b>03 — Mindset</b>Continuous learning, both technical and personal, is a big part of how I work. Outside coding I stay active with running, cycling and regular workouts.</p>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="exp-h">
        <div className="wrap">
          <div className="sechead"><div><p className="kick">Career / 2015 → now</p><h2 className="h2" id="exp-h">The road so far</h2></div></div>
          <ol className="road">
            <li className="stop edu">
              <span className="yr">2015</span><span className="dot" aria-hidden="true" />
              <div className="stopcard">
                <span className="when">{education.years}</span>
                <h3>Haaga-Helia <span className="badge ghost">EDU</span></h3>
                <p className="role">{education.degree}, {education.school}</p>
              </div>
            </li>
            {jobs.map((job) => (
              <li className={job.current ? "stop now" : "stop"} key={job.company}>
                <span className="yr">{job.year}</span><span className="dot" aria-hidden="true" />
                <div className="stopcard">
                  <span className="when">{job.dateRange}</span>
                  <h3>{job.company} {job.current && <span className="badge">NOW</span>}</h3>
                  <p className="role">{job.role}</p>
                  <ul className="hl">{job.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" aria-labelledby="cert-h">
        <div className="wrap">
          <div className="sechead"><div><p className="kick">Credentials / learning</p><h2 className="h2" id="cert-h">Certificates</h2></div></div>
          <ul className="certs">
            {certificates.map((c) => (
              <li className="cert" key={c.name}>
                <span className="when">Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ""}</span>
                <h3>{c.name}</h3>
                <p>{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="off-h">
        <div className="wrap bandgrid">
          <div><p className="kick">Off the keyboard</p><h2 id="off-h">What keeps me going.</h2></div>
          <ul className="hob">
            {HOBBIES.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </section>

      <CtaStrip text="Want to work together?">
        <Link className="btn pri" to="/contact">Get in touch <ArrowRight /></Link>
        <Link className="btn" to="/projects">See projects</Link>
      </CtaStrip>
    </div>
  );
};

export default AboutPage;
