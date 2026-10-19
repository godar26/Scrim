import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Ban,
  Bomb,
  Crosshair,
  Download,
  Flag,
  ScrollText,
  Search,
  ShieldCheck,
  Smartphone,
  Swords,
} from "lucide-react";
import {
  attachmentGroups,
  chips,
  finals,
  fold,
  formats,
  lethals,
  modes,
  perks,
  pools,
  roleTokens,
  rosterExample,
  skills,
  skins,
  streaks,
  tacticals,
  weaponGroups,
  type FormatBoard,
  type Step,
} from "@/data/codex";

const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "reglages", label: "Réglages" },
  { id: "cartes", label: "Cartes" },
  { id: "formats", label: "Formats" },
  { id: "roles", label: "Rôles" },
  { id: "interdit", label: "Interdit" },
  { id: "autorise", label: "Autorisé" },
  { id: "cosmetiques", label: "Cosmétiques" },
  { id: "discipline", label: "Discipline" },
];

const FACETS = [
  { id: "tous", label: "Tout" },
  { id: "arme", label: "Armes" },
  { id: "accessoire", label: "Accessoires" },
  { id: "equipement", label: "Équipement" },
  { id: "atout", label: "Atouts" },
  { id: "serie", label: "Séries" },
  { id: "cosmetique", label: "Skins" },
] as const;

function Chapter({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="chapter scroll-mt-48 px-4 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">{children}</div>
    </section>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-condensed text-sm tracking-widest text-acid uppercase">{children}</p>
  );
}

function actionLabel(action: Step["action"]) {
  if (action === "ban") return "Ban";
  if (action === "pick") return "Choix";
  return "Reste";
}

