export type Step = {
  team: 1 | 2;
  action: "ban" | "pick" | "left";
  text: string;
};

export type Phase = {
  mode: string;
  pool: string[];
  steps: Step[];
};

export type FormatBoard = {
  id: string;
  kicker: string;
  title: string;
  lede: string;
  order: string[];
  phases: Phase[];
};

export type Chip = {
  status: "interdit" | "autorise";
  facet: "arme" | "accessoire" | "equipement" | "atout" | "serie" | "cosmetique";
  group: string;
  label: string;
  sub?: string;
};

export type ModeId = "hardpoint" | "snd" | "control";

/** Dossier des visuels. Remplace le fichier en gardant le même nom. */
export const MAPS_FOLDER = "public/maps";

/**
 * Registre des maps. C'est le fichier à éditer si un visuel change de nom.
 * Les images elles-mêmes vivent dans public/maps/.
 */
export type MapDef = {
  id: string;
  name: string;
  mode: ModeId;
  file: string;
  provisional?: boolean;
  line: string;
};


export const modes = [
  {
    id: "hp",
    name: "Point chaud",
    en: "Hardpoint",
    image: "/art/hardpoint.jpg",
    blurb: "Premier à 250 points, ou 600 secondes.",
    settings: [
      ["Limite de score", "250"],
      ["Limite de temps", "600 s"],
      ["Spectateurs", "N/A"],
      ["Mot de passe", "N/A"],
      ["Invitations", "Oui"],
    ],
  },
  {
    id: "ctl",
    name: "Contrôle",
    en: "Control",
    image: "/art/control.jpg",
    blurb: "Premier à 3 manches. Chaque manche dure 90 secondes.",
    settings: [
      ["Limite de score", "3"],
      ["Temps de manche", "90 s"],
      ["Spectateurs", "N/A"],
      ["Mot de passe", "N/A"],
      ["Invitations", "Oui"],
    ],
  },
  {
    id: "snd",
    name: "Recherche et destruction",
    en: "Search & Destroy",
    image: "/art/snd.jpg",
    blurb: "Premier à 9 manches. Prolongation ouverte, plafond à 20.",
    settings: [
      ["Manches à gagner", "9"],
      ["Temps de manche", "120 s"],
      ["Prolongation", "Oui"],
      ["Plafond de prolongation", "20"],
      ["Spectateurs", "N/A"],
      ["Mot de passe", "N/A"],
      ["Invitations", "Oui"],
    ],
  },
] as const;

export const MAPS: MapDef[] = [
  {
    id: "summit",
    name: "Summit",
    mode: "hardpoint",
    file: "summit.jpg",
    line: "Station d'altitude, neige et relais.",
  },
  {
    id: "hacienda",
    name: "Hacienda",
    mode: "hardpoint",
    file: "hacienda.jpg",
    line: "Villa en pierre, cour et fontaine.",
  },
  {
    id: "combine",
    name: "Combine",
    mode: "hardpoint",
    file: "combine.jpg",
    line: "Entrepôt, passerelles et caisses.",
  },
  {
    id: "takeoff",
    name: "Takeoff",
    mode: "hardpoint",
    file: "takeoff.jpg",
    line: "Terminal, passerelles et pistes.",
  },
  {
    id: "arsenal",
    name: "Arsenal",
    mode: "hardpoint",
    file: "arsenal.jpg",
    line: "Complexe militaire fortifié.",
  },
  {
    id: "tunisia",
    name: "Tunisia",
    mode: "snd",
    file: "tunisia.jpg",
    line: "Médina, toits plats et ruelles.",
  },
  {
    id: "firing-range",
    name: "Firing Range",
    mode: "snd",
    file: "firing-range.jpg",
    line: "Pas de tir, bermes et conteneurs.",
  },
  {
    id: "coastal",
    name: "Coastal",
    mode: "snd",
    file: "coastal.jpg",
    line: "Village de falaise et quais.",
  },
  {
    id: "slums",
    name: "Slums",
    mode: "snd",
    file: "slums.jpg",
    line: "Bidonville, escaliers et toits.",
  },
  {
    id: "meltdown",
    name: "Meltdown",
    mode: "snd",
    file: "meltdown.jpg",
    line: "Centrale, tours et tuyauterie.",
  },
  {
    id: "raid",
    name: "Raid",
    mode: "control",
    file: "raid.jpg",
    provisional: true,
    line: "Villa de nuit. Plan provisoire : remplace le fichier.",
  },
  {
    id: "standoff",
    name: "Standoff",
    mode: "control",
    file: "standoff.jpg",
    provisional: true,
    line: "Ville en trois axes. Plan provisoire : remplace le fichier.",
  },
  {
    id: "crossroads-strike",
    name: "Crossroads Strike",
    mode: "control",
    file: "crossroads-strike.jpg",
    provisional: true,
    line: "Carrefour et pont. Plan provisoire : remplace le fichier.",
  },
];

