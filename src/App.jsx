import React, { useRef } from 'react';
import { ChatbotFullPage } from './components/ChatbotFullPage';
import './index.css';

// Arrow SVG
function Arrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 10h12M10.5 5.5L16 10l-5.5 4.5" stroke="#9aa6b5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Link card component
function LinkCard({ href, icon, title, sub, variant = 'default' }) {
  const borderColors = {
    gold: 'rgba(200,162,91,0.62)',
    teal: 'rgba(36,95,103,0.55)',
    sage: 'rgba(111,138,120,0.55)',
    red: 'rgba(157,66,84,0.45)',
    default: '#e7e2d8',
  };
  const iconBgs = {
    gold: '#fff5df',
    teal: '#e7f3f4',
    sage: '#eef5f0',
    red: '#faedf0',
    default: '#f7f6f2',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block transition-transform"
      style={{
        background: '#fff',
        border: `1px solid ${borderColors[variant] || borderColors.default}`,
        borderRadius: '18px',
        display: 'grid',
        gridTemplateColumns: '42px 1fr 22px',
        gap: '13px',
        alignItems: 'center',
        padding: '15px 16px',
        boxShadow: '0 10px 28px rgba(16,42,63,0.08)',
        transition: 'transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = '#245f67';
        e.currentTarget.style.boxShadow = '0 14px 32px rgba(16,42,63,0.13)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = borderColors[variant] || borderColors.default;
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(16,42,63,0.08)';
      }}
    >
      <div
        className="flex items-center justify-center text-[18px]"
        style={{
          width: 40, height: 40, borderRadius: 14,
          background: iconBgs[variant] || iconBgs.default,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div className="font-black text-[16px] text-[#162d42] mb-[3px]">{title}</div>
        <div className="text-[12.5px] text-[#9aa6b5] font-bold leading-[1.38]">{sub}</div>
      </div>
      <Arrow />
    </a>
  );
}

// Primary CTA
function PrimaryCTA({ href, icon, title, sub, variant = 'gold' }) {
  const borderColor = variant === 'teal' ? '#245f67' : '#c8a25b';
  const iconBg = variant === 'teal' ? '#e7f3f4' : '#fff5df';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block"
      style={{
        display: 'grid',
        gridTemplateColumns: '44px 1fr 24px',
        alignItems: 'center',
        gap: '14px',
        background: 'linear-gradient(135deg, #fff 0%, #fbfaf7 100%)',
        border: `2px solid ${borderColor}`,
        borderRadius: '22px',
        padding: '17px',
        boxShadow: '0 10px 28px rgba(16,42,63,0.08)',
        marginBottom: '12px',
        transition: 'transform 0.18s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ width: 40, height: 40, borderRadius: 14, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
        {icon}
      </div>
      <div>
        <div className="font-black text-[16px] text-[#162d42] mb-[3px]">{title}</div>
        <div className="text-[12.5px] text-[#9aa6b5] font-bold leading-[1.38]">{sub}</div>
      </div>
      <span style={{ color: '#9aa6b5', fontSize: 22 }}>→</span>
    </a>
  );
}

// Tile component
function Tile({ title, children, link, linkText }) {
  return (
    <div style={{ background: '#fbfaf7', border: '1px solid rgba(231,226,216,0.9)', borderRadius: 17, padding: 15 }}>
      <h3 style={{ margin: '0 0 6px', fontSize: 15, color: '#162d42' }}>{title}</h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.58, marginBottom: link ? 12 : 0, color: '#718095' }}>{children}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#245f67', fontWeight: 950, fontSize: 13, textDecoration: 'none' }}>
          {linkText} →
        </a>
      )}
    </div>
  );
}

// ServiceTile with tags
function ServiceTile({ title, children, tags }) {
  return (
    <div style={{ background: '#fbfaf7', border: '1px solid rgba(231,226,216,0.9)', borderRadius: 17, padding: 15 }}>
      <h3 style={{ margin: '0 0 6px', fontSize: 15, color: '#162d42' }}>{title}</h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.58, marginBottom: 12, color: '#718095' }}>{children}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              background: '#fff',
              border: '1px solid #e7e2d8',
              color: '#245f67',
              borderRadius: 999,
              padding: '6px 9px',
              fontSize: 11,
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Card section wrapper
function CardSection({ title, children, style, id }) {
  return (
    <section
      id={id}
      style={{
        background: 'rgba(255,255,255,0.94)',
        border: '1px solid #e7e2d8',
        borderRadius: 22,
        boxShadow: '0 10px 28px rgba(16,42,63,0.08)',
        padding: 22,
        marginBottom: 16,
        scrollMarginTop: 18,
        ...style
      }}
    >
      {title && <h2 style={{ margin: '0 0 12px', fontSize: 20, letterSpacing: '-0.03em', color: '#162d42' }}>{title}</h2>}
      {children}
    </section>
  );
}

// Divider
function DividerTitle({ children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      color: '#9aa6b5', textTransform: 'uppercase', letterSpacing: '0.18em',
      fontSize: 11, fontWeight: 950, margin: '26px 0 14px', justifyContent: 'center',
    }}>
      <div style={{ flex: 1, height: 1, background: '#e7e2d8' }} />
      {children}
      <div style={{ flex: 1, height: 1, background: '#e7e2d8' }} />
    </div>
  );
}

function App() {
  const assistantRef = useRef(null);
  const [heroLogoUrl, setHeroLogoUrl] = React.useState('');

  const scrollToAssistant = () => {
    const el = document.getElementById('ask-assistant');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        color: '#162d42',
        background:
          'radial-gradient(circle at 10% 0%, rgba(200,162,91,0.18), transparent 32%), radial-gradient(circle at 90% 4%, rgba(36,95,103,0.15), transparent 30%), linear-gradient(180deg, #f7f6f2 0%, #fbfaf7 48%, #f1efe9 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Top Art Banner */}
      <div
        aria-hidden="true"
        style={{
          minHeight: 256,
          background: 'linear-gradient(135deg, rgba(16,42,63,0.96), rgba(36,95,103,0.92)), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 24%)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '8px solid #fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        <div
          style={{
            color: 'rgba(255,255,255,0.92)',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(48px, 8vw, 86px)',
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
            marginTop: 38,
          }}
        >
          Arokia Health
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.76)',
            fontSize: 12,
            letterSpacing: '0.18em',
            fontWeight: 800,
            borderTop: '1px solid rgba(255,255,255,0.42)',
            paddingTop: 18,
            marginTop: 18,
            whiteSpace: 'nowrap',
          }}
        >
          PRIVATE ONLINE PSYCHIATRY · TRAUMA-INFORMED CARE · ADULTS ACROSS THE UK
        </div>
      </div>

      {/* Main Page */}
      <main
        style={{
          width: '100%',
          padding: '0 18px 60px',
          marginTop: -90,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Hero */}
          <header style={{ textAlign: 'center', marginBottom: 24 }}>
            {/* Logo */}
            <div
              aria-label="Arokia Health logo"
              style={{
                width: 168, height: 168, borderRadius: 999,
                border: '7px solid #fff',
                background: 'linear-gradient(135deg, #102a3f, #245f67)',
                boxShadow: '0 22px 50px rgba(16,42,63,0.12)',
                margin: '0 auto 18px',
                display: 'grid', placeItems: 'center',
                color: '#fff', overflow: 'hidden',
              }}
            >
              {heroLogoUrl ? (
                <img
                  src={heroLogoUrl}
                  alt="Arokia Health logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 62, lineHeight: 1, fontWeight: 900, letterSpacing: '-0.08em' }}>
                  AH
                </span>
              )}
            </div>

            <h1 style={{ margin: '0 0 8px', fontSize: 'clamp(34px, 7vw, 50px)', lineHeight: 1.04, letterSpacing: '-0.05em', fontWeight: 950, color: '#162d42' }}>
              Ask Dr Arokia
            </h1>

            <div style={{ fontSize: 13, color: '#9aa6b5', fontWeight: 850, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 12 }}>
              Dr Arokia Antonysamy · Consultant Psychiatrist · MRCPsych · 20+ Years' Experience
            </div>

            <p style={{ fontSize: 16.5, lineHeight: 1.55, color: '#718095', maxWidth: 650, margin: '0 auto 16px' }}>
              Private online psychiatry for adults across the UK. Ask questions, understand Dr Arokia's consultation pathways, and find the right next step before booking.
            </p>

            <div
              style={{
                background: 'rgba(255,255,255,0.82)',
                border: '1px solid rgba(231,226,216,0.95)',
                borderRadius: 999,
                padding: '10px 15px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                color: '#245f67',
                fontSize: 13,
                fontWeight: 900,
                boxShadow: '0 10px 28px rgba(16,42,63,0.08)',
              }}
            >
              A guided first conversation before a private psychiatric consultation
            </div>

            {/* Safety Note */}
            <div
              style={{
                background: '#faedf0',
                border: '1px solid rgba(157,66,84,0.28)',
                color: '#9d4254',
                borderRadius: 18,
                padding: '13px 15px',
                fontSize: 13,
                lineHeight: 1.55,
                fontWeight: 760,
                margin: '18px auto 0',
                maxWidth: 650,
                textAlign: 'left',
              }}
            >
              <strong style={{ color: '#9d4254' }}>Important:</strong> Arokia Health provides planned private psychiatric consultations only. It does not provide crisis or emergency support. If you need urgent help, contact NHS 111, your GP, A&E, your local crisis team, or call 999 in an emergency.
            </div>

            {/* Badges */}
            <div
              aria-label="Trust badges"
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16 }}
            >
              {[
                { label: 'Private Online Psychiatry', bg: '#e7f3f4', color: '#245f67' },
                { label: "20+ Years' Experience", bg: '#fff5df', color: '#8b651e' },
                { label: 'Trauma-Informed Care', bg: '#eef5f0', color: '#6f8a78' },
                { label: 'Adults Across the UK', bg: '#e7f3f4', color: '#245f67' },
                { label: 'Educational only', bg: '#faedf0', color: '#9d4254' },
              ].map((b) => (
                <span
                  key={b.label}
                  style={{ padding: '8px 12px', borderRadius: 999, background: b.bg, color: b.color, fontSize: 12, fontWeight: 900, whiteSpace: 'nowrap' }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </header>

          {/* Chat Widget */}
          <ChatbotFullPage onSettingsLoaded={(settings) => { if (settings.logoUrl) setHeroLogoUrl(settings.logoUrl); }} />

          {/* Feature card CTAs */}
          <section
            style={{
              background: 'rgba(255,255,255,0.94)',
              border: '1px solid #e7e2d8',
              borderRadius: 30,
              boxShadow: '0 10px 28px rgba(16,42,63,0.08)',
              padding: 20,
              marginBottom: 20,
            }}
          >
            <PrimaryCTA
              href="https://drarokia.com/#contact"
              icon="📅"
              title="Book a Private Consultation"
              sub="Start the enquiry route for private online psychiatry with Arokia Health."
              variant="gold"
            />
            <PrimaryCTA
              href="https://drarokia.com/"
              icon="🌐"
              title="Ask a Question First"
              sub="Use Ask Dr Arokia to understand whether a private consultation may be the right next step."
              variant="teal"
            />
          </section>

          {/* Quick Links */}
          <DividerTitle>Quick Links</DividerTitle>

          <nav aria-label="Primary links" style={{ display: 'grid', gap: 11, marginBottom: 22 }}>
            <LinkCard href="https://drarokia.com/#contact" icon="📅" title="Book / Enquire for Consultation" sub="Private online psychiatric consultation enquiry through Arokia Health" variant="gold" />
            <LinkCard href="#what-to-expect" icon="📝" title="What to Expect" sub="Initial assessment, treatment planning, GP communication and follow-up" variant="teal" />
            <LinkCard href="#reports" icon="📄" title="Reports & Documentation" sub="Medico-legal, occupational health, DVLA, insurance forms and supporting documentation" variant="sage" />
            <LinkCard href="https://www.bupa.co.uk/finder/consultant/details/dr_arokia_antonysamy" icon="🏥" title="Bupa Consultant Profile" sub="Consultant profile and professional listing" variant="teal" />
            <LinkCard href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/" icon="🚨" title="Urgent Mental Health Help" sub="Arokia Health does not provide crisis or emergency support" variant="red" />
          </nav>

          {/* Highlight Box */}
          <section
            style={{
              background: 'linear-gradient(135deg, rgba(16,42,63,0.97), rgba(36,95,103,0.93))',
              color: '#fff',
              borderRadius: 30,
              padding: 24,
              boxShadow: '0 22px 50px rgba(16,42,63,0.12)',
              marginBottom: 16,
            }}
          >
            <h2 style={{ margin: '0 0 10px', fontSize: 24, letterSpacing: '-0.03em' }}>
              Not sure where to start? Ask first.
            </h2>
            <p style={{ margin: '0 0 16px', lineHeight: 1.65, color: 'rgba(255,255,255,0.9)' }}>
              Whether you are considering a private psychiatric consultation, wondering if Dr Arokia can support your concern, or need a safer signpost, Ask Dr Arokia helps you choose the next sensible step before contacting the team.
            </p>
            <a
              href="#ask-assistant"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#245f67',
                padding: '12px 15px', borderRadius: 999,
                fontWeight: 950, fontSize: 13, textDecoration: 'none',
              }}
            >
              Ask a Question First →
            </a>
          </section>

          {/* Choose Your Path */}
          <CardSection title="Choose Your Path">
            <div style={{ display: 'grid', gap: 11 }}>
              <Tile title="I want a private psychiatric consultation" link="https://drarokia.com/#contact" linkText="Book / Enquire for Consultation">
                For adults across the UK seeking specialist psychiatric assessment, diagnosis, medication review, formulation or treatment planning through Arokia Health.
              </Tile>
              <Tile title="I'm not sure if I need a psychiatrist" link="#ask-assistant" linkText="Ask a Question First">
                If you are unsure whether psychiatry is the right route, Ask Dr Arokia can help you understand what a psychiatrist does and when an assessment may be useful.
              </Tile>
              <Tile title="I need help with trauma, anxiety, depression, bipolar, OCD or addiction" link="https://drarokia.com/#contact" linkText="Start Consultation Enquiry">
                For people seeking a thoughtful, evidence-based psychiatric assessment and a personalised care plan that may include medication, therapy referral, lifestyle recommendations or collaborative care.
              </Tile>
              <Tile title="I need a report or specialist documentation" link="https://drarokia.com/#contact" linkText="Enquire About Reports">
                For medico-legal reports, occupational health reports, DVLA reports, insurance forms or supporting documentation. Additional fees may apply depending on complexity.
              </Tile>
              <Tile title="I need urgent help or crisis support" link="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/" linkText="Get Urgent Help">
                Arokia Health does not provide emergency care. If you feel unsafe or need urgent support, contact NHS 111, your GP, A&E, your local crisis team, or 999.
              </Tile>
            </div>
          </CardSection>

          {/* Areas Dr Arokia Can Support */}
          <CardSection title="Areas Dr Arokia Can Support">
            <div style={{ display: 'grid', gap: 11 }}>
              <ServiceTile title="Depression & Anxiety Disorders" tags={['Depression', 'Anxiety', 'Panic']}>
                Assessment and treatment planning for low mood, anxiety, panic symptoms, worry, avoidance, functional impact and related mental health concerns.
              </ServiceTile>
              <ServiceTile title="PTSD & Trauma-Related Conditions" tags={['PTSD', 'Trauma-informed', 'MOD experience']}>
                Trauma-informed psychiatric assessment for PTSD and trauma-related difficulties, including complex presentations shaped by life experience, culture, relationships or work.
              </ServiceTile>
              <ServiceTile title="OCD, Phobias & Anxiety Spectrum Conditions" tags={['OCD', 'Phobias', 'Intrusive thoughts']}>
                Careful assessment of intrusive thoughts, compulsions, phobias, avoidance patterns and anxiety-related difficulties, with personalised treatment planning.
              </ServiceTile>
              <ServiceTile title="Bipolar Disorder & Psychosis" tags={['Bipolar disorder', 'Psychosis', 'Relapse prevention']}>
                Specialist psychiatric assessment, medication review, risk evaluation, relapse prevention planning and collaborative care for complex mood or psychotic disorders.
              </ServiceTile>
              <ServiceTile title="Perinatal Mental Health" tags={['Perinatal', 'Postnatal depression', 'Medication safety']}>
                Assessment and treatment planning for mental health difficulties during pregnancy or after birth, including antenatal and postnatal depression themes.
              </ServiceTile>
              <ServiceTile title="Addiction & Substance Misuse" tags={['Addiction', 'Alcohol misuse', 'Dual diagnosis']}>
                Assessment of alcohol and substance misuse concerns, dual diagnosis and related mental health needs. Dr Arokia has additional endorsement in Addiction Psychiatry through the Royal College of Psychiatrists.
              </ServiceTile>
            </div>
          </CardSection>

          {/* What to Expect */}
          <CardSection title="What to Expect" style={{ scrollMarginTop: 18 }} id="what-to-expect">
            <div style={{ display: 'grid', gap: 11 }}>
              <Tile title="Comprehensive first assessment">
                The first appointment is usually around 60 minutes and explores current concerns, symptoms, personal and medical history, previous treatments, medication, and day-to-day impact.
              </Tile>
              <Tile title="Personalised treatment plan">
                Where appropriate, the plan may include medication, psychological therapy referral, lifestyle recommendations and collaborative care with other healthcare professionals.
              </Tile>
              <Tile title="Follow-up care">
                Follow-up appointments are usually around 30 minutes and can review progress, symptoms, medication, treatment response, side effects and next steps.
              </Tile>
              <Tile title="GP communication with consent">
                With your consent, a summary letter is usually shared with you and your GP to support safe, coordinated care.
              </Tile>
            </div>
          </CardSection>

          {/* Reports & Documentation */}
          <CardSection title="Reports & Specialist Documentation" style={{ scrollMarginTop: 18 }} id="reports">
            <p style={{ margin: '0 0 12px', color: '#718095', fontSize: 14.5, lineHeight: 1.68 }}>
              Dr Arokia can provide specialist documentation where appropriate, including medico-legal reports, occupational health reports, DVLA reports, insurance forms and supporting letters. Additional fees may apply depending on the purpose and complexity of the report.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {['Medico-legal', 'Occupational health', 'DVLA', 'Insurance forms', 'Supporting letters'].map((tag) => (
                <span key={tag} style={{ display: 'inline-flex', background: '#fff', border: '1px solid #e7e2d8', color: '#245f67', borderRadius: 999, padding: '6px 9px', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{tag}</span>
              ))}
            </div>
          </CardSection>

          {/* About Dr Arokia */}
          <CardSection title="About Dr Arokia">
            <p style={{ margin: 0, color: '#718095', fontSize: 14.5, lineHeight: 1.68 }}>
              Dr Arokia Antonysamy is a UK-trained Consultant Psychiatrist with more than 20 years of experience across the NHS and independent healthcare sector. She has held senior clinical and leadership roles including Medical Director and Associate Medical Director positions, and provides private online psychiatric consultations for adults across the UK.
            </p>
          </CardSection>

          {/* Dr Arokia's Approach */}
          <CardSection title="Dr Arokia's Approach">
            <div style={{ display: 'grid', gap: 11 }}>
              <Tile title="Personalised and collaborative">
                Consultations are designed to understand the person behind the symptoms and agree a treatment plan that fits their needs, goals and context.
              </Tile>
              <Tile title="Trauma-informed and culturally sensitive">
                Dr Arokia recognises that experiences, background, values, relationships and culture can shape mental health and recovery.
              </Tile>
              <Tile title="Evidence-based and holistic">
                Treatment planning may include medication, therapy referral, lifestyle recommendations, complementary or spiritual considerations where appropriate, and multidisciplinary collaboration.
              </Tile>
            </div>
          </CardSection>

          {/* Positioning Statement */}
          <CardSection title="Positioning Statement">
            <p style={{ margin: 0, color: '#718095', fontSize: 14.5, lineHeight: 1.68 }}>
              <span style={{ borderLeft: '4px solid #c8a25b', paddingLeft: 14, display: 'block', fontStyle: 'italic' }}>
                Arokia Health provides thoughtful, personalised private online psychiatry for adults across the UK — combining specialist clinical expertise, trauma-informed care, cultural sensitivity and collaborative treatment planning.
              </span>
            </p>
          </CardSection>

          {/* Socials */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', margin: '26px 0 14px' }}>
            {[
              { label: 'Consultation', href: 'https://drarokia.com/#contact' },
              { label: 'What to Expect', href: '#what-to-expect' },
              { label: 'Reports', href: '#reports' },
              { label: 'Bupa', href: 'https://www.bupa.co.uk/finder/consultant/details/dr_arokia_antonysamy' },
              { label: 'LinkedIn', href: 'https://uk.linkedin.com/in/arokia-antonysamy-b6701127' },
              { label: 'Instagram', href: 'https://www.instagram.com/dr.arokia/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#fff',
                  border: '1px solid #e7e2d8',
                  color: '#718095',
                  borderRadius: 999,
                  padding: '9px 13px',
                  fontSize: 12,
                  fontWeight: 950,
                  boxShadow: '0 10px 28px rgba(16,42,63,0.08)',
                  textDecoration: 'none',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#245f67'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#718095'}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Footer */}
          <footer style={{ textAlign: 'center', color: '#9aa6b5', fontSize: 11.5, lineHeight: 1.7, paddingBottom: 8 }}>
            © Dr Arokia Antonysamy · Arokia Health · Ask page powered by{' '}
            <strong style={{ color: '#245f67' }}><a href="https://neurascalex.com" target="_blank" rel="noopener noreferrer">NeuraScaleX</a></strong>
            <br />
            Educational information only. Not a substitute for professional advice, diagnosis, treatment, medication advice or crisis support. Clinical care should always be accessed through the appropriate clinical provider, emergency route or booking pathway.
            <br />
            askarokia.neurascalex.com
          </footer>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button
        type="button"
        onClick={scrollToAssistant}
        aria-label="Find my next step with Dr Arokia's assistant"
        style={{
          position: 'fixed',
          right: 18,
          bottom: 18,
          zIndex: 50,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'linear-gradient(135deg, #102a3f, #245f67)',
          color: '#fff',
          border: '2px solid rgba(255,255,255,0.9)',
          borderRadius: 999,
          padding: '13px 17px',
          boxShadow: '0 18px 36px rgba(16,42,63,0.24)',
          fontSize: 14,
          fontWeight: 950,
          cursor: 'pointer',
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          fontFamily: 'Inter, sans-serif',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 22px 44px rgba(16,42,63,0.28)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 18px 36px rgba(16,42,63,0.24)';
        }}
      >
        <span
          style={{
            width: 30, height: 30, borderRadius: 999,
            display: 'grid', placeItems: 'center',
            background: '#c8a25b',
            color: '#fff', fontSize: 15, flexShrink: 0,
          }}
        >
          💬
        </span>
        <span style={{ whiteSpace: 'nowrap' }}>Find My Next Step</span>
      </button>
    </div>
  );
}

export default App;
