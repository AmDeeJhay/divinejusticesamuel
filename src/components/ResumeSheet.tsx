import React from 'react';
import { FaEnvelope, FaPhone, FaLocationDot, FaLinkedin, FaXTwitter, FaGithub, FaLink } from 'react-icons/fa6';
import { RESUME, ResumeEntry, ResumeSkill } from '../data/resume.ts';

/**
 * The resume as a paper page (black on white, Alegreya serif), matching the main CV.
 * Used for the on-screen preview and, via the print stylesheet, for Save-as-PDF.
 */

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mt-[1.6em] mb-[0.7em] pb-[0.1em] border-b-[3px] border-black text-[1.3em] font-bold uppercase tracking-[0.04em] leading-tight break-after-avoid">
    {children}
  </h2>
);

const Entry: React.FC<{ entry: ResumeEntry }> = ({ entry }) => (
  <div className="flex justify-between gap-6 mb-[0.8em] break-inside-avoid">
    <div className="min-w-0 max-w-[78%]">
      <div className="font-bold leading-snug">
        {entry.title}
        {entry.org && <span className="ml-[1.1em]">{entry.org}</span>}
      </div>
      {entry.subtitle && (
        <div className="italic leading-snug">
          {entry.url ? (
            <a href={entry.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[0.4em] hover:underline">
              {entry.subtitle}
              <FaLink className="w-[0.7em] h-[0.7em]" aria-hidden="true" />
            </a>
          ) : (
            entry.subtitle
          )}
        </div>
      )}
      {entry.description && <p className="leading-[1.3]">{entry.description}</p>}
    </div>
    <div className="shrink-0 text-right leading-snug whitespace-nowrap">
      {entry.date && <div>{entry.date}</div>}
      {entry.location && <div>{entry.location}</div>}
    </div>
  </div>
);

const Skill: React.FC<{ skill: ResumeSkill }> = ({ skill }) => (
  <div className="mb-[0.9em] break-inside-avoid">
    <div className="flex items-center gap-[1.3em]">
      <span className="font-bold leading-snug">{skill.name}</span>
      {skill.level !== undefined && (
        <span className="relative h-[5px] w-[12em] max-w-[45%] shrink-0 bg-[#d4d4d4]" aria-label={`${skill.level}%`}>
          <span className="absolute inset-y-0 left-0 bg-black" style={{ width: `${skill.level}%` }} />
        </span>
      )}
    </div>
    {skill.description && <p className="leading-[1.3]">{skill.description}</p>}
    {skill.details?.map((d) => (
      <p key={d} className="leading-[1.3] mt-[0.6em]">{d}</p>
    ))}
  </div>
);

export const ResumeSheet: React.FC = () => {
  const { contact } = RESUME;
  const contactItems = [
    { icon: FaEnvelope, label: contact.email, url: `mailto:${contact.email}` },
    { icon: FaPhone, label: contact.phone, url: `tel:${contact.phone}` },
    { icon: FaLocationDot, label: contact.location },
    { icon: FaLinkedin, label: contact.linkedin.label, url: contact.linkedin.url },
    { icon: FaXTwitter, label: contact.x.label, url: contact.x.url },
    { icon: FaGithub, label: contact.github.label, url: contact.github.url },
  ];

  return (
    <article
      className="resume-sheet bg-white text-black text-[13px] sm:text-[15px]"
      style={{ fontFamily: "'Alegreya', Georgia, 'Times New Roman', serif" }}
    >
      {/* Header */}
      <header className="text-center">
        <h1 className="text-[2.15em] font-bold leading-tight">{RESUME.name}</h1>
        <p className="text-[1.4em] italic leading-tight mt-[0.1em]">{RESUME.headline}</p>
        <div className="flex flex-wrap justify-center gap-x-[1.5em] gap-y-[0.5em] mt-[0.9em]">
          {contactItems.map(({ icon: Icon, label, url }) => {
            const content = (
              <>
                <Icon className="w-[1em] h-[1em] shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </>
            );
            return url ? (
              <a key={label} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[0.6em] hover:underline">
                {content}
              </a>
            ) : (
              <span key={label} className="inline-flex items-center gap-[0.6em]">{content}</span>
            );
          })}
        </div>
      </header>

      <SectionTitle>Profile</SectionTitle>
      <p className="leading-[1.3] text-justify">{RESUME.profile}</p>

      <SectionTitle>Professional Experience</SectionTitle>
      {RESUME.experience.map((e) => (
        <Entry key={e.title + (e.org ?? e.subtitle)} entry={e} />
      ))}

      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[2.5em]">
        <div>
          {RESUME.skills.left.map((s) => <Skill key={s.name} skill={s} />)}
        </div>
        <div>
          {RESUME.skills.right.map((s) => <Skill key={s.name} skill={s} />)}
          <p className="leading-[1.3] mt-[1em]">{RESUME.skills.keywords}</p>
        </div>
      </div>

      <SectionTitle>Courses/Education</SectionTitle>
      {RESUME.education.map((e) => (
        <Entry key={e.title + e.subtitle} entry={e} />
      ))}

      {/* Declaration + signature stay together on one page */}
      <div className="break-inside-avoid">
        <SectionTitle>Declaration</SectionTitle>
        <p className="leading-[1.3]">{RESUME.declaration}</p>

        <div className="ml-auto mt-[4.5em] w-[13em] max-w-full border-t-2 border-black pt-[0.4em] text-right">
          <div className="font-bold">{RESUME.signatory.name}</div>
          <div>{RESUME.signatory.location}</div>
        </div>
      </div>
    </article>
  );
};
