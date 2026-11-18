import React from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import CtaStrip from "../../components/CtaStrip";
import { ArrowRight } from "../../components/Icons";
import { familiarSkillsData, skillsData, stackLayers } from "../../data/skills";

const SkillsPage = () => (
  <div className="p-skills">
    <PageMeta
      title="Skills – Juho Heikkinen | Software Developer"
      description="Production-focused experience across web, mobile and cloud: React, TypeScript, React Native, C#/.NET, Python, SQL, Azure, CI/CD and test automation."
      path="/skills"
    />

    <section className="shead" aria-labelledby="skills-h">
      <div className="wrap shgrid">
        <div>
          <p className="kick fade"><span className="acc" aria-hidden="true">●</span>  [03] Skills</p>
          <h1 className="ph1" id="skills-h">
            <span className="visually-hidden">Skills: </span>
            <span className="ln"><span style={{ animationDelay: ".05s" }}>The full stack,</span></span>{" "}
            <span className="ln"><span style={{ animationDelay: ".17s" }}><em>literally.</em></span></span>
          </h1>
          <p className="lede fade" style={{ animationDelay: ".45s" }}>
            Production-focused experience across web, mobile and cloud delivery — every layer from the UI down to the
            pipeline that ships it.
          </p>
        </div>
        <div>
          <ol className="stack" aria-label="Technology layers I work across">
            {stackLayers.map((layer, i) => (
              <li
                className="slab"
                key={layer.title}
                style={{ animationDelay: `${0.2 + i * 0.1}s`, ["--i" as string]: i, ["--o" as string]: 1 - i * 0.15 }}
              >
                <b>{layer.title}</b>
                <span className="t">{layer.tools}</span>
              </li>
            ))}
          </ol>
          <div className="stackcap" aria-hidden="true"><span>↑ user</span><span>production ↓</span></div>
        </div>
      </div>
    </section>

    <section className="sec" aria-labelledby="core-h">
      <div className="wrap">
        <div className="sechead">
          <div><p className="kick">Core skills / professional</p><h2 className="h2" id="core-h">What I bring to a team</h2></div>
        </div>
        <div className="tablehead" aria-hidden="true"><span /><p className="colh">Skill</p><p className="colh">Toolkit</p></div>
        <ol className="spec">
          {skillsData.map((skill, i) => (
            <li className="srow" key={skill.title}>
              <span className="n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div><h3>{skill.title}</h3><p>{skill.description}</p></div>
              <div>
                <p className="colh">Toolkit</p>
                <ul className="tags" aria-label={`${skill.title} toolkit`}>
                  {skill.toolkit.map((t) => <li className="tag" key={t}>{t}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="sec" aria-labelledby="fam-h">
      <div className="wrap">
        <div className="sechead">
          <div><p className="kick">Wider toolbox / used along the way</p><h2 className="h2" id="fam-h">Also familiar with</h2></div>
        </div>
        <div className="fam">
          {familiarSkillsData.map((cat) => (
            <div className="famcat" key={cat.title}>
              <h3>{cat.title}</h3>
              <ul className="tags">
                {cat.skills.map((s) => <li className="tag" key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="hobbynote">
          <p>
            <b>On the side: game development.</b> Godot, Unity and GameMaker through game jams and personal prototypes —
            a hobby that keeps the problem-solving sharp.
          </p>
          <Link className="more" to="/games">See the games <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>

    <CtaStrip text="Need these skills on your project?">
      <Link className="btn pri" to="/contact">Get in touch <ArrowRight /></Link>
      <Link className="btn" to="/projects">See projects</Link>
    </CtaStrip>
  </div>
);

export default SkillsPage;
