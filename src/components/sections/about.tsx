import { Reveal } from "./reveal";

export function About() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="about">
          <div className="about-photo">Foto von Bettina folgt</div>
          <div className="about-text">
            <span className="eyebrow">Über mich</span>
            <h2 style={{ marginTop: 18 }}>
              Hallo, ich bin <em>Bettina.</em>
            </h2>
            <p>
              Ich bin selbstständige GEO-Beraterin und E-Commerce-Unternehmerin aus dem
              Rheinland. Seit 2008 betreibe ich eigene Online-Shops – mit allen Höhen und
              Tiefen, die dazugehören. Ich kenne WooCommerce, Etsy, Amazon, Shopify und
              Dropshipping aus eigener Hand und weiß, wie es sich anfühlt, wenn der
              Traffic plötzlich einbricht.
            </p>
            <p>
              Vor meiner Selbstständigkeit habe ich als Management Consultant bei Twics
              IT Solutions und Sun Microsystems gearbeitet. Heute helfe ich Online-Shops
              und KMU dabei, in Google und in KI-Antworten sichtbar zu werden. Als
              BAFA-anerkannte Beraterin kann ich für viele Projekte Förderungen
              vermitteln.
            </p>
            <div className="about-stats">
              <div>
                <div className="num">18+</div>
                <div className="lbl">Jahre E-Commerce-Praxis</div>
              </div>
              <div>
                <div className="num">100%</div>
                <div className="lbl">Persönliche Beratung – keine Agentur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
