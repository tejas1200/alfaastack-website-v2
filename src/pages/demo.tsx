import {
  Award,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";

import { useSiteContent } from "@/hooks/useSiteContent";
import { resolveIcon } from "@/data/siteContent";

const TejasPortfolio = () => {
  const {
  devProfile,
  devSocial,
  devSkills,
  devExperience,
  devEducation,
  devCertificates,
  portfolio,
  loading,
} = useSiteContent();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
          <p className="text-sm text-white/60">
            Loading portfolio...
          </p>
        </div>
      </main>
    );
  }

  const socialIconMap: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
    x: Twitter,
  };

  /*
   * Group skills by category.
   *
   * Example:
   *
   * Programming
   *   Python
   *   JavaScript
   *
   * Framework
   *   Django
   *   React
   */
  const skillGroups = devSkills.reduce<
    Record<string, typeof devSkills>
  >((groups, skill) => {
    const category = skill.category || "Other";

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(skill);

    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =====================================================
          PORTFOLIO NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <a
            href="#home"
            className="text-lg font-semibold tracking-tight"
            onClick={() => setMobileMenuOpen(false)}
          >
            {devProfile.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-white/70 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#education"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Education
            </a>

            <a
              href="#certificates"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Certificates
            </a>

            <a
              href="#projects"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Contact
            </a>

          </nav>

          {devProfile.resume && (
            <a
              href={devProfile.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-950 md:flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          )}

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg border border-white/10 p-2 md:hidden"
            onClick={() =>
              setMobileMenuOpen((open) => !open)
            }
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

            <nav className="flex flex-col gap-4">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Education", "#education"],
                ["Certificates", "#certificates"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-white/70 hover:text-white"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  {label}
                </a>
              ))}

              {devProfile.resume && (
                <a
                  href={devProfile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              )}

            </nav>

          </div>
        )}

      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <main id="home">

        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

          </div>

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">

                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                {devProfile.availability ||
                  "Available for opportunities"}

              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                Hello, I'm
              </p>

              <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {devProfile.name}
              </h1>

              <h2 className="mt-5 text-2xl font-semibold text-white/70 sm:text-3xl">
                {devProfile.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                {devProfile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {devProfile.resume && (
                  <a
                    href={devProfile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                )}

                {devProfile.email && (
                  <a
                    href={`mailto:${devProfile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                )}

              </div>

              {devSocial.length > 0 && (
                <div className="mt-9 flex items-center gap-3">

                  {devSocial.map((social) => {

                    const key =
                      social.platform
                        .toLowerCase()
                        .trim();

                    const Icon =
                      socialIconMap[key] ||
                      resolveIcon(social.icon);

                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.platform}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}

                </div>
              )}

            </div>

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                <div className="absolute -inset-6 rounded-[3rem] bg-white/5 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">

                  {devProfile.profileImage ? (
                    <img
                      src={devProfile.profileImage}
                      alt={devProfile.name}
                      className="h-[420px] w-[340px] object-cover object-top sm:h-[500px] sm:w-[400px]"
                    />
                  ) : (
                    <div className="flex h-[420px] w-[340px] items-center justify-center text-white/30 sm:h-[500px] sm:w-[400px]">
                      No profile image
                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            QUICK INFO
        ==================================================== */}

        <section className="border-y border-white/10 bg-white/[0.02]">

          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

            {devProfile.location && (
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-5 w-5 text-white/40" />
                <span>{devProfile.location}</span>
              </div>
            )}

            {devProfile.email && (
              <a
                href={`mailto:${devProfile.email}`}
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail className="h-5 w-5 text-white/40" />
                <span>{devProfile.email}</span>
              </a>
            )}

            {devProfile.phone && (
              <a
                href={`tel:${devProfile.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone className="h-5 w-5 text-white/40" />
                <span>{devProfile.phone}</span>
              </a>
            )}

          </div>

        </section>


        {/* ===================================================
            ABOUT
        ==================================================== */}

        <section
          id="about"
          className="scroll-mt-24 px-6 py-24 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                About Me
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building software with purpose.
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-white/60">

                {devProfile.about
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            SKILLS
        ==================================================== */}

        <section
          id="skills"
          className="scroll-mt-24 border-t border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                Technical Skills
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tools I use to build.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Technologies and tools I work with across software
                development, data and digital products.
              </p>

            </div>


            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {Object.entries(skillGroups).map(
                ([category, skills]) => (

                  <div
                    key={category}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >

                    <h3 className="text-lg font-semibold">
                      {category}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {skills.map((skill) => (

                        <div
                          key={skill.id}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                        >

                          <span className="text-sm text-white/80">
                            {skill.name}
                          </span>

                          {skill.level && (
                            <span className="ml-2 text-xs text-white/35">
                              {skill.level}
                            </span>
                          )}

                        </div>

                      ))}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

                {/* ===================================================
            EXPERIENCE
        ==================================================== */}

        <section
          id="experience"
          className="scroll-mt-24 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                Experience
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Where I've worked.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                My professional experience, responsibilities and
                technologies I've worked with.
              </p>

            </div>


            {devExperience.length > 0 ? (
              <div className="relative mt-12">

                {/* Timeline line */}

                <div className="absolute left-[11px] top-2 bottom-2 hidden w-px bg-white/10 sm:block" />

                <div className="space-y-10">

                  {devExperience.map((experience) => (

                    <article
                      key={experience.id}
                      className="relative sm:pl-12"
                    >

                      {/* Timeline dot */}

                      <div className="absolute left-0 top-1 hidden h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-slate-950 sm:flex">

                        <div className="h-2 w-2 rounded-full bg-white" />

                      </div>


                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                          <div>

                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">

                                <BriefcaseBusiness className="h-5 w-5 text-white/60" />

                              </div>

                              <div>

                                <h3 className="text-xl font-semibold">
                                  {experience.role}
                                </h3>

                                <p className="mt-1 text-white/50">
                                  {experience.company}
                                </p>

                              </div>

                            </div>

                          </div>


                          <div className="text-sm text-white/40 lg:text-right">

                            <p>
                              {experience.start}
                              {" — "}
                              {experience.end}
                            </p>

                            {experience.location && (
                              <p className="mt-1">
                                {experience.location}
                              </p>
                            )}

                          </div>

                        </div>


                        {experience.description && (
                          <p className="mt-6 max-w-4xl leading-7 text-white/60">
                            {experience.description}
                          </p>
                        )}


                        {experience.technologies && (
                          <div className="mt-6 flex flex-wrap gap-2">

                            {experience.technologies
                              .split(",")
                              .map((technology) => technology.trim())
                              .filter(Boolean)
                              .map((technology) => (

                                <span
                                  key={technology}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                                >
                                  {technology}
                                </span>

                              ))}

                          </div>
                        )}

                      </div>

                    </article>

                  ))}

                </div>

              </div>

            ) : (
              <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-8 text-center">

                <p className="text-white/40">
                  Experience details will be added soon.
                </p>

              </div>
            )}

          </div>
        </section>


        {/* ===================================================
            EDUCATION
        ==================================================== */}

        <section
          id="education"
          className="scroll-mt-24 border-t border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                Education
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Academic background.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                My academic journey and educational qualifications.
              </p>

            </div>


            {devEducation.length > 0 ? (
              <div className="mt-12 grid gap-6 lg:grid-cols-2">

                {devEducation.map((education) => (

                  <article
                    key={education.id}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                  >

                    <div className="flex items-start gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">

                        <GraduationCap className="h-6 w-6 text-white/60" />

                      </div>


                      <div className="min-w-0 flex-1">

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                          <div>

                            <h3 className="text-xl font-semibold">
                              {education.degree}
                            </h3>

                            <p className="mt-1 text-white/60">
                              {education.institution}
                            </p>

                          </div>


                          <span className="text-sm whitespace-nowrap text-white/40">
                            {education.start}
                            {" — "}
                            {education.end}
                          </span>

                        </div>


                        {education.location && (
                          <div className="mt-4 flex items-center gap-2 text-sm text-white/40">

                            <MapPin className="h-4 w-4" />

                            <span>
                              {education.location}
                            </span>

                          </div>
                        )}


                        {education.score && (
                          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">

                            {education.score}

                          </div>
                        )}


                        {education.description && (
                          <p className="mt-5 leading-7 text-white/50">

                            {education.description}

                          </p>
                        )}

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (
              <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-8 text-center">

                <p className="text-white/40">
                  Education details will be added soon.
                </p>

              </div>
            )}

          </div>
        </section>

      </main>

    </div>
  );
};

export default TejasPortfolio;