import { Reveal } from "./reveal";

function RestaurantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="13" r="6" />
      <path d="M4 3v6M4 3c-1.3 0-1.3 2.2 0 2.2M4 9v12" />
      <path d="M20 3v18" />
      <path d="M20 3c1.4 0 1.8 2 1.8 3.5S21.4 10 20 10" />
    </svg>
  );
}

function BeautyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M17 3l4 4-8.5 8.5-4-4L17 3z" />
      <path d="M8.5 11.5L4 16l1 3 3 1 4.5-4.5" />
    </svg>
  );
}

function TwoPeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="3" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M14.5 20v-1a4.5 4.5 0 0 1 6.5-4" />
    </svg>
  );
}

function HeatingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 3c1 3-3 4-3 7a3 3 0 0 0 6 0c0-1.5-1-2-1-3 1.5 1 2.5 3 2.5 5a4.5 4.5 0 0 1-9 0C7.5 8 10 6 12 3z" />
    </svg>
  );
}

function SteadyCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

const CASES = [
  {
    title: "Italienisches Restaurant",
    Icon: RestaurantIcon,
    desc: "Beim Restaurantnamen wird der Betrieb gefunden. Bei generischen lokalen Suchen oder Empfehlungen – auch in Google AI Overviews – stehen andere Restaurants vorne.",
  },
  {
    title: "Kosmetikerin",
    Icon: BeautyIcon,
    desc: "Stammkundinnen kennen den Betrieb. Neue Kundinnen suchen aber nach konkreten Behandlungen wie Microneedling oder Problemhaut-Pflege – und finden andere Anbieterinnen.",
  },
  {
    title: "Coach",
    Icon: TwoPeopleIcon,
    desc: "Bei Google besteht bereits gute Sichtbarkeit. Bei relevanten Fragen an ChatGPT oder andere KI-Systeme werden bei diesem Spezialgebiet aber andere Coaches genannt.",
  },
  {
    title: "Heizungs- und Sanitärbetrieb",
    Icon: HeatingIcon,
    desc: "Eine über Jahre gewachsene Website, auf der Heizung, Wärmepumpe und Badsanierung strukturell nicht sauber getrennt sind. Wettbewerber stehen bei Google vorne und werden teils auch in KI-generierten Empfehlungen häufiger berücksichtigt.",
  },
  {
    title: "„Eigentlich läuft meine Website gut.“",
    Icon: SteadyCheckIcon,
    desc: "Gute Google-Sichtbarkeit, Anfragen kommen. Jetzt hört der Unternehmer von AI Overviews, ChatGPT und Perplexity und fragt sich, ob dringend etwas geändert werden muss. Antwort: Vielleicht nicht – auch das kann ein Audit-Ergebnis sein.",
  },
];

export function UseCases() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Typische Situationen</span>
          <h2>Erkennst du dein Unternehmen wieder?</h2>
          <p className="lead">
            Du musst SEO oder GEO nicht verstehen, bevor du mich kontaktierst. Hier
            sind fünf typische Ausgangslagen – keine Erfolgsversprechen, sondern
            erkennbare Situationen.
          </p>
        </div>
        <div className="check-grid">
          {CASES.map((c, i) => (
            <div key={c.title} className="check-item">
              <div className="offer-path-icon-row">
                <span className="offer-path-icon" aria-hidden="true">
                  <c.Icon />
                </span>
                <span className="check-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
