import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "./reveal";
import type { CheckResultData } from "@/lib/check-result-data";

export function CheckResultReport({ domain, visibilityIndex, keywordsGermany, organicTraffic, topRankings, aiPrompts, aiMode, aiOverviews, chatGPT, observations }: CheckResultData) {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Dein kostenloser Check</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            So sichtbar ist dein Unternehmen bei Google und KI.
          </h1>
          <span className="result-domain">{domain}</span>
          <p className="hero-sub" style={{ marginTop: 14 }}>
            Ich habe mir deine aktuelle Sichtbarkeit bei Google und in KI-Systemen
            angesehen. Hier bekommst du einen ersten kompakten Überblick.
          </p>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">01 · Google</span>
            <h2>Deine Sichtbarkeit in der klassischen Suche</h2>
          </div>
          <div
            className="result-stats"
            style={{ "--result-cols": 3 } as CSSProperties}
          >
            <div className="result-stat">
              <span className="result-stat-num">{visibilityIndex}</span>
              <div className="result-stat-label">Sichtbarkeitsindex</div>
            </div>
            <div className="result-stat">
              <span className="result-stat-num">{keywordsGermany}</span>
              <div className="result-stat-label">Keywords Deutschland</div>
            </div>
            <div className="result-stat">
              <span className="result-stat-num">{organicTraffic}</span>
              <div className="result-stat-label">organischer Traffic (geschätzt)</div>
            </div>
          </div>
          <ul className="result-keywords">
            {topRankings.map((r) => (
              <li key={r.keyword}>
                <span className="kw">„{r.keyword}“</span>
                <span className="pos">Position {r.position}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">02 · KI-Sichtbarkeit</span>
            <h2>Wo deine Domain bereits in KI-Systemen auftaucht</h2>
          </div>
          <div
            className="result-stats"
            style={{ "--result-cols": 4 } as CSSProperties}
          >
            <div className="result-stat">
              <span className="result-stat-num">{aiPrompts}</span>
              <div className="result-stat-label">erfasste Prompts</div>
            </div>
            <div className="result-stat">
              <span className="result-stat-num">{aiMode}</span>
              <div className="result-stat-label">Google AI Mode</div>
            </div>
            <div className="result-stat">
              <span className="result-stat-num">{aiOverviews}</span>
              <div className="result-stat-label">Google AI Overviews</div>
            </div>
            <div className="result-stat">
              <span className="result-stat-num">{chatGPT}</span>
              <div className="result-stat-label">ChatGPT</div>
            </div>
          </div>
          <p className="check-note">
            Die Werte zeigen die von SISTRIX erfasste Sichtbarkeit und bilden nicht
            jede mögliche KI-Antwort im Internet ab.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Meine Einschätzung</span>
            <h2>Was mir bei deiner Website auffällt</h2>
          </div>
          <div className="phase-list" style={{ marginTop: 24 }}>
            {observations.map((o, i) => (
              <div key={o.title} className="phase-item">
                <span className="phase-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Was der Check zeigt – und was nicht</span>
            <h2>Ein erster Überblick, keine vollständige Analyse.</h2>
          </div>
          <p className="check-text">
            Der kostenlose Check zeigt dir erste Auffälligkeiten deiner SEO- und
            KI-Sichtbarkeit.
          </p>
          <p className="check-text" style={{ marginTop: 10 }}>
            Eine vollständige Ursachenanalyse, systematischer Wettbewerbsvergleich,
            Brand-Mention-, Citation- und Recommendation-Analyse sowie konkrete
            Maßnahmenplanung sind nicht Bestandteil des kostenlosen Checks.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Wenn du tiefer einsteigen möchtest</span>
            <h2>Du möchtest wissen, warum das so ist?</h2>
          </div>
          <div className="offer-path" style={{ maxWidth: 480 }}>
            <span className="offer-path-label">SEO- &amp; KI-Sichtbarkeits-Audit</span>
            <div className="offer-path-price">790 €</div>
            <p>
              Ich analysiere deine Google- und KI-Sichtbarkeit im Detail, vergleiche
              relevante Wettbewerber und zeige dir, welche Maßnahmen wirklich Priorität
              haben.
            </p>
            <ul>
              <li>SEO-Sichtbarkeit</li>
              <li>relevante Themen und Suchanfragen</li>
              <li>Prompt-Sichtbarkeit</li>
              <li>Share of Voice</li>
              <li>Brand Mentions</li>
              <li>Citations</li>
              <li>Recommendations</li>
              <li>Wettbewerbsvergleich</li>
              <li>Content-, Struktur- und Technik-Gaps</li>
              <li>priorisierte nächste Schritte</li>
            </ul>
            <Link href="/angebote/analyse" className="offer-path-cta">
              Audit ansehen →
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
