const capabilities = [
  {
    code: "EA",
    title: "Executive Support",
    text: "Calendar coordination, inbox care, meeting documentation, research, reporting, and dependable follow-through.",
    tags: ["Google Workspace", "Microsoft Office", "Research"],
    color: "coral",
  },
  {
    code: "OP",
    title: "Operations & Projects",
    text: "Day-to-day operations, project coordination, HR administration, recruitment, and workflow optimisation.",
    tags: ["Asana", "ClickUp", "Trello", "Notion"],
    color: "lime",
  },
  {
    code: "MK",
    title: "Marketing & Brand",
    text: "Digital strategy, social content, paid campaigns, brand consistency, and audience growth.",
    tags: ["Canva", "Meta Ads", "Content"],
    color: "lilac",
  },
  {
    code: "EC",
    title: "eCommerce & Web",
    text: "Website operations, product catalogues, content updates, and practical digital platform management.",
    tags: ["WordPress", "Wix", "400+ products"],
    color: "sky",
  },
  {
    code: "PR",
    title: "Outreach & Partnerships",
    text: "Stakeholder engagement, sponsor outreach, grant research, event coordination, and partnership tracking.",
    tags: ["CRM", "Events", "Partnerships"],
    color: "peach",
  },
  {
    code: "AI",
    title: "AI-Enabled Productivity",
    text: "Thoughtful use of AI to accelerate research, content, documentation, and everyday knowledge work.",
    tags: ["ChatGPT", "Claude", "Automation"],
    color: "yellow",
  },
];

const experience = [
  {
    years: "2026",
    role: "IT Manager & Brand Manager",
    company: "Leosmooth Perfumes · Lagos",
    summary:
      "Led technology and brand operations for a growing eCommerce business, including a catalogue of more than 400 products.",
  },
  {
    years: "2025–26",
    role: "Creative & Outreach Assistant",
    company: "Debella Creation · Lagos",
    summary:
      "Coordinated creative programs, vocational training events, community outreach, partners, and on-ground logistics.",
  },
  {
    years: "2025",
    role: "VA — Outreach & Partnerships",
    company: "Rhythms of Diaspora · London",
    summary:
      "Built school, sponsor, and partner relationships while managing executive calendars, research, and stakeholder follow-ups.",
  },
  {
    years: "2024",
    role: "VA / Operations Manager",
    company: "Studynets Limited · Luton",
    summary:
      "Owned HR administration, Wix operations, executive scheduling, LinkedIn growth, and Facebook advertising.",
  },
  {
    years: "2022–23",
    role: "Virtual & Growth Assistant",
    company: "The Next Five Years · Nigeria",
    summary:
      "Supported leadership programs through webinars, conferences, podcasts, branded content, and communication workflows.",
  },
  {
    years: "2018–Now",
    role: "VA / Project Manager",
    company: "Freelance · Remote",
    summary:
      "Supporting diverse businesses with executive assistance, project systems, websites, onboarding, and daily operations.",
  },
];

const credentials = [
  "Aspire Institute Leadership Program — Harvard Business School",
  "ALX AI Career Essentials",
  "ALX Virtual Assistant Program",
  "Project Management Essentials",
  "Digital Marketing Certification",
  "Customer Service Foundations",
];

const tools = [
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A" },
  { name: "Canva", icon: "/logos/canva.svg" },
  { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Google Workspace", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4F00" },
];

