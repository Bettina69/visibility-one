import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/site-config";
import { Reveal } from "./reveal";

const PATHS = [
  {
    label: "Verstehen",
    title: "SEO- & KI-Sichtbarkeitsanalyse",
    desc: "Du möchtest genau wissen, warum deine Sichtbarkeit nachlässt oder warum Wettbewerber bei Google und in KI-Systemen stärker auftauchen.",
    points: [
      "SEO- und KI-Sichtbarkeit",
      "relevante Themen und Suchanfragen",
      "Wettbewerbsvergleich",
      "Ursachen und Prioritäten",
    ],
    cta: "Analyse ansehen →",
  },
  {
    label: "Optimieren",
    title: "Optimierung nach Bedarf",
    desc: "Wir verbessern gezielt die Bereiche, die für deine Sichtbarkeit wirklich relevant sind.",
    points: [
      "Seiten- & Inhaltsstruktur",
      "Content-Optimierung",
      "technisches SEO",
      "strukturierte Daten",
    ],
    cta: "Optimierung ansehen →",
  },
  {
    label: "Begleiten",
    title: "Monitoring & laufende Beratung",
    desc: "Wenn du wissen möchtest, ob die Maßnahmen wirken und was sich bei Google und in der KI-Suche verändert.",
    points: [
      "Sichtbarkeit beobachten",
      "Entwicklungen einordnen",
      "Prioritäten anpassen",
      "konkrete nächste Schritte",
    ],
    cta: "Begleitung ansehen →",
  },
];

export function OffersOverview() {
  return (
    <Reveal className="section offers-transition">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Meine Angebote</span>
          <h2>
            Einfach starten.
            <br />
            Ohne großes Commitment.
          </h2>
          <p className="lead">
            Du kannst klein starten und nur so weit gehen, wie es für dein Unternehmen
            sinnvoll ist.
          </p>
        </div>

        <div className="offer-intro-card">
          <div className="offer-intro-main">
            <span className="offer-intro-label">Kostenlos · Schnell · Unverbindlich</span>
            <h3>Wie sichtbar ist deine Website bei Google und KI?</h3>
            <p>
              Schick mir deine URL. Ich schaue mir an, wie dein Unternehmen bei Google
              aufgestellt ist und ob es in KI-Systemen wie ChatGPT, Google AI oder
              Perplexity auftaucht.
            </p>
            <p>
              Du bekommst 2–3 konkrete Beobachtungen zu deiner SEO- und KI-Sichtbarkeit –
              kostenlos und unverbindlich.
            </p>
            <div className="offer-intro-cta">
              <Link href="/sichtbarkeitscheck" className="btn btn-primary">
                SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
              </Link>
              <span className="offer-intro-hint">unverbindlich · persönlich geprüft · 2–3 konkrete Hinweise</span>
            </div>
          </div>
          <div className="offer-intro-portrait">
            <div className="offer-intro-portrait-photo">
              <Image
                src={`${basePath}/bettina-portrait.jpg`}
                alt=""
                width={520}
                height={520}
                sizes="(min-width: 900px) 260px, 180px"
              />
            </div>
            <p className="offer-intro-portrait-caption">
              <strong>Bettina Teckentrup</strong>
            </p>
          </div>
        </div>

        <h3 className="offer-subhead">Wenn du tiefer einsteigen möchtest</h3>
        <div className="offer-paths">
          {PATHS.map((p) => (
            <div key={p.label} className="offer-path">
              <span className="offer-path-label">{p.label}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <ul>
                {p.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href="/angebote" className="offer-path-cta">
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="offer-hourly">
          <h4>Du brauchst nur punktuell Unterstützung?</h4>
          <p>
            Du kannst mich auch flexibel auf Stundenbasis buchen – ohne Paket und ohne
            langfristige Bindung.
          </p>
          <Link href="/kontakt" className="btn-link">
            Unverbindlich anfragen →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
