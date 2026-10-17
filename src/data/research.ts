export interface MetricComparison {
  metric: string;
  astro: string;
  react: string;
  delta: string;
  winner: "astro" | "react" | "tie";
  note: string;
}

export interface JMeterScenario {
  users: number;
  astroResponseTime: string;
  reactResponseTime: string;
  errorRate: string;
  throughput: string;
}

export interface ResearchData {
  id: string;
  badge: string;
  volume: string;
  title: string;
  subtitle: string;
  institution: string;
  program: string;
  advisor: string;
  defenseDate: string;
  pdfUrl: string;
  abstract: {
    summary: string;
    problemStatement: string;
    methodology: string;
  };
  metrics: {
    lighthouseMobile: MetricComparison[];
    pageSpeed: MetricComparison[];
    jmeter: JMeterScenario[];
  };
  findings: {
    id: string;
    title: string;
    summary: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  bibtex: string;
}

export const researchPaper: ResearchData = {
  id: "research-astro-vs-react",
  badge: "Undergraduate Thesis",
  volume: "Vol. 2026 // Archive #01",
  title:
    "Comparative Performance Analysis of Landing Pages: Astro JS vs. React JS",
  subtitle:
    "Analisis Komparatif Performa Landing Page Antara Astro JS dan React JS Menggunakan Google Lighthouse, PageSpeed Insights, dan JMeter",
  institution: "Universitas Gunadarma",
  program: "Informatika — Fakultas Teknologi Industri",
  advisor: "Dwi Widiastuti, S.Kom., MMSI.",
  defenseDate: "September 1, 2026",
  pdfUrl: "/docs/Astro_vs_React_Landing_Page_Performance_Analysis.pdf",
  abstract: {
    summary:
      "React JS holds undisputed industry dominance (44.7% Stack Overflow 2025; 67% State of JS 2024), yet Client-Side Rendering (CSR) introduces severe mobile latency when applied to static landing pages. While Astro's official documentation asserts superior speed via its Zero-JS Islands Architecture, theoretical claims require rigorous empirical proof. This 126-page trial delivers the first simultaneous benchmark evaluating identical media-heavy prototypes across both client Core Web Vitals and 300-thread server stress.",
    problemStatement:
      "Can Astro's Zero-JS Islands Architecture empirically substantiate its documentation claims of superior speed against industry-standard React CSR under simulated mobile network throttling and Apache JMeter concurrency?",
    methodology:
      "Quantitative experiment testing identical media-rich prototypes with Google Lighthouse, PageSpeed Insights (measuring FCP, LCP, TBT, CLS, and Speed Index), and Apache JMeter under concurrent load simulations up to 300 virtual users.",
  },
  metrics: {
    lighthouseMobile: [
      {
        metric: "FCP (First Contentful Paint)",
        astro: "1.2s",
        react: "1.6s",
        delta: "-22.6%",
        winner: "astro",
        note: "Astro serves static HTML immediately without waiting for JS bundles.",
      },
      {
        metric: "Speed Index (SI)",
        astro: "1.5s",
        react: "2.1s",
        delta: "-28.6%",
        winner: "astro",
        note: "Content fills visible viewport drastically faster on Astro.",
      },
      {
        metric: "TBT (Total Blocking Time)",
        astro: "0 ms",
        react: "120 ms",
        delta: "Optimal",
        winner: "astro",
        note: "Zero main-thread blocking on initial load.",
      },
      {
        metric: "CLS (Layout Shift)",
        astro: "0.00",
        react: "0.00",
        delta: "Tie",
        winner: "tie",
        note: "Both prototypes maintained rock-solid visual stability.",
      },
    ],
    pageSpeed: [
      {
        metric: "LCP (Mobile)",
        astro: "1.9s",
        react: "3.6s",
        delta: "-47.8%",
        winner: "astro",
        note: "Hero banner & primary assets paint nearly 2x faster on mobile networks.",
      },
      {
        metric: "LCP (Desktop)",
        astro: "0.8s",
        react: "1.3s",
        delta: "-39.7%",
        winner: "astro",
        note: "Instantaneous hero paint under desktop CPU & network speeds.",
      },
    ],
    jmeter: [
      {
        users: 100,
        astroResponseTime: "48.2 ms",
        reactResponseTime: "41.6 ms",
        errorRate: "0.00%",
        throughput: "98.4 req/s",
      },
      {
        users: 200,
        astroResponseTime: "74.6 ms",
        reactResponseTime: "68.4 ms",
        errorRate: "0.00%",
        throughput: "189.2 req/s",
      },
      {
        users: 300,
        astroResponseTime: "112.5 ms",
        reactResponseTime: "101.3 ms",
        errorRate: "0.00%",
        throughput: "278.6 req/s",
      },
    ],
  },
  findings: [
    {
      id: "01",
      title: "Client-Side Rendering Bottleneck",
      summary:
        "Astro's Islands Architecture consistently dominated Google Lighthouse and PageSpeed metrics (achieving up to 47.8% faster LCP). By stripping unnecessary runtime JavaScript from static content, the browser thread remains unoccupied, resulting in near-instant perceptual speeds.",
    },
    {
      id: "02",
      title: "The Server vs. Browser Paradox",
      summary:
        "Under Apache JMeter stress testing up to 300 concurrent users, React recorded a 6.2–11.8 ms faster raw server response time. However, this is not a contradiction: JMeter measures pure TTFB / HTTP response at the server gate, whereas Lighthouse measures the true user perceptual experience in the browser. In actual user perception, Astro completely outperforms React.",
    },
    {
      id: "03",
      title: "Architecture Decision Rule",
      summary:
        "For media-heavy landing pages, blogs, and marketing portfolios where SEO and instantaneous Web Vitals are paramount, Astro is empirically superior. React remains ideal for highly dynamic SaaS dashboards requiring continuous client-side state manipulation.",
    },
  ],
  specifications: [
    { label: "Document Type", value: "Undergraduate Thesis (PI)" },
    { label: "Pages / Chapters", value: "126 Pages / 5 Chapters" },
    { label: "Evaluation Tools", value: "Lighthouse, PageSpeed, JMeter" },
    { label: "Concurreny Tested", value: "Up to 300 Virtual Users" },
    { label: "Author", value: "Farhan Harits Prakoso" },
    { label: "Advisor", value: "Dwi Widiastuti, S.Kom., MMSI." },
  ],
  bibtex: `@thesis{prakoso2026astro,
  author       = {Farhan Harits Prakoso},
  title        = {Analisis Komparatif Performa Landing Page Antara Astro JS dan React JS Menggunakan Google Lighthouse, PageSpeed Insights, dan JMeter},
  school       = {Universitas Gunadarma},
  year         = {2026},
  type         = {Penulisan Ilmiah},
  address      = {Jakarta, Indonesia}
}`,
};
