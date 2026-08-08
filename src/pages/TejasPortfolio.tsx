import {
  Award,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
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
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-400/20 selection:text-blue-300">

      {/* =====================================================
          PORTFOLIO NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-300">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <a
            href="#home"
            className="group text-lg font-semibold tracking-tight transition-all duration-300 hover:text-blue-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            {devProfile.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>

            <a
              href="#about"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>

            <a
              href="#skills"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </a>

            <a
              href="#education"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Education
            </a>

            <a
              href="#certificates"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Certificates
            </a>

            <a
              href="#projects"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="relative text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>

          </nav>

          {devProfile.resume && (
            <a
              href={devProfile.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-400 hover:text-slate-950 hover:shadow-blue-400/20 md:flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          )}

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/10 md:hidden"
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
                  className="rounded-lg px-3 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-blue-300"
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">

                <span className="h-2 w-2 rounded-full bg-green-400" />

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
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-400/20"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                )}

                {devProfile.email && (
                  <a
                    href={`mailto:${devProfile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-200"
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
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/60 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-blue-400/10"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}

                </div>
              )}

            </div>

            <div className="flex justify-center lg:justify-end">

              <div className="group relative">

  {/* Main blue glow behind the profile */}
  <div
    className="
      absolute -inset-8 rounded-[3rem]
      bg-blue-400/10
      blur-3xl
      opacity-80
      transition-all duration-500
      group-hover:bg-blue-400/30
      group-hover:opacity-100
    "
  />

  {/* Soft secondary halo */}
  <div
    className="
      absolute -inset-3 rounded-[2.5rem]
      bg-blue-400/[0.05]
      blur-xl
      transition-all duration-500
      group-hover:bg-blue-400/[0.10]
    "
  />

  <div
    className="
      relative overflow-hidden rounded-[2rem]
      border border-white/10
      bg-white/[0.04]
      p-2
      shadow-2xl shadow-black/30
      transition-all duration-500
      hover:-translate-y-2
      hover:border-blue-400/40
      hover:shadow-[0_0_50px_rgba(59,130,246,0.24)]
    "
  >

    {/* Rounded image frame */}
    <div className="overflow-hidden rounded-[1.55rem] bg-slate-900">

      {devProfile.profileImage ? (
        <img
          src={devProfile.profileImage}
          alt={devProfile.name}
          className="
            h-[420px] w-[340px]
            object-cover object-top
            transition-transform duration-700
            group-hover:scale-[1.03]
            sm:h-[500px] sm:w-[400px]
          "
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

          </div>

        </section>


        {/* ===================================================
            QUICK INFO
        ==================================================== */}

        <section className="border-y border-white/10 bg-white/[0.02]">

          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

            {devProfile.location && (
              <div className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-white/60 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-white">
                <MapPin className="h-5 w-5 text-white/40" />
                <span>{devProfile.location}</span>
              </div>
            )}

            {devProfile.email && (
              <a
                href={`mailto:${devProfile.email}`}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-white/60 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/5 hover:text-blue-200"
              >
                <Mail className="h-5 w-5 text-white/40" />
                <span>{devProfile.email}</span>
              </a>
            )}

            {devProfile.phone && (
              <a
                href={`tel:${devProfile.phone}`}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-white/60 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/5 hover:text-blue-200"
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

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200 sm:text-4xl">
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

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200 sm:text-4xl">
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
                    className="group rounded-2xl border border-blue--via-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-via-400/50 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-400/10"
                  >

                    <h3 className="text-lg font-semibold">
                      {category}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {skills.map((skill) => (

                        <div
                          key={skill.id}
                          className="group/skill rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-200"
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

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200 sm:text-4xl">
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

                <div className="absolute left-[11px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-blue-400/60 via-blue-400/15 to-blue-400/10 sm:block" />

                <div className="space-y-10">

                  {devExperience.map((experience) => (

                    <article
                      key={experience.id}
                      className="group relative sm:pl-12"
                    >

                      {/* Timeline dot */}

                      <div className="absolute left-0 top-1 hidden h-6 w-6 items-center justify-center rounded-full border border-blue-400/30 bg-slate-950 shadow-[0_0_0_4px_rgba(59,130,246,0.05),0_0_18px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300/60 group-hover:shadow-[0_0_0_5px_rgba(59,130,246,0.08),0_0_28px_rgba(59,130,246,0.55)] sm:flex">

                        <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />

                      </div>


                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-blue-400/[0.02] p-6 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-2xl hover:shadow-blue-400/5 sm:p-7">

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                          <div>

                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/5 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/10">

                                <BriefcaseBusiness className="h-5 w-5 text-blue-300/70 transition-colors duration-300 group-hover:text-blue-300" />

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
                                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 transition-all duration-300 hover:border-blue-400/25 hover:bg-blue-400/10 hover:text-blue-200"
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

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200 sm:text-4xl">
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
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-400/5"
                  >

                    <div className="flex items-start gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/5 shadow-[0_0_18px_rgba(59,130,246,0.08)] transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/10">

                        <GraduationCap className="h-6 w-6 text-blue-300/70 transition-colors duration-300 group-hover:text-blue-300" />

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

        {/* ===================================================
            CERTIFICATIONS
        ==================================================== */}

        <section
          id="certificates"
          className="scroll-mt-24 border-t border-white/10 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                Certifications
              </p>

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200 sm:text-4xl">
                Certifications & achievements.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Professional certifications and credentials from my learning
                and development journey.
              </p>
            </div>

            {devCertificates.length > 0 ? (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {devCertificates.map((certificate) => (
                  <article
                    key={certificate.id}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-400/5"
                  >
                    {certificate.image ? (
                      <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/5">
                        <img
                          src={certificate.image}
                          alt={certificate.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[16/10] items-center justify-center border-b border-white/10 bg-white/[0.03]">
                        <Award className="h-12 w-12 text-white/20" />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Award className="h-5 w-5 text-blue-300/70 transition-colors duration-300 group-hover:text-blue-300" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-semibold leading-6">
                            {certificate.name}
                          </h3>

                          <p className="mt-1 text-sm text-white/50">
                            {certificate.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {certificate.date && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50">
                            {certificate.date}
                          </span>
                        )}

                        {certificate.credential && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50">
                            ID: {certificate.credential}
                          </span>
                        )}
                      </div>

                      {certificate.description && (
                        <p className="mt-5 text-sm leading-6 text-white/50">
                          {certificate.description}
                        </p>
                      )}

                      {certificate.certificate && (
                        <a
                          href={certificate.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:gap-3 hover:text-blue-200"
                        >
                          View Certificate
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <p className="text-white/40">
                  Certifications will be added soon.
                </p>
              </div>
            )}

          </div>
        </section>


        {/* ===================================================
            PROJECTS
        ==================================================== */}

        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                Selected Work
              </p>

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200 sm:text-4xl">
                Projects I've worked on.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Selected software, SaaS, web and digital products from my
                development work.
              </p>
            </div>

            {portfolio.filter(
              (project) => project.showInDeveloperPortfolio
            ).length > 0 ? (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolio
                  .filter(
                    (project) => project.showInDeveloperPortfolio
                  )
                  .map((project) => (
                    <article
                      key={project.id}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-400/5"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                        {project.img ? (
                          <img
                            src={project.img}
                            alt={project.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-white/20">
                            No project image
                          </div>
                        )}

                        {project.tag && (
                          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                            {project.tag}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                          {project.category}
                        </span>

                        <h3 className="mt-3 text-xl font-semibold">
                          {project.title}
                        </h3>

                        {project.description && (
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">
                            {project.description}
                          </p>
                        )}

                        {project.link &&
                          project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400 hover:text-slate-950 hover:shadow-lg hover:shadow-blue-400/10"
                            >
                              View Project
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                      </div>
                    </article>
                  ))}
              </div>
            ) : (
              <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <p className="text-white/40">
                  Projects will be added soon.
                </p>
              </div>
            )}

          </div>
        </section>


        {/* ===================================================
            CONTACT
        ==================================================== */}

        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/10 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                  Contact
                </p>

                <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Let's build something useful together.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                  I'm open to software engineering opportunities,
                  collaborations and interesting digital product work.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  {devProfile.email && (
                    <a
                      href={`mailto:${devProfile.email}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-400/20"
                    >
                      <Mail className="h-4 w-4" />
                      Email Me
                    </a>
                  )}

                  {devProfile.resume && (
                    <a
                      href={devProfile.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-200"
                    >
                      <Download className="h-4 w-4" />
                      Resume
                    </a>
                  )}

                </div>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

                <div className="space-y-5">

                  {devProfile.location && (
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/40" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/35">
                          Location
                        </p>

                        <p className="mt-1 text-white/70">
                          {devProfile.location}
                        </p>

                        {devProfile.address && (
                          <p className="mt-1 text-sm text-white/40">
                            {devProfile.address}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {devProfile.email && (
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-white/40" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/35">
                          Email
                        </p>

                        <a
                          href={`mailto:${devProfile.email}`}
                          className="mt-1 block text-white/70 transition hover:text-white"
                        >
                          {devProfile.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {devProfile.phone && (
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-white/40" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/35">
                          Phone
                        </p>

                        <a
                          href={`tel:${devProfile.phone}`}
                          className="mt-1 block text-white/70 transition hover:text-white"
                        >
                          {devProfile.phone}
                        </a>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ===================================================
            PERSONAL FOOTER
        ==================================================== */}

        <footer className="border-t border-white/10 bg-black/20 px-6 py-10 lg:px-8">

          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-semibold">
                {devProfile.name}
              </p>

              <p className="mt-1 text-sm text-white/40">
                {devProfile.title}
              </p>
            </div>


            {devSocial.length > 0 && (
              <div className="flex items-center gap-3">

                {devSocial.map((social) => {

                  const key = social.platform
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
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}

              </div>
            )}

          </div>


          <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} {devProfile.name}. All rights reserved.
            </p>

            <p>
              Built with React & modern web technologies.
            </p>

          </div>

        </footer>

      </main>

    </div>
  );
};

export default TejasPortfolio;
