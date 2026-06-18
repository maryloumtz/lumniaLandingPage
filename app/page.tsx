type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tone: "blue" | "pink" | "violet" | "lavender";
};

const brand = {
  blue: "#3B82F6",
  pink: "#DE496E",
  violet: "#8572FF",
  lavender: "#BAB0F9",
};

const navItems = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Application", href: "#application" },
  { label: "FAQ", href: "#faq" },
];

const reasons = [
  {
    title: "Moins de charge mentale",
    description: "Centralise les informations importantes du quotidien.",
    color: "bg-[#3B82F6]",
  },
  {
    title: "Une organisation plus fluide",
    description:
      "Prépare tes repas, tes activités et tes trajets au même endroit.",
    color: "bg-[#DE496E]",
  },
  {
    title: "Un accompagnement bienveillant",
    description:
      "Lumnia AI aide à structurer sans juger ni mettre la pression.",
    color: "bg-[#8572FF]",
  },
];

const features: Feature[] = [
  {
    title: "Agenda intelligent",
    description:
      "Planifie tes journées, tes tâches et tes événements dans une interface claire.",
    icon: <CalendarIcon />,
    tone: "blue",
  },
  {
    title: "Repas de la semaine",
    description:
      "Organise tes menus simplement pour éviter les décisions de dernière minute.",
    icon: <MealIcon />,
    tone: "pink",
  },
  {
    title: "Sport & routines",
    description:
      "Prévois tes activités physiques avec une logique flexible et non culpabilisante.",
    icon: <RoutineIcon />,
    tone: "violet",
  },
  {
    title: "Communauté",
    description:
      "Échange, partage et avance avec d’autres utilisateurs dans un cadre positif.",
    icon: <CommunityIcon />,
    tone: "lavender",
  },
  {
    title: "Covoiturage",
    description: "Organise des trajets partagés pour simplifier les déplacements.",
    icon: <CarIcon />,
    tone: "blue",
  },
  {
    title: "Lumnia AI",
    description:
      "Profite d’un assistant intelligent pour t’aider à prioriser et structurer ton quotidien.",
    icon: <SparkIcon />,
    tone: "violet",
  },
];

const appBenefits = [
  "Vue claire de la journée",
  "Suggestions adaptées",
  "Modules connectés entre eux",
  "Navigation simple et mobile-first",
];