export function mapFilePath(file: string) {
  return `/${MAPS_FOLDER.replace(/^public\//, "")}/${file}`;
}

const hpPool = MAPS.filter(({ mode }) => mode === "hardpoint").map(({ name }) => name);
const sndPool = MAPS.filter(({ mode }) => mode === "snd").map(({ name }) => name);
const ctlPool = MAPS.filter(({ mode }) => mode === "control").map(({ name }) => name);

export const formats: FormatBoard[] = [
  {
    id: "bo5",
    kicker: "Summer Split · Fall Split · finales hors grande finale",
    title: "Best of 5",
    lede: "Ordre de modes fixe. La meilleure tête de série héberge le salon, choisit d'être l'équipe 1 ou l'équipe 2, puis le veto tranche cartes et côtés. Une carte bannie ou choisie ne revient pas.",
    order: [
      "Point chaud",
      "Recherche et destruction",
      "Contrôle",
      "Point chaud",
      "Recherche et destruction",
    ],
    phases: [
      {
        mode: "Point chaud",
        pool: hpPool,
        steps: [
          { team: 1, action: "ban", text: "Bannit une carte du pool Point chaud." },
          { team: 2, action: "ban", text: "Bannit une carte du pool Point chaud." },
          { team: 1, action: "pick", text: "Choisit la carte 1. L'équipe 2 prend le côté." },
          { team: 2, action: "pick", text: "Choisit la carte 4. L'équipe 1 prend le côté." },
        ],
      },
      {
        mode: "Recherche et destruction",
        pool: sndPool,
        steps: [
          { team: 2, action: "ban", text: "Bannit une carte du pool Recherche et destruction." },
          { team: 1, action: "ban", text: "Bannit une carte du pool Recherche et destruction." },
          { team: 2, action: "pick", text: "Choisit la carte 2. L'équipe 1 prend le côté." },
          { team: 1, action: "pick", text: "Choisit la carte 5. L'équipe 2 prend le côté." },
        ],
      },
      {
        mode: "Contrôle",
        pool: ctlPool,
        steps: [
          { team: 1, action: "ban", text: "Bannit une carte du pool Contrôle." },
          { team: 2, action: "ban", text: "Bannit une carte du pool Contrôle." },
          { team: 1, action: "left", text: "La carte restante est la carte 3. L'équipe 1 prend le côté." },
        ],
      },
    ],
  },
  {
    id: "bo3",
    kicker: "Séries courtes",
    title: "Best of 3",
    lede: "Quatre bans sur Point chaud et sur Recherche et destruction : la dernière carte restante se joue. Sur Contrôle, un ban chacun. Aucun choix de carte, seulement le côté de la restante.",
    order: ["Point chaud", "Recherche et destruction", "Contrôle"],
    phases: [
      {
        mode: "Point chaud",
        pool: hpPool,
        steps: [
          { team: 1, action: "ban", text: "Bannit une carte du pool Point chaud." },
          { team: 2, action: "ban", text: "Bannit une carte du pool Point chaud." },
          { team: 1, action: "ban", text: "Bannit une troisième carte Point chaud." },
          { team: 2, action: "ban", text: "Bannit la quatrième carte Point chaud." },
          { team: 1, action: "left", text: "La carte restante est la carte 1. L'équipe 1 prend le côté." },
        ],
      },
      {
        mode: "Recherche et destruction",
        pool: sndPool,
        steps: [
          { team: 2, action: "ban", text: "Bannit une carte Recherche et destruction." },
          { team: 1, action: "ban", text: "Bannit une carte Recherche et destruction." },
          { team: 2, action: "ban", text: "Bannit une troisième carte Recherche et destruction." },
          { team: 1, action: "ban", text: "Bannit la quatrième carte Recherche et destruction." },
          { team: 2, action: "left", text: "La carte restante est la carte 2. L'équipe 2 prend le côté." },
        ],
      },
      {
        mode: "Contrôle",
        pool: ctlPool,
        steps: [
          { team: 1, action: "ban", text: "Bannit une carte du pool Contrôle." },
          { team: 2, action: "ban", text: "Bannit une carte du pool Contrôle." },
          { team: 1, action: "left", text: "La carte restante est la carte 3. L'équipe 1 prend le côté." },
        ],
      },
    ],
  },
];