function Board({ board }: { board: FormatBoard }) {
  return (
    <article className="flex flex-col gap-5">
      <header className="max-w-3xl">
        <Kicker>{board.kicker}</Kicker>
        <h3 className="font-condensed mt-2 text-5xl leading-none text-fog uppercase sm:text-6xl">
          {board.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog/75">{board.lede}</p>
      </header>
      <ol className="flex gap-3 overflow-x-auto pb-1">
        {board.order.map((mode, index) => (
          <li
            key={`${board.id}-${mode}-${index}`}
            className="token glass flex w-36 shrink-0 flex-col justify-between rounded-2xl p-4"
          >
            <span className="extrude font-condensed text-4xl text-acid">0{index + 1}</span>
            <span className="mt-6 font-condensed text-lg leading-tight text-fog uppercase">
              {mode}
            </span>
          </li>
        ))}
      </ol>
      <div className="grid gap-4 lg:grid-cols-3">
        {board.phases.map((phase) => (
          <div key={phase.mode} className="glass flex flex-col gap-4 rounded-3xl p-4">
            <div>
              <p className="font-condensed text-2xl text-fog uppercase">{phase.mode}</p>
              <p className="mt-2 text-sm leading-relaxed text-fog/70">{phase.pool.join(" · ")}</p>
            </div>
            <ol className="flex flex-col gap-2">
              {phase.steps.map((step, index) => (
                <li
                  key={`${phase.mode}-${index}`}
                  className={
                    step.action === "ban"
                      ? "rounded-2xl border border-ember/40 bg-ember/10 p-3"
                      : "rounded-2xl border border-acid/30 bg-acid/10 p-3"
                  }
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span
                      className={
                        step.team === 1
                          ? "font-condensed text-sm tracking-widest text-acid uppercase"
                          : "font-condensed text-sm tracking-widest text-fog uppercase"
                      }
                    >
                      Équipe {step.team}
                    </span>
                    <span className="font-condensed text-sm text-fog/70 uppercase">
                      {actionLabel(step.action)}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-fog">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </article>
  );
}

export function Handbook() {
  const [active, setActive] = useState("accueil");
  const [query, setQuery] = useState("");
  const [facet, setFacet] = useState<(typeof FACETS)[number]["id"]>("tous");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const nodes = NAV.map((item) => document.getElementById(item.id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const hits = useMemo(() => {
    const needle = fold(query.trim());
    if (needle.length < 2 && facet === "tous") return [];
    return chips.filter((item) => {
      const facetOk = facet === "tous" || item.facet === facet;
      if (!facetOk) return false;
      if (needle.length < 2) return true;
      return fold(`${item.label} ${item.sub ?? ""} ${item.group}`).includes(needle);
    });
  }, [facet, query]);

  const showHits = query.trim().length >= 2 || facet !== "tous";

  return (
    <div className="stage min-h-screen text-fog">
      <header className="no-print sticky top-0 z-30 border-b border-fog/10 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#accueil" className="font-condensed text-xl tracking-widest text-fog uppercase">
            Noxius
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-acid px-4 text-sm font-semibold text-ink"
          >
            <Download className="size-4" aria-hidden="true" />
            Guide PDF
          </button>
        </div>
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-3" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                active === item.id
                  ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-acid px-4 text-sm font-semibold text-ink"
                  : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-fog/15 px-4 text-sm text-fog"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <Chapter id="accueil">
          <div className="hero-frame relative overflow-hidden rounded-3xl">
            <img
              src="/art/hero.jpg"
              alt="Bunker du clan Noxius, cinq opérateurs sous une lumière acide"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="hero-shade absolute inset-0" />
            <div className="relative flex flex-col gap-5 p-5 sm:p-10">
              <Kicker>Clan · Codex 2026</Kicker>
              <h1 className="extrude font-condensed max-w-3xl text-6xl leading-none text-fog uppercase sm:text-8xl">
                Noxius
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-fog">
                Le guide de révision du clan. Settings, cartes, Best of 5, Best of 3, rôles et tout
                ce qui est interdit — en français, sans simulateur.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:max-w-lg">
                {[
                  ["3", "modes"],
                  ["13", "cartes"],
                  ["10", "jetons"],
                ].map(([value, label]) => (
                  <div key={label} className="glass rounded-2xl px-3 py-3">
                    <p className="extrude font-condensed text-3xl text-acid">{value}</p>
                    <p className="text-sm text-fog/80">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Réglages", "Les chiffres exacts du salon.", "#reglages", Crosshair],
              ["Formats", "L'ordre des cartes, affiché.", "#formats", Flag],
              ["Rôles", "Le pool, pas un formulaire.", "#roles", Swords],
              ["Interdit", "Armes, stuff, atouts, skins.", "#interdit", Ban],
            ].map(([title, text, href, Icon]) => (
              <a key={String(title)} href={String(href)} className="glass rounded-3xl p-4">
                <Icon className="size-5 text-acid" aria-hidden="true" />
                <p className="font-condensed mt-4 text-2xl uppercase">{title as string}</p>
                <p className="mt-1 text-sm leading-relaxed text-fog/75">{text as string}</p>
              </a>
            ))}
          </div>
        </Chapter>

        <Chapter id="reglages">
          <header className="max-w-3xl">
            <Kicker>Salon personnalisé</Kicker>
            <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Réglages de partie</h2>
            <p className="mt-4 text-base leading-relaxed text-fog/75">
              Le chef qui ouvre le salon pose ces valeurs, mode par mode. Ce codex ne refait pas le
              tutoriel d'invitation : seulement les chiffres qui rendent la partie officielle.
            </p>
          </header>
          <div className="grid gap-4 lg:grid-cols-3">
            {modes.map((mode) => (
              <article key={mode.id} className="glass flex flex-col overflow-hidden rounded-3xl">
                <img src={mode.image} alt="" className="aspect-video w-full object-cover" />
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <div>
                    <p className="text-sm text-acid">{mode.en}</p>
                    <h3 className="font-condensed text-3xl uppercase">{mode.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog/75">{mode.blurb}</p>
                  </div>
                  <dl className="mt-auto">
                    {mode.settings.map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-baseline justify-between gap-3 border-b border-fog/10 py-2"
                      >
                        <dt className="text-sm text-fog/70">{key}</dt>
                        <dd className="font-condensed text-2xl text-acid">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </Chapter>

        <Chapter id="cartes">
          <header className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Kicker>Esports Map Pool</Kicker>
              <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Treize cartes</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog/75">
                Pool 2026, du Stage 2 jusqu'aux finales mondiales. Chaque année : 7 cartes restent,
                3 changent de mode, 3 nouvelles entrent. L'administration peut bouger le pool seulement
                dans un cas exceptionnel. Les noms ci-dessous sont ceux du règlement.
              </p>
            </div>
            <img
              src="/art/maps.jpg"
              alt="Table de guerre avec les maquettes des terrains"
              className="aspect-video w-full rounded-3xl object-cover"
            />
          </header>
          <div className="grid gap-4 lg:grid-cols-3">
            {pools.map((pool) => (
              <article key={pool.en} className="glass overflow-hidden rounded-3xl">
                <img src={pool.image} alt="" className="h-36 w-full object-cover" />
                <div className="flex flex-col gap-3 p-4">
                  <div>
                    <p className="text-sm text-acid">{pool.en}</p>
                    <h3 className="font-condensed text-3xl uppercase">{pool.mode}</h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {pool.maps.map((map) => (
                      <li key={map.name} className="rounded-2xl border border-fog/10 px-3 py-3">
                        <p className="font-condensed text-xl uppercase">{map.name}</p>
                        <p className="text-sm leading-relaxed text-fog/70">{map.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Chapter>

        <Chapter id="formats">
          <header className="max-w-3xl">
            <Kicker>Affichage, pas un veto</Kicker>
            <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">L'ordre des cartes</h2>
            <p className="mt-4 text-base leading-relaxed text-fog/75">
              À lire comme une plaque de match. L'acide, c'est l'équipe 1. Le blanc, c'est l'équipe 2.
              Le veto réel se fait sur le Discord de l'administration — ici on révise seulement qui
              parle, et dans quel sens.
            </p>
          </header>
          <Board board={formats[0]} />
          <Board board={formats[1]} />
          <details className="glass rounded-3xl p-5">
            <summary className="font-condensed text-2xl uppercase">
              Grande finale et Best of 7
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fog/75">
              Hors grande finale, les matchs des splits et des finales mondiales sont en Best of 5.
              La grande finale est un Best of 7 avec une carte d'avance pour l'équipe qui sort de la
              finale des gagnants. Une carte déjà bannie ou choisie ne peut plus revenir.
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {finals.map((block) => (
                <article key={block.title} className="rounded-2xl border border-fog/10 p-4">
                  <h3 className="font-condensed text-2xl uppercase">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-acid">{block.order}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {block.lines.map((line) => (
                      <li key={line} className="text-sm leading-relaxed text-fog/80">
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </details>
        </Chapter>

        <Chapter id="roles">
          <header className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Kicker>Deux rôles par joueur</Kicker>
              <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Classes d'armes</h2>
              <p className="mt-4 text-base leading-relaxed text-fog/75">
                Affichage du pool. Rien à cocher. Chaque équipe a ses propres jetons : 3 fusils
                d'assaut, 3 mitraillettes, 1 FM, 1 pompe, 1 marksman, 1 sniper. Un joueur prend deux
                rôles différents. Jamais deux fois le même.
              </p>
            </div>
            <img
              src="/art/roles.jpg"
              alt="Armurerie vitrée avec cinq classes d'armes"
              className="aspect-video w-full rounded-3xl object-cover"
            />
          </header>

          <div className="glass rounded-3xl p-4 sm:p-6">
            <p className="font-condensed text-sm tracking-widest text-fog/70 uppercase">
              Plateau d'une équipe · 10 jetons
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {roleTokens.flatMap((role) =>
                Array.from({ length: role.count }, (_, index) => (
                  <div
                    key={`${role.short}-${index}`}
                    className="token glass-acid flex h-24 w-20 flex-col items-center justify-center rounded-2xl"
                  >
                    <span className="font-condensed text-2xl text-acid">{role.short}</span>
                    <span className="text-center text-xs text-fog/80">{role.name}</span>
                  </div>
                )),
              )}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {roleTokens.map((role) => (
              <article key={role.short} className="glass rounded-3xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-condensed text-2xl uppercase">{role.name}</h3>
                  <span className="extrude font-condensed text-4xl text-acid">×{role.count}</span>
                </div>
                <p className="mt-2 text-sm text-fog/70">{role.en}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog/80">
                  Arme principale de cette classe seulement. Le secondaire et une arme ramassée ne
                  comptent pas dans le rôle.
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="glass-acid rounded-3xl p-5">
              <p className="font-condensed text-sm tracking-widest uppercase">Déclaration</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
                <li>Annoncée en début de série, à l'adversaire et à l'administration.</li>
                <li>L'équipe qui a donné ses compétences en second annonce ses rôles en premier.</li>
                <li>Valable pour toute la série. Pas deux fois le même rôle sur un joueur.</li>
                <li>Si ce n'est pas annoncé à temps, les rôles de la série précédente restent.</li>
              </ul>
            </article>
            <article className="glass rounded-3xl p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-condensed text-2xl uppercase">Exemple officiel</h3>
                <span className="rounded-full border border-acid/40 px-3 py-1 text-sm text-acid">
                  Lecture seule
                </span>
              </div>
              <ul className="mt-4 flex flex-col">
                {rosterExample.map((row) => (
                  <li
                    key={row.player}
                    className="flex items-center justify-between gap-3 border-b border-fog/10 py-3"
                  >
                    <span>{row.player}</span>
                    <span className="font-condensed text-xl text-acid">
                      {row.a} / {row.b}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Chapter>

        <Chapter id="interdit">
          <header className="grid items-end gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Kicker>Au-delà du qualificatif en jeu</Kicker>
              <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Liste noire</h2>
              <p className="mt-4 text-base leading-relaxed text-fog/75">
                Tout ce qui est nommé ici est interdit. Ce qui n'y est pas reste jouable, sauf contenu
                fonctionnel de moins de 21 jours, jokers, et séries ou compétences hors liste blanche.
                Infraction possible : forfait de la carte, du match, ou disqualification.
              </p>
            </div>
            <img
              src="/art/loadout.jpg"
              alt="Nature morte d'armes et d'équipements restreints"
              className="aspect-video w-full rounded-3xl object-cover"
            />
          </header>

          <div className="no-print glass rounded-3xl p-4">
            <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-fog/15 px-3">
              <Search className="size-4 shrink-0 text-acid" aria-hidden="true" />
              <span className="sr-only">Vérifier un objet</span>
              {mounted ? (
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Molotov, Akimbo, Persistance, Grinch…"
                  className="w-full bg-transparent py-3 text-base text-fog outline-none placeholder:text-fog/40"
                />
              ) : (
                <span className="block w-full py-3 text-base text-fog/40">
                  Molotov, Akimbo, Persistance, Grinch…
                </span>
              )}
            </label>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {FACETS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFacet(item.id)}
                  className={
                    facet === item.id
                      ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-fog px-4 text-sm font-semibold text-ink"
                      : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-fog/15 px-4 text-sm text-fog"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            {showHits ? (
              <div className="mt-4">
                {hits.length === 0 ? (
                  <p className="text-sm leading-relaxed text-fog/75">
                    Rien sous ce nom dans les listes. S'il ne s'agit pas d'un contenu de moins de 21
                    jours, il est en principe autorisé. Vérifie quand même le rôle d'arme.
                  </p>
                ) : (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {hits.map((hit) => (
                      <li
                        key={`${hit.group}-${hit.label}`}
                        className="flex items-start justify-between gap-3 rounded-2xl border border-fog/10 px-3 py-3"
                      >
                        <span>
                          <span className="block text-sm text-fog/60">{hit.group}</span>
                          <span className="block">{hit.label}</span>
                        </span>
                        <span
                          className={
                            hit.status === "interdit"
                              ? "font-condensed shrink-0 text-sm tracking-widest text-ember uppercase"
                              : "font-condensed shrink-0 text-sm tracking-widest text-acid uppercase"
                          }
                        >
                          {hit.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weaponGroups.map((group) => (
              <article key={group.title} className="glass-ember rounded-3xl p-4">
                <h3 className="font-condensed text-2xl uppercase">{group.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center justify-between gap-3 text-sm">
                      <span>{item}</span>
                      <Ban className="size-4 shrink-0 text-ember" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="glass-ember rounded-3xl p-4 sm:col-span-2 lg:col-span-3">
              <h3 className="font-condensed text-2xl uppercase">Le reste des armes</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fog/75">
                Une arme absente de ces cinq familles bannies peut être équipée, si elle entre dans
                tes deux rôles et si tu n'y montes aucun accessoire de la liste suivante. Les lanceurs
                cités sont des secondaires : eux sont interdits pour tout le monde.
              </p>
            </article>
          </div>

          <div>
            <h3 className="font-condensed text-3xl uppercase">Accessoires bannis</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {attachmentGroups.map((group) => (
                <article key={group.weapon} className="rounded-3xl border border-ember/30 p-4">
                  <h4 className="font-condensed text-xl text-ember uppercase">{group.weapon}</h4>
                  <ul className="mt-2 flex flex-col gap-1">
                    {group.bans.map((ban) => (
                      <li key={ban} className="text-sm leading-relaxed text-fog/85">
                        {ban}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <GearColumn title="Létales interdites" rows={lethals} icon="bomb" />
            <GearColumn title="Tactiques interdites" rows={tacticals} icon="scroll" />
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {perks.map((row) => (
              <article key={row.color} className="glass rounded-3xl p-4">
                <h3 className="font-condensed text-2xl uppercase">
                  {row.color === "Verte" ? "Atouts verts" : row.color === "Bleue" ? "Atouts bleus" : "Atouts rouges"}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {row.items.map(([name, detail]) => (
                    <li key={name}>
                      <p>{name}</p>
                      <p className="text-sm text-fog/60">{detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="glass-ember rounded-3xl p-5">
            <p className="font-condensed text-sm tracking-widest text-ember uppercase">Jokers</p>
            <p className="font-condensed mt-2 text-4xl uppercase">Tous interdits</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog/75">
              Aucun wildcard. Pas d'exception de confort, pas de « juste pour le perk en plus ».
            </p>
          </article>
        </Chapter>

        <Chapter id="autorise">
          <header className="max-w-3xl">
            <Kicker>Listes blanches</Kicker>
            <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Ce qui passe</h2>
            <p className="mt-4 text-base leading-relaxed text-fog/75">
              Ici, l'inverse de la liste noire : seulement ces compétences et ces trois séries peuvent
              être équipées. Tout le reste de ces deux familles est interdit, même sans l'activer.
            </p>
          </header>
          <div>
            <h3 className="font-condensed flex items-center gap-2 text-3xl uppercase">
              <ShieldCheck className="size-6 text-acid" aria-hidden="true" />
              Compétences opérateur
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {skills.map(([fr, en]) => (
                <li key={en} className="glass-acid rounded-3xl p-4">
                  <p className="font-condensed text-xl leading-tight uppercase">{fr}</p>
                  <p className="mt-2 text-sm text-fog/70">{en}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {streaks.map(([fr, en], index) => (
              <article key={en} className="glass rounded-3xl p-5">
                <p className="extrude font-condensed text-5xl text-acid">0{index + 1}</p>
                <h3 className="font-condensed mt-4 text-3xl uppercase">{fr}</h3>
                <p className="mt-1 text-sm text-fog/70">{en}</p>
              </article>
            ))}
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-fog/75">
            Toute série de points absente de ces trois noms est interdite. Même règle pour toute
            compétence qui n'est pas dans les dix cases au-dessus.
          </p>
        </Chapter>

        <Chapter id="cosmetiques">
          <header className="max-w-3xl">
            <Kicker>Summer · Fall · finales mondiales</Kicker>
            <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Skins et emotes</h2>
            <p className="mt-4 text-base leading-relaxed text-fog/75">
              Les cosmétiques bougent selon l'étape. Pas de délai de 21 jours sur un cosmétique neuf.
              Écoute quand même l'annonce du staff : la liste peut se resserrer d'un stage à l'autre.
            </p>
          </header>
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="glass-ember rounded-3xl p-5">
              <h3 className="font-condensed text-3xl uppercase">Bloc général</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
                <li>Toutes les skins légendaires de létales et de tactiques.</li>
                <li>Toutes les emotes, à n'importe quel moment de la partie.</li>
                <li>Les skins d'opérateur de la colonne d'à côté.</li>
              </ul>
            </article>
            <ul className="grid gap-2 sm:grid-cols-2">
              {skins.map((skin) => (
                <li key={skin} className="glass rounded-2xl px-4 py-3 text-sm">
                  {skin}
                </li>
              ))}
            </ul>
          </div>
        </Chapter>

        <Chapter id="discipline">
          <header className="max-w-3xl">
            <Kicker>À relire avant le host</Kicker>
            <h2 className="font-condensed mt-2 text-5xl leading-none uppercase">Discipline</h2>
            <p className="mt-4 text-base leading-relaxed text-fog/75">
              Quatre règles qui font perdre une carte même avec un loadout « presque » propre.
            </p>
          </header>
          <div className="grid gap-3 lg:grid-cols-2">
            <article className="glass rounded-3xl p-5">
              <Swords className="size-5 text-acid" aria-hidden="true" />
              <h3 className="font-condensed mt-4 text-3xl uppercase">Compétence unique</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog/80">
                Deux joueurs vivants de la même équipe ne portent pas la même compétence, même sans
                l'activer. Si le coéquipier est mort et déjà en train d'en changer, apparaître avec
                son ancienne compétence ne compte pas. On peut changer en cours de carte, en se
                parlant avant. Doublon = forfait de la carte.
              </p>
            </article>
            <article className="glass rounded-3xl p-5">
              <ScrollText className="size-5 text-acid" aria-hidden="true" />
              <h3 className="font-condensed mt-4 text-3xl uppercase">Vingt-et-un jours</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog/80">
                Arme, compétence, atout, utilitaire, série ou accessoire tout juste sorti : interdit
                pendant 21 jours après la dispo mondiale. L'administration peut raccourcir ou allonger.
                Un doute se demande avant le match, pas pendant. Les cosmétiques n'ont pas ce délai.
              </p>
            </article>
            <article className="glass rounded-3xl p-5">
              <Bomb className="size-5 text-acid" aria-hidden="true" />
              <h3 className="font-condensed mt-4 text-3xl uppercase">Preuve</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog/80">
                Enregistre les matchs. Si l'adversaire sort un objet de la liste, la VOD est ce que
                l'admin regardera. Le signalement passe par l'opérateur du tournoi ou
                codmesports@activision.com.
              </p>
            </article>
            <article className="glass rounded-3xl p-5">
              <Smartphone className="size-5 text-acid" aria-hidden="true" />
              <h3 className="font-condensed mt-4 text-3xl uppercase">Matériel</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog/80">
                D'après la FAQ 2026, pas la page settings : écran sous 7,5 pouces pour les splits et
                les finales. Tablette interdite en ligne jusqu'aux finales. Aux finales, on joue sur
                l'appareil fourni. Manette, macro ou accessoire qui envoie des inputs : interdit sans
                accord. Une coque ou un ventilo qui ne se branche pas reste permis.
              </p>
            </article>
          </div>
        </Chapter>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm leading-relaxed text-fog/60 sm:px-8">
        Synthèse du règlement public Call of Duty: Mobile — Esports Settings 2026, plus la FAQ
        matériel. En cas d'écart, la page Activision et l'administration du tournoi font foi.{" "}
        <a
          className="text-acid underline"
          href="https://www.callofduty.com/mobile/esports/esports-settings"
        >
          Règlement settings
        </a>
        {" · "}
        <a className="text-acid underline" href="https://www.callofduty.com/mobile/esports/faq">
          FAQ
        </a>
        . Codex interne du clan Noxius.
      </footer>
    </div>
  );
}

function GearColumn({
  title,
  rows,
  icon,
}: {
  title: string;
  rows: readonly (readonly [string, string])[];
  icon: "bomb" | "scroll";
}) {
  const Icon = icon === "bomb" ? Bomb : ScrollText;
  return (
    <article className="glass rounded-3xl p-4">
      <h3 className="font-condensed flex items-center gap-2 text-2xl uppercase">
        <Icon className="size-5 text-ember" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-3 flex flex-col">
        {rows.map(([fr, en]) => (
          <li key={en} className="flex items-baseline justify-between gap-3 border-b border-fog/10 py-2">
            <span>{fr}</span>
            <span className="text-sm text-fog/55">{en}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