const faqItems = [
  {
    question: "Lumnia est-elle une application de productivité classique ?",
    answer:
      "Non. Lumnia vise une organisation plus douce, sans pression ni logique de performance permanente.",
  },
  {
    question: "Lumnia AI remplace-t-elle l’utilisateur dans son organisation ?",
    answer:
      "Non. L’assistant propose, structure et accompagne, mais l’utilisateur garde le contrôle.",
  },
  {
    question: "L’application est-elle pensée pour un usage quotidien ?",
    answer:
      "Oui. Elle est conçue pour être consultée rapidement, plusieurs fois par jour si besoin.",
  },
  {
    question: "Lumnia est-elle déjà disponible ?",
    answer:
      "La landing page prépare la présentation du projet. Les liens de téléchargement peuvent être branchés plus tard.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <FeaturesSection />
        <AppPreviewSection />
        <MobileSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#8572FF]/15 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Accueil Lumnia">
          <LogoMark />
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-[#171717]/65 md:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#3B82F6]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#telechargement"
          className="rounded-full bg-[#3B82F6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/24 transition hover:-translate-y-0.5 hover:bg-[#8572FF]"
        >
          Télécharger l’app
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 border-b border-[#8572FF]/25 bg-[linear-gradient(110deg,#eefaff_0%,#f4f6ff_50%,#f7f4ff_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BAB0F9]/70 bg-white/80 px-4 py-2 text-sm font-medium text-[#3B82F6] shadow-sm">
            <span className="size-2 rounded-full bg-[#DE496E]" />
            Organisation douce & intelligente
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
            Organise ton quotidien sans pression avec Lumnia
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#171717]/68">
            Agenda, repas, sport, communauté, covoiturage et assistant IA réunis
            dans une app pensée pour alléger ton quotidien.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#application"
              className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#3B82F6]/24 transition hover:-translate-y-0.5 hover:bg-[#8572FF]"
            >
              Découvrir l’application
            </a>
            <a
              href="#telechargement"
              className="inline-flex items-center justify-center rounded-full border border-[#BAB0F9]/70 bg-white px-6 py-3 text-sm font-semibold text-[#171717] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8572FF] hover:text-[#3B82F6]"
            >
              Télécharger bientôt
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center">
          <DecorativeMascots />
          <div className="absolute left-1/2 top-14 -z-10 h-80 w-72 -translate-x-1/2 rounded-full bg-[#BAB0F9]/45 blur-3xl" />
          <PhoneMockup variant="hero" />
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="pourquoi">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionKicker>Pourquoi Lumnia ?</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold text-[#171717] sm:text-4xl">
            Une organisation qui accompagne sans rigidifier.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#171717]/66">
            Les outils d’organisation sont souvent froids, complexes ou
            culpabilisants. Lumnia propose une approche plus douce : aider à
            planifier, anticiper et avancer, sans transformer chaque journée en
            performance.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[1.5rem] border border-[#BAB0F9]/25 bg-[#fbfcff] p-6 shadow-sm"
            >
              <div className={`mb-5 h-1.5 w-16 rounded-full ${reason.color}`} />
              <h3 className="text-lg font-semibold text-[#171717]">{reason.title}</h3>
              <p className="mt-3 leading-7 text-[#171717]/64">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="fonctionnalites">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionKicker>Fonctionnalités</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold text-[#171717] sm:text-4xl">
            Les essentiels du quotidien réunis au même endroit.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.5rem] border border-[#BAB0F9]/25 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8572FF]/10"
            >
              <div className={`grid size-11 place-items-center rounded-2xl ${toneClasses[feature.tone]}`}>
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#171717]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-[#171717]/64">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPreviewSection() {
  return (
    <section
      className="bg-[linear-gradient(120deg,#eef7ff_0%,#f7f5ff_56%,#fff5f8_100%)] px-4 py-20 sm:px-6 lg:px-8"
      id="application"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="mx-auto flex w-full justify-center">
          <PhoneMockup variant="preview" />
        </div>
        <div>
          <SectionKicker>Aperçu application</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold text-[#171717] sm:text-4xl">
            Une interface calme pour garder une vision claire.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#171717]/68">
            Lumnia rassemble les besoins du quotidien dans une seule interface :
            les tâches à ne pas oublier, les repas à préparer, les routines à
            ajuster et les idées proposées par Lumnia AI.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {appBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/76 px-4 py-3 text-sm font-medium text-[#171717] shadow-sm"
              >
                <span
                  className={`grid size-6 shrink-0 place-items-center rounded-full ${
                    index % 2 === 0
                      ? "bg-[#3B82F6] text-white"
                      : "bg-[#DE496E] text-white"
                  }`}
                >
                  <CheckIcon />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="telechargement">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[1.75rem] border border-[#BAB0F9]/35 bg-white p-6 shadow-xl shadow-[#8572FF]/10 sm:p-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <SectionKicker>Pensée pour le mobile</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold text-[#171717] sm:text-4xl">
            Lumnia t’accompagne directement depuis ton téléphone.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#171717]/66">
            Lumnia est conçue pour accompagner l’utilisateur dans son quotidien,
            directement depuis son téléphone. L’interface privilégie la
            lisibilité, la rapidité d’accès et la simplicité d’usage.
          </p>
          <p className="mt-5 text-sm font-medium text-[#3B82F6]">
            Disponible prochainement
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <StoreButton label="App Store" tone="blue" />
          <StoreButton label="Google Play" tone="violet" />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="faq">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <SectionKicker>FAQ</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold text-[#171717] sm:text-4xl">
            Quelques réponses avant de commencer.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[#BAB0F9]/25 rounded-[1.5rem] border border-[#BAB0F9]/30 bg-[#fbfcff] px-5 shadow-sm sm:px-8">
          {faqItems.map((item) => (
            <article key={item.question} className="py-6">
              <h3 className="text-base font-semibold text-[#171717] sm:text-lg">
                {item.question}
              </h3>
              <p className="mt-2 leading-7 text-[#171717]/64">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#8572FF]/20 bg-[#f8faff] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <LogoMark compact />
          <p className="mt-2 text-sm text-[#171717]/60">Organiser mieux, sans pression.</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm font-medium text-[#171717]/62" aria-label="Navigation pied de page">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#3B82F6]">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-[#171717]/50">© 2026 Lumnia. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-end gap-1.5">
      <span className={`${compact ? "text-xl" : "text-2xl"} font-black leading-none text-[#171717]`}>
        L
      </span>
      <span className={`${compact ? "text-xl" : "text-2xl"} font-black leading-none text-[#3B82F6]`}>
        u
      </span>
      <span className={`${compact ? "text-xl" : "text-2xl"} font-black leading-none text-[#171717]`}>
        mnia
      </span>
      <span className="mb-0.5 ml-1 hidden text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#171717] sm:inline">
        Planner
      </span>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
      {children}
    </p>
  );
}

function DecorativeMascots() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
      <span className="absolute -left-2 top-10 grid size-12 rotate-[-8deg] place-items-center rounded-[1.1rem] bg-white text-[#3B82F6] shadow-xl shadow-[#3B82F6]/10">
        <SparkIcon />
      </span>
      <span className="absolute right-0 top-4 grid size-10 rotate-[10deg] place-items-center rounded-full bg-[#eaf3ff] text-[#8572FF] shadow-xl shadow-[#8572FF]/10">
        <CheckIcon />
      </span>
      <span className="absolute bottom-14 right-4 h-6 w-16 rounded-full bg-[#BAB0F9]/70 blur-sm" />
    </div>
  );
}

function PhoneMockup({ variant }: { variant: "hero" | "preview" }) {
  const isHero = variant === "hero";

  return (
    <div
      className={`relative mx-auto shrink-0 rounded-[2.25rem] border border-[#171717]/12 bg-[#171717] p-2.5 shadow-2xl shadow-[#8572FF]/24 ${
        isHero ? "w-[17.5rem] sm:w-[18.5rem]" : "w-[15.75rem] sm:w-[16.75rem]"
      }`}
      aria-label="Aperçu de l’interface mobile Lumnia"
    >
      <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#171717]" />
      <div className="absolute -right-1 top-24 h-12 w-1 rounded-r-full bg-[#171717]/80" />
      <div className="absolute -left-1 top-28 h-8 w-1 rounded-l-full bg-[#171717]/80" />
      <div className="absolute -left-1 top-40 h-8 w-1 rounded-l-full bg-[#171717]/80" />

      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.75rem] bg-[#f7f9ff]">
        <div className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(135deg,#e8f4ff_0%,#f7f3ff_56%,#fff1f5_100%)]" />
        <div className="relative px-4 pb-4 pt-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#3B82F6]">
                Aujourd’hui
              </p>
              <p className="mt-1 text-lg font-semibold text-[#171717]">
                Bonjour, Maëlle
              </p>
            </div>
            <div className="grid size-9 place-items-center rounded-2xl bg-white text-[#8572FF] shadow-sm">
              <SparkIcon />
            </div>
          </div>

          <div className="mt-5 rounded-[1.35rem] bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#171717]">Journée légère</p>
                <p className="mt-1 text-[0.7rem] leading-5 text-[#171717]/52">
                  3 priorités et une pause prévue
                </p>
              </div>
              <span className="rounded-full bg-[#e9e5ff] px-2.5 py-1 text-[0.65rem] font-semibold text-[#8572FF]">
                Clair
              </span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-[#edf0f8]">
              <div className="h-2 w-2/3 rounded-full bg-[#3B82F6]" />
            </div>
          </div>
        </div>

        <div className="relative space-y-2.5 px-4 pb-4">
          <MockupCard title="Repas semaine" text="Menus prêts jusqu’à jeudi" tone="pink" />
          <MockupCard title="Sport doux" text="Marche de 25 min proposée" tone="blue" />
          <MockupCard title="Lumnia AI" text="Je peux t’aider à prioriser." tone="violet" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            <MiniTile label="Agenda" tone="blue" />
            <MiniTile label="Repas" tone="pink" />
            <MiniTile label="AI" tone="violet" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniTile({ label, tone }: { label: string; tone: "blue" | "pink" | "violet" }) {
  const tileTones = {
    blue: "bg-[#eaf3ff] text-[#3B82F6]",
    pink: "bg-[#fff0f4] text-[#DE496E]",
    violet: "bg-[#f1eeff] text-[#8572FF]",
  };

  return (
    <div className={`rounded-2xl px-2 py-2.5 text-center text-[0.65rem] font-bold ${tileTones[tone]}`}>
      {label}
    </div>
  );
}

function MockupCard({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "blue" | "pink" | "violet";
}) {
  const tones = {
    blue: "bg-[#eaf3ff] text-[#3B82F6]",
    pink: "bg-[#fff0f4] text-[#DE496E]",
    violet: "bg-[#f1eeff] text-[#8572FF]",
  };

  return (
    <div className="flex items-center gap-2.5 rounded-[1.15rem] border border-[#BAB0F9]/20 bg-white p-2.5 shadow-sm">
      <span className={`grid size-9 shrink-0 place-items-center rounded-2xl ${tones[tone]}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-current" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[0.78rem] font-semibold text-[#171717]">{title}</p>
        <p className="truncate text-[0.68rem] text-[#171717]/50">{text}</p>
      </div>
    </div>
  );
}

function StoreButton({
  label,
  tone,
}: {
  label: string;
  tone: "blue" | "violet";
}) {
  const styles =
    tone === "blue"
      ? "bg-[#3B82F6] shadow-[#3B82F6]/20 hover:bg-[#8572FF]"
      : "bg-[#8572FF] shadow-[#8572FF]/20 hover:bg-[#3B82F6]";

  return (
    <a
      href="#"
      className={`inline-flex min-w-44 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-left text-white shadow-lg transition hover:-translate-y-0.5 ${styles}`}
      aria-label={`${label} disponible prochainement`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-white/14">
        <DownloadIcon />
      </span>
      <span>
        <span className="block text-xs text-white/76">Bientôt sur</span>
        <span className="block text-sm font-semibold">{label}</span>
      </span>
    </a>
  );
}

const toneClasses = {
  blue: "bg-[#eaf3ff] text-[#3B82F6]",
  pink: "bg-[#fff0f4] text-[#DE496E]",
  violet: "bg-[#f1eeff] text-[#8572FF]",
  lavender: "bg-[#f4f1ff] text-[#8572FF]",
};

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {children}
    </svg>
  );
}

function CalendarIcon() {
  return (
    <IconBase>
      <path d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="M8 13h3M8 16h6" />
    </IconBase>
  );
}

function MealIcon() {
  return (
    <IconBase>
      <path d="M6 3v18M10 3v7a4 4 0 0 1-4 4M14 4v17M18 4v17" />
      <path d="M14 4c3 1.5 4 3.5 4 7" />
    </IconBase>
  );
}

function RoutineIcon() {
  return (
    <IconBase>
      <path d="M5 12a7 7 0 0 1 12-5" />
      <path d="M17 3v4h-4" />
      <path d="M19 12a7 7 0 0 1-12 5" />
      <path d="M7 21v-4h4" />
    </IconBase>
  );
}

function CommunityIcon() {
  return (
    <IconBase>
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" />
    </IconBase>
  );
}

function CarIcon() {
  return (
    <IconBase>
      <path d="M5 16h14M7 16v2M17 16v2" />
      <path d="m6 12 2-5h8l2 5" />
      <path d="M5 12h14v4H5z" />
      <path d="M8 14h.01M16 14h.01" />
    </IconBase>
  );
}

function SparkIcon() {
  return (
    <IconBase>
      <path d="m12 3 1.6 5.1L19 10l-5.4 1.9L12 17l-1.6-5.1L5 10l5.4-1.9L12 3Z" />
      <path d="m18 16 .7 2.1L21 19l-2.3.9L18 22l-.7-2.1L15 19l2.3-.9L18 16Z" />
    </IconBase>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5" viewBox="0 0 20 20" fill="none">
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