export const finals = [
  {
    title: "Best of 7 classique",
    order: "1 Point chaud · 2 R&D · 3 Contrôle · 4 Point chaud · 5 R&D · 6 Contrôle · 7 R&D",
    lines: [
      "Point chaud — équipe 1 ban, équipe 2 ban, équipe 1 prend la carte 1 (côté équipe 2), équipe 2 prend la carte 4 (côté équipe 1).",
      "R&D — équipe 2 ban, équipe 1 ban, équipe 2 prend la carte 2 (côté équipe 1), équipe 1 prend la carte 5 (côté équipe 2). La restante est la carte 7, côté équipe 2.",
      "Contrôle — pas de ban. Équipe 1 prend la carte 3 (côté équipe 2). Équipe 2 prend la carte 6 (côté équipe 1).",
    ],
  },
  {
    title: "Grande finale, avantage d'une carte",
    order: "L'équipe issue de la finale des gagnants commence 1-0. Veto des cartes 1 à 6.",
    lines: [
      "Point chaud — mêmes bans et picks que le Best of 5 : carte 1 pour l'équipe 1, carte 4 pour l'équipe 2.",
      "R&D — équipe 2 ban, équipe 1 ban, équipe 2 prend la carte 2 (côté équipe 1), équipe 1 prend la carte 6 (côté équipe 2).",
      "Contrôle — pas de ban. Équipe 1 prend la carte 3 (côté équipe 2). Équipe 2 prend la carte 5 (côté équipe 1).",
    ],
  },
] as const;

export const roleTokens = [
  { short: "FA", name: "Fusil d'assaut", en: "Assault Rifle", count: 3 },
  { short: "PM", name: "Mitraillette", en: "SMG", count: 3 },
  { short: "FM", name: "Fusil-mitrailleur", en: "LMG", count: 1 },
  { short: "FP", name: "Fusil à pompe", en: "Shotgun", count: 1 },
  { short: "MK", name: "Marksman", en: "Marksman Rifle", count: 1 },
  { short: "SN", name: "Sniper", en: "Sniper", count: 1 },
] as const;

export const rosterExample = [
  { player: "Joueur 1", a: "FA", b: "PM" },
  { player: "Joueur 2", a: "PM", b: "FP" },
  { player: "Joueur 3", a: "FA", b: "FM" },
  { player: "Joueur 4", a: "FA", b: "SN" },
  { player: "Joueur 5", a: "PM", b: "MK" },
] as const;

export const weaponGroups = [
  {
    title: "Fusils à pompe",
    items: ["Argus", "R9-0"],
  },
  {
    title: "Fusils de précision",
    items: ["M21 EBR", "NA-45", "SO14", "SVD", "XPR"],
  },
  {
    title: "Mitraillettes",
    items: ["FSS Hurricane", "Static-HV", "Sten"],
  },
  {
    title: "Lanceurs",
    items: ["D13 Sector", "FHJ-18", "SMRS", "Thumper"],
  },
  {
    title: "Pistolets",
    items: [".50 GS", "MW11", "Shorty"],
  },
] as const;