const workSamples = [
  { title: "52-Week Automated Pay Schedule", type: "Operations · Excel Automation", image: "/portfolio/automated-weekly-pay.webp", shape: "wide" },
  { title: "20K Reach / 320 Clicks for $5", type: "Performance Marketing · Facebook Ads", image: "/portfolio/facebook-ads-results.webp", shape: "wide" },
  { title: "Project Management Tracking System", type: "Operations · Workflow Design", image: "/portfolio/project-tracking.webp", shape: "wide" },
  { title: "500+ Outreach Research Contacts", type: "Research · Partnership Outreach", image: "/portfolio/outreach-research.webp", shape: "wide" },
  { title: "MoyNexis Technology Campaign", type: "Creative Design · Technology", image: "/portfolio/moynexis-campaign.webp", shape: "tall" },
  { title: "Power Combo Product Creative", type: "Creative Design · eCommerce", image: "/portfolio/perfume-product-creative.webp", shape: "tall" },
  { title: "Paid Ads 101 Creative", type: "Creative Design · Social Campaign", image: "/portfolio/paid-ads-creative.webp", shape: "square" },
  { title: "Rounded Bootcamp Campaign", type: "Creative Design · Education", image: "/portfolio/bootcamp-campaign.webp", shape: "tall" },
  { title: "Veloura Cosmetic Campaign", type: "Creative Design · Beauty", image: "/portfolio/cosmetic-ad.webp", shape: "square" },
  { title: "Aureon Homes Campaign", type: "Creative Design · Real Estate", image: "/portfolio/estate-ad.webp", shape: "square" },
  { title: "Flashreview Business Campaign", type: "Ad Creative · SaaS", image: "/portfolio/flashreview-ad.webp", shape: "tall" },
  { title: "Flashreview Social Proof Campaign", type: "Ad Creative · SaaS", image: "/portfolio/social-proof-ad.webp", shape: "tall" },
  { title: "Studynets Learning Campaign", type: "Creative Sample · Education", image: "/portfolio/creative-sample-four.webp", shape: "tall" },
  { title: "Personal Brand Service Creative", type: "Creative Sample · Technology", image: "/portfolio/creative-sample-one.webp", shape: "tall" },
  { title: "Rhythms of Diaspora Campaign", type: "Creative Sample · Culture", image: "/portfolio/creative-sample-three.webp", shape: "square" },
  { title: "Diaspora Programme Campaign", type: "Creative Sample · Outreach", image: "/portfolio/creative-sample-two.webp", shape: "tall" },
];

