export type CheckResultData = {
  domain: string;
  visibilityIndex: string;
  keywordsGermany: string;
  organicTraffic: string;
  topRankings: { keyword: string; position: number }[];
  aiPrompts: number;
  aiMode: number;
  aiOverviews: number;
  chatGPT: number;
  observations: { title: string; text: string }[];
};

// Beispiel-Datensatz. Für einen neuen Interessenten einfach diese Werte
// austauschen (oder eine Kopie dieser Datei mit eigenem Namen anlegen) –
// die Seite selbst muss dafür nicht verändert werden.
export const exampleCheckResult: CheckResultData = {
  domain: "glueckspilz-shop.de",
  visibilityIndex: "0,0554",
  keywordsGermany: "1.101",
  organicTraffic: "ca. 2.288",
  topRankings: [
    { keyword: "kissen personalisiert", position: 7 },
    { keyword: "personalisierte kissen", position: 5 },
    { keyword: "schultüte kissen", position: 4 },
  ],
  aiPrompts: 65,
  aiMode: 39,
  aiOverviews: 24,
  chatGPT: 2,
  observations: [
    {
      title: "Gute Google-Basis",
      text: "Deine Website rankt bereits für relevante Suchbegriffe und hat damit eine solide SEO-Grundlage.",
    },
    {
      title: "KI-Sichtbarkeit ist vorhanden – aber unterschiedlich verteilt",
      text: "In Googles KI-Ergebnissen taucht deine Domain bereits auf. In ChatGPT ist die Präsenz deutlich geringer.",
    },
    {
      title: "Hier würde ich genauer hinschauen",
      text: "Spannend ist, bei welchen relevanten Fragen Wettbewerber genannt, zitiert oder empfohlen werden – und dein Unternehmen nicht.",
    },
  ],
};