export const attachmentGroups = [
  {
    weapon: "Toutes les armes",
    bans: [
      "Akimbo · atout d'arme",
      "Disabled · atout d'arme",
      "Munitions thermite · Thermite",
      "Souffle du dragon · Dragon's Breath",
      "Munitions explosives · Explosive",
      "Munitions incendiaires · Incendiary",
    ],
  },
  { weapon: "Tous les fusils à pompe", bans: ["Munitions slug · Slug Ammo"] },
  {
    weapon: "3-Line Rifle",
    bans: ["Canon EMPRESS 514MM F01", "Bipied · Bipod", "Crosse KOVALEVSKAYA S01"],
  },
  {
    weapon: ".50 GS",
    bans: ["Détente légère · Lightweight Trigger", "Détente match · Match Grade Trigger"],
  },
  { weapon: "AS VAL", bans: ["Chargeur 15 coups · 15 Round FMG Mag"] },
  { weapon: "BP50 · BP-50", bans: ["Leroy 438mm", "Recoil Booster"] },
  { weapon: "CR-56 AMAX", bans: ["Munitions M67 · M67 Ammo"] },
  { weapon: "Cronen Squall", bans: ["Tir semi-auto · Semi Automatic Fire"] },
  {
    weapon: "Arbalète · Crossbow",
    bans: ["Carreaux thermite, gaz, collante · Thermite / Gas / Sticky Bolts"],
  },
  { weapon: "CX-9", bans: ["9mm Hollow Point"] },
  { weapon: "DL Q33 · DLQ", bans: ["Munitions commotion · Concussion Ammo"] },
  { weapon: "DR-H", bans: ["Chargeur OTM · OTM Mag"] },
  { weapon: "Hades", bans: ["Heartseeker"] },
  { weapon: "HS0405", bans: ["Thunder Rounds"] },
  { weapon: "HVK-30 · HVK", bans: ["Gros calibre · Large Caliber Mag"] },
  { weapon: "LAG 53", bans: ['Canon OSW Para 13,0"'] },
  { weapon: "M4", bans: ["Lanceur sous canon · Underbarrel Launcher"] },
  { weapon: "Machine Pistol", bans: ["Canon court VDD 35MM"] },
  {
    weapon: "MG42",
    bans: ["KRAUSNICK 355MM Rapid", "Tambours 6.5 Arisaka 125", "Recoil Booster"],
  },
  { weapon: "Oden", bans: ["Canon OWC Ranger", "Canon OWC Marksman"] },
  { weapon: "QQ9", bans: ["10mm 30 coups · 10MM 30 Round Reload"] },
  { weapon: "RAM-7", bans: ["Canon FORGE TAC Eclipse"] },
  { weapon: "RPD", bans: ["Munitions infinies · Infinite Ammo"] },
  {
    weapon: "SKS",
    bans: ["Poignée tactique A · Tactical Foregrip A", "Bande granitée · Granulated Grip Tape"],
  },
  { weapon: "Type 19", bans: ["Sniper haute précision · Hi-Accuracy Sniper Ammo"] },
  {
    weapon: "Type 63",
    bans: [
      "Poignée Airborne Elastic Wrap",
      "Bande ferme · Firm Grip Tape",
      'Canon Rapid Fire 16,4"',
      'Canon titane 16,4" · Titanium',
      'Canon Strike Team 18,3"',
    ],
  },
  {
    weapon: "Tundra",
    bans: ['Canon Hammer Forged 26,5"', 'Canon Tiger Team 28,2"'],
  },
  {
    weapon: "USS 9",
    bans: [
      "Canon Carbine Pro",
      'Canon Factory Carbine 16,6"',
      'Canon First Responder 13,1"',
      "Chargeurs .41 AE 32 coups",
    ],
  },
] as const;

export const lethals = [
  ["C4", "C4"],
  ["Grenade à sous-munitions", "Cluster Grenade"],
  ["Grenade de contact", "Contact Grenade"],
  ["Charge perforante", "Drill Charge"],
  ["Cocktail Molotov", "Molotov Cocktail"],
  ["Thermite", "Thermite"],
  ["Mine déclencheur", "Trip Mine"],
] as const;

export const tacticals = [
  ["Bombe cryo", "Cryo Bomb"],
  ["Grenade leurre", "Decoy Grenade"],
  ["Grenade extinctrice", "Douser Grenade"],
  ["Grenade d'écho", "Echo Grenade"],
  ["Charge flash", "Flash Charge"],
  ["Drone flash", "Flash Drone"],
  ["Grenades à gaz", "Gas Grenades"],
  ["Capteur cardiaque", "Heartbeat Sensor"],
  ["Leurre gonflable", "Inflatable Decoy"],
  ["Stimulant", "Stim Shot"],
  ["Balle de tempête", "Storm Ball"],
  ["Capteur de piège", "Trip Sensor"],
] as const;