const certificateGallery = [
  { title: "AI Augmented Professional Development", issuer: "ALX · Certificate of Achievement", image: "/portfolio/ai-certification.webp" },
  { title: "Virtual Assistant Programme", issuer: "ALX · Certificate of Completion", image: "/portfolio/va-licence.webp" },
  { title: "500 Canva Designs", issuer: "Canva · Achievement Badge", image: "/portfolio/canva-badge.webp" },
  { title: "Phone-Based Customer Service", issuer: "LinkedIn Learning", image: "/portfolio/phone-support-certificate.webp" },
  { title: "Serving Customers Using Social Media", issuer: "LinkedIn Learning", image: "/portfolio/social-support-certificate.webp" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Henry Philip home">
          H<span>P</span>.
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </div>
        <a className="nav-cta" href="#contact">
          Work with me <span>↗</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Make room for the work that matters</div>
            <h1>
              What could your week look like
              <em> with the right support?</em>
            </h1>
            <p className="hero-lead">
              Less chasing. Fewer loose ends. More focus for the decisions,
              ideas, and growth only you can lead.
            </p>
            <a className="hero-cta" href="#about">
              Meet the person behind the momentum <span>↓</span>
            </a>
          </div>
          <div className="productivity-board" aria-label="A visual of an organised and productive work week">
            <div className="board-top">
              <span>WEEK AT A GLANCE</span>
              <i>● LIVE</i>
            </div>
            <div className="focus-card">
              <span>FOCUS</span>
              <strong>Clear priorities.<br />Calm execution.</strong>
              <div className="progress"><i /></div>
              <small>82% moved forward</small>
            </div>
            <div className="task-stack">
              <div><i>✓</i><span>Inbox organised</span><small>DONE</small></div>
              <div><i>✓</i><span>Launch tasks mapped</span><small>DONE</small></div>
              <div><i>→</i><span>Content ready for review</span><small>NEXT</small></div>
            </div>
            <div className="board-note">
              <span>+12 hrs</span>
              <p>back for high-value work</p>
            </div>
            <span className="board-spark spark-one" aria-hidden="true">✦</span>
            <span className="board-spark spark-two" aria-hidden="true">✦</span>
          </div>
        </div>
        <div className="ticker" aria-label="Henry's specialities">
          <span>EXECUTIVE SUPPORT</span><i>✦</i><span>OPERATIONS</span><i>✦</i>
          <span>MARKETING</span><i>✦</i><span>PROJECT DELIVERY</span><i>✦</i>
          <span>ECOMMERCE</span>
        </div>
      </section>

      <section className="intro shell" id="about">
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              src="/henry-philip.jpeg"
              alt="Portrait of Henry Philip"
              width="788"
              height="987"
            />
            <span className="portrait-corner corner-one" aria-hidden="true" />
            <span className="portrait-corner corner-two" aria-hidden="true" />
          </div>
          <div className="intro-badge" aria-label="More than five years of experience">
            <span className="badge-star" aria-hidden="true">✦</span>
            <strong>5+</strong>
            <small>YEARS OF<br />EXPERIENCE</small>
          </div>
        </div>
        <div className="intro-copy">
          <p className="section-label">Introduction</p>
          <p className="intro-hello">Hello, I&apos;m Henry Philip.</p>
          <h2>
            The calm, capable partner behind
            <em> your next stage of growth.</em>
          </h2>
          <div className="intro-columns">
            <p>
              I support executives, startups, SMEs, and nonprofit organisations
              with the details that keep work moving—from calendars and systems
              to people, projects, and digital platforms.
            </p>
            <p>
              My approach is proactive and practical. I learn the goal, organise
              the moving parts, communicate clearly, and take ownership through
              delivery—especially in fast-paced remote environments.
            </p>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="shell proof-grid">
          <div><strong>20+</strong><span>businesses supported</span></div>
          <div><strong>400+</strong><span>eCommerce products managed</span></div>
          <div><strong>3</strong><span>continents served remotely</span></div>
          <div><strong>6</strong><span>cross-functional disciplines</span></div>
        </div>
      </section>

      <section className="skills shell" id="skills">
        <header className="section-heading">
          <p>Capabilities</p>
          <h2>One partner.<br /><em>Many moving parts.</em></h2>
        </header>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className={`capability ${item.color}`} key={item.code}>
              <div className="skill-symbol" aria-hidden="true">
                <span>{item.code}</span>
                <i />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="skill-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tools">
        <div className="shell tools-inner">
          <p className="section-label">My working toolkit</p>
          <div className="tool-orbit">
            <div className="orbit-center"><span>HP</span><small>WORK<br />SYSTEM</small></div>
            {tools.map((tool, index) => (
              <div className={`tool t${index + 1}`} key={tool.name}>
                <span className="tool-logo">
                  <img src={tool.icon} alt="" width="28" height="28" />
                </span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
          <p className="tools-note">
            I choose tools for clarity—not complexity—building systems your
            team can understand, adopt, and keep using.
          </p>
        </div>
      </section>

      <section className="portfolio-work" id="work">
        <div className="shell">
          <header className="section-heading work-showcase-heading">
            <p>Selected work</p>
            <div>
              <h2>Proof in the<br /><em>work itself.</em></h2>
              <p className="showcase-intro">A selection of operational systems, research, campaign results, and creative assets delivered across different industries.</p>
            </div>
          </header>
          <div className="work-gallery">
            {workSamples.map((sample, index) => (
              <a className={`work-sample ${sample.shape}`} href={sample.image} target="_blank" rel="noreferrer" key={sample.title}>
                <div className="work-image">
                  <img src={sample.image} alt={sample.title} loading="lazy" />
                  <span>View full sample ↗</span>
                </div>
                <div className="work-caption">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><p>{sample.type}</p><h3>{sample.title}</h3></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience">
        <header className="section-heading">
          <p>Experience</p>
          <h2>Trusted across<br /><em>teams and time zones.</em></h2>
        </header>
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.years}-${item.company}`}>
              <span className="timeline-year">{item.years}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <p className="timeline-summary">{item.summary}</p>
              <span className="timeline-dot" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="credentials">
        <div className="shell credentials-grid">
          <div>
            <p className="section-label">Education & credentials</p>
            <h2>Always learning.<br /><em>Always improving.</em></h2>
            <p className="degree">
              B.Sc. Geography & Planning Sciences<br />
              <span>Adekunle Ajasin University · Second Class Upper</span>
            </p>
          </div>
          <div className="credential-list">
            {credentials.map((credential, index) => (
              <div key={credential}>
                <span>0{index + 1}</span>
                <p>{credential}</p>
                <i>✓</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certificate-showcase" id="certifications">
        <div className="shell">
          <header className="section-heading certificate-heading">
            <p>Certification showcase</p>
            <h2>Skills backed by<br /><em>continued learning.</em></h2>
          </header>
          <div className="certificate-gallery">
            {certificateGallery.map((certificate, index) => (
              <a href={certificate.image} target="_blank" rel="noreferrer" className="certificate-card" key={certificate.title}>
                <div className="certificate-image"><img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" /></div>
                <div className="certificate-copy"><span>0{index + 1}</span><div><p>{certificate.issuer}</p><h3>{certificate.title}</h3></div><i>↗</i></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <p>Need a capable pair of hands?</p>
          <h2>Let&apos;s move your<br /><em>work forward.</em></h2>
          <div className="contact-links">
            <a href="mailto:drphilgospel@gmail.com">
              drphilgospel@gmail.com <span>↗</span>
            </a>
            <a href="https://linkedin.com/in/philiphenry19" target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
          </div>
          <div className="footer-bottom">
            <span>Henry Philip — Virtual Assistant</span>
            <span>Lagos, Nigeria · Worldwide Remote</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