export const perks = [
  {
    color: "Rouge",
    items: [
      ["Martyre", "Martyrdom — grenade à la mort"],
      ["Overclock", "Recharge plus vite la compétence"],
      ["Pinpoint", "Surlignage de la cible touchée"],
      ["Réapprovisionnement", "Restock — l'équipement revient"],
      ["Stabilisateurs de glissade", "Slide Stabilizers"],
      ["Tacticien", "Tactician — un tactique de plus"],
    ],
  },
  {
    color: "Verte",
    items: [
      ["Soin rapide", "Quick Fix"],
      ["Reconnaissance", "Recon"],
      ["Pisteur", "Tracker"],
      ["Vautour", "Vulture"],
    ],
  },
  {
    color: "Bleue",
    items: [
      ["Alerte", "Alert"],
      ["Assassin", "Assassin"],
      ["Ingénieur", "Engineer"],
      ["Ligne dure", "Hardline"],
      ["Haute alerte", "High Alert"],
      ["Persistance", "Persistence"],
      ["Soutien d'unité", "Unit Support"],
      ["Expert en démolition", "Demo Expert"],
      ["Shrapnel", "Shrapnel"],
    ],
  },
] as const;

export const skills = [
  ["Annihilateur", "Annihilator"],
  ["Griffe", "Claw"],
  ["Machine de mort", "Death Machine"],
  ["Égaliseur", "Equalizer"],
  ["Pointes gravitationnelles", "Gravity Spikes"],
  ["Canon vortex gravitationnel", "Gravity Vortex Gun"],
  ["Purificateur", "Purifier"],
  ["Épervier", "Sparrow"],
  ["Tempête", "Tempest"],
  ["Machine de guerre", "War Machine"],
] as const;

export const streaks = [
  ["Drone chasseur-tueur", "Hunter Killer Drone"],
  ["Missile prédateur", "Predator Missile"],
  ["IEM", "EMP"],
] as const;

export const skins = [
  "Cosmic Silverback",
  "Death Angel Alice — Trench",
  "Death Angel Alice — Shrouded Maiden",
  "Florence — Night Terror",
  "Golem — Everglade",
  "Grinch — Night Fang",
  "Grinch — Wreath Havoc",
  "Grinch — The Lionheart",
  "Roze — Murk",
  "Roze — Rook",
  "Zombie — Wicht Warden",
] as const;

function chip(
  status: Chip["status"],
  facet: Chip["facet"],
  group: string,
  label: string,
  sub?: string,
): Chip {
  return { status, facet, group, label, sub };
}

export const chips: Chip[] = [
  ...weaponGroups.flatMap((group) =>
    group.items.map((item) => chip("interdit", "arme", group.title, item)),
  ),
  ...attachmentGroups.flatMap((group) =>
    group.bans.map((ban) => chip("interdit", "accessoire", group.weapon, ban, group.weapon)),
  ),
  ...lethals.map(([fr, en]) => chip("interdit", "equipement", "Létales", fr, en)),
  ...tacticals.map(([fr, en]) => chip("interdit", "equipement", "Tactiques", fr, en)),
  ...perks.flatMap((row) =>
    row.items.map(([fr, en]) => chip("interdit", "atout", `Atout ${row.color.toLowerCase()}`, fr, en)),
  ),
  chip("interdit", "atout", "Jokers", "Tous les jokers", "Wildcards — aucun n'est autorisé"),
  ...skills.map(([fr, en]) => chip("autorise", "serie", "Compétences autorisées", fr, en)),
  ...streaks.map(([fr, en]) => chip("autorise", "serie", "Séries autorisées", fr, en)),
  ...skins.map((name) => chip("interdit", "cosmetique", "Skins opérateur", name)),
  chip("interdit", "cosmetique", "Équipement", "Skins légendaires létales et tactiques", "Toutes"),
  chip("interdit", "cosmetique", "Emotes", "Toutes les emotes", "Pendant la partie"),
];

export function fold(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
