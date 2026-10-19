import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Download, d as Ban, i as ShieldCheck, l as Crosshair, n as Swords, o as ScrollText, r as Smartphone, s as Flag, u as Bomb } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CamPfmm-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var modes = [
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
			["Invitations", "Oui"]
		]
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
			["Invitations", "Oui"]
		]
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
			["Invitations", "Oui"]
		]
	}
];
var pools = [
	{
		mode: "Point chaud",
		en: "Hardpoint",
		image: "/art/hardpoint.jpg",
		maps: [
			{
				name: "Summit",
				note: "Complexe enneigé, volume intérieur, rebords à ne pas ignorer."
			},
			{
				name: "Hacienda",
				note: "Cour et toits. Les angles courts décident les rotations."
			},
			{
				name: "Combine",
				note: "Industriel, lignes droites, peu de place pour une mauvaise poussée."
			},
			{
				name: "Takeoff",
				note: "Terminal et carlingue. On coupe les escalators, pas la carte."
			},
			{
				name: "Arsenal",
				note: "Base d'armement. Les halls longs punissent le sprint nu."
			}
		]
	},
	{
		mode: "Recherche et destruction",
		en: "Search & Destroy",
		image: "/art/snd.jpg",
		maps: [
			{
				name: "Tunisia",
				note: "Rues larges, sites éloignés. L'info vaut une vie."
			},
			{
				name: "Firing Range",
				note: "Base d'entraînement. Milieu contesté, retakes courts."
			},
			{
				name: "Coastal",
				note: "Falaise et niveaux. Le son porte, les fumées aussi."
			},
			{
				name: "Slums",
				note: "Ruelles et toits. Le close range y est honnête."
			},
			{
				name: "Meltdown",
				note: "Centrale. Les couloirs de réacteur cassent les executes tardifs."
			}
		]
	},
	{
		mode: "Contrôle",
		en: "Control",
		image: "/art/control.jpg",
		maps: [
			{
				name: "Raid",
				note: "Villa. Les deux zones se jouent souvent en split."
			},
			{
				name: "Standoff",
				note: "Ville basse. La mid ouvre les deux points."
			},
			{
				name: "Crossroads Strike",
				note: "Variante strike du carrefour. Moins de carte, plus de timing."
			}
		]
	}
];
var hpPool = [
	"Summit",
	"Hacienda",
	"Combine",
	"Takeoff",
	"Arsenal"
];
var sndPool = [
	"Tunisia",
	"Firing Range",
	"Coastal",
	"Slums",
	"Meltdown"
];
var ctlPool = [
	"Raid",
	"Standoff",
	"Crossroads Strike"
];
var formats = [{
	id: "bo5",
	kicker: "Summer Split · Fall Split · finales hors grande finale",
	title: "Best of 5",
	lede: "Ordre de modes fixe. La meilleure tête de série héberge le salon, choisit d'être l'équipe 1 ou l'équipe 2, puis le veto tranche cartes et côtés. Une carte bannie ou choisie ne revient pas.",
	order: [
		"Point chaud",
		"Recherche et destruction",
		"Contrôle",
		"Point chaud",
		"Recherche et destruction"
	],
	phases: [
		{
			mode: "Point chaud",
			pool: hpPool,
			steps: [
				{
					team: 1,
					action: "ban",
					text: "Bannit une carte du pool Point chaud."
				},
				{
					team: 2,
					action: "ban",
					text: "Bannit une carte du pool Point chaud."
				},
				{
					team: 1,
					action: "pick",
					text: "Choisit la carte 1. L'équipe 2 prend le côté."
				},
				{
					team: 2,
					action: "pick",
					text: "Choisit la carte 4. L'équipe 1 prend le côté."
				}
			]
		},
		{
			mode: "Recherche et destruction",
			pool: sndPool,
			steps: [
				{
					team: 2,
					action: "ban",
					text: "Bannit une carte du pool Recherche et destruction."
				},
				{
					team: 1,
					action: "ban",
					text: "Bannit une carte du pool Recherche et destruction."
				},
				{
					team: 2,
					action: "pick",
					text: "Choisit la carte 2. L'équipe 1 prend le côté."
				},
				{
					team: 1,
					action: "pick",
					text: "Choisit la carte 5. L'équipe 2 prend le côté."
				}
			]
		},
		{
			mode: "Contrôle",
			pool: ctlPool,
			steps: [
				{
					team: 1,
					action: "ban",
					text: "Bannit une carte du pool Contrôle."
				},
				{
					team: 2,
					action: "ban",
					text: "Bannit une carte du pool Contrôle."
				},
				{
					team: 1,
					action: "left",
					text: "La carte restante est la carte 3. L'équipe 1 prend le côté."
				}
			]
		}
	]
}, {
	id: "bo3",
	kicker: "Séries courtes",
	title: "Best of 3",
	lede: "Quatre bans sur Point chaud et sur Recherche et destruction : la dernière carte restante se joue. Sur Contrôle, un ban chacun. Aucun choix de carte, seulement le côté de la restante.",
	order: [
		"Point chaud",
		"Recherche et destruction",
		"Contrôle"
	],
	phases: [
		{
			mode: "Point chaud",
			pool: hpPool,
			steps: [
				{
					team: 1,
					action: "ban",
					text: "Bannit une carte du pool Point chaud."
				},
				{
					team: 2,
					action: "ban",
					text: "Bannit une carte du pool Point chaud."
				},
				{
					team: 1,
					action: "ban",
					text: "Bannit une troisième carte Point chaud."
				},
				{
					team: 2,
					action: "ban",
					text: "Bannit la quatrième carte Point chaud."
				},
				{
					team: 1,
					action: "left",
					text: "La carte restante est la carte 1. L'équipe 1 prend le côté."
				}
			]
		},
		{
			mode: "Recherche et destruction",
			pool: sndPool,
			steps: [
				{
					team: 2,
					action: "ban",
					text: "Bannit une carte Recherche et destruction."
				},
				{
					team: 1,
					action: "ban",
					text: "Bannit une carte Recherche et destruction."
				},
				{
					team: 2,
					action: "ban",
					text: "Bannit une troisième carte Recherche et destruction."
				},
				{
					team: 1,
					action: "ban",
					text: "Bannit la quatrième carte Recherche et destruction."
				},
				{
					team: 2,
					action: "left",
					text: "La carte restante est la carte 2. L'équipe 2 prend le côté."
				}
			]
		},
		{
			mode: "Contrôle",
			pool: ctlPool,
			steps: [
				{
					team: 1,
					action: "ban",
					text: "Bannit une carte du pool Contrôle."
				},
				{
					team: 2,
					action: "ban",
					text: "Bannit une carte du pool Contrôle."
				},
				{
					team: 1,
					action: "left",
					text: "La carte restante est la carte 3. L'équipe 1 prend le côté."
				}
			]
		}
	]
}];
var finals = [{
	title: "Best of 7 classique",
	order: "1 Point chaud · 2 R&D · 3 Contrôle · 4 Point chaud · 5 R&D · 6 Contrôle · 7 R&D",
	lines: [
		"Point chaud — équipe 1 ban, équipe 2 ban, équipe 1 prend la carte 1 (côté équipe 2), équipe 2 prend la carte 4 (côté équipe 1).",
		"R&D — équipe 2 ban, équipe 1 ban, équipe 2 prend la carte 2 (côté équipe 1), équipe 1 prend la carte 5 (côté équipe 2). La restante est la carte 7, côté équipe 2.",
		"Contrôle — pas de ban. Équipe 1 prend la carte 3 (côté équipe 2). Équipe 2 prend la carte 6 (côté équipe 1)."
	]
}, {
	title: "Grande finale, avantage d'une carte",
	order: "L'équipe issue de la finale des gagnants commence 1-0. Veto des cartes 1 à 6.",
	lines: [
		"Point chaud — mêmes bans et picks que le Best of 5 : carte 1 pour l'équipe 1, carte 4 pour l'équipe 2.",
		"R&D — équipe 2 ban, équipe 1 ban, équipe 2 prend la carte 2 (côté équipe 1), équipe 1 prend la carte 6 (côté équipe 2).",
		"Contrôle — pas de ban. Équipe 1 prend la carte 3 (côté équipe 2). Équipe 2 prend la carte 5 (côté équipe 1)."
	]
}];
var roleTokens = [
	{
		short: "FA",
		name: "Fusil d'assaut",
		en: "Assault Rifle",
		count: 3
	},
	{
		short: "PM",
		name: "Mitraillette",
		en: "SMG",
		count: 3
	},
	{
		short: "FM",
		name: "Fusil-mitrailleur",
		en: "LMG",
		count: 1
	},
	{
		short: "FP",
		name: "Fusil à pompe",
		en: "Shotgun",
		count: 1
	},
	{
		short: "MK",
		name: "Marksman",
		en: "Marksman Rifle",
		count: 1
	},
	{
		short: "SN",
		name: "Sniper",
		en: "Sniper",
		count: 1
	}
];
var rosterExample = [
	{
		player: "Joueur 1",
		a: "FA",
		b: "PM"
	},
	{
		player: "Joueur 2",
		a: "PM",
		b: "FP"
	},
	{
		player: "Joueur 3",
		a: "FA",
		b: "FM"
	},
	{
		player: "Joueur 4",
		a: "FA",
		b: "SN"
	},
	{
		player: "Joueur 5",
		a: "PM",
		b: "MK"
	}
];
var weaponGroups = [
	{
		title: "Fusils à pompe",
		items: ["Argus", "R9-0"]
	},
	{
		title: "Fusils de précision",
		items: [
			"M21 EBR",
			"NA-45",
			"SO14",
			"SVD",
			"XPR"
		]
	},
	{
		title: "Mitraillettes",
		items: [
			"FSS Hurricane",
			"Static-HV",
			"Sten"
		]
	},
	{
		title: "Lanceurs",
		items: [
			"D13 Sector",
			"FHJ-18",
			"SMRS",
			"Thumper"
		]
	},
	{
		title: "Pistolets",
		items: [
			".50 GS",
			"MW11",
			"Shorty"
		]
	}
];
var attachmentGroups = [
	{
		weapon: "Toutes les armes",
		bans: [
			"Akimbo · atout d'arme",
			"Disabled · atout d'arme",
			"Munitions thermite · Thermite",
			"Souffle du dragon · Dragon's Breath",
			"Munitions explosives · Explosive",
			"Munitions incendiaires · Incendiary"
		]
	},
	{
		weapon: "Tous les fusils à pompe",
		bans: ["Munitions slug · Slug Ammo"]
	},
	{
		weapon: "3-Line Rifle",
		bans: [
			"Canon EMPRESS 514MM F01",
			"Bipied · Bipod",
			"Crosse KOVALEVSKAYA S01"
		]
	},
	{
		weapon: ".50 GS",
		bans: ["Détente légère · Lightweight Trigger", "Détente match · Match Grade Trigger"]
	},
	{
		weapon: "AS VAL",
		bans: ["Chargeur 15 coups · 15 Round FMG Mag"]
	},
	{
		weapon: "BP50 · BP-50",
		bans: ["Leroy 438mm", "Recoil Booster"]
	},
	{
		weapon: "CR-56 AMAX",
		bans: ["Munitions M67 · M67 Ammo"]
	},
	{
		weapon: "Cronen Squall",
		bans: ["Tir semi-auto · Semi Automatic Fire"]
	},
	{
		weapon: "Arbalète · Crossbow",
		bans: ["Carreaux thermite, gaz, collante · Thermite / Gas / Sticky Bolts"]
	},
	{
		weapon: "CX-9",
		bans: ["9mm Hollow Point"]
	},
	{
		weapon: "DL Q33 · DLQ",
		bans: ["Munitions commotion · Concussion Ammo"]
	},
	{
		weapon: "DR-H",
		bans: ["Chargeur OTM · OTM Mag"]
	},
	{
		weapon: "Hades",
		bans: ["Heartseeker"]
	},
	{
		weapon: "HS0405",
		bans: ["Thunder Rounds"]
	},
	{
		weapon: "HVK-30 · HVK",
		bans: ["Gros calibre · Large Caliber Mag"]
	},
	{
		weapon: "LAG 53",
		bans: ["Canon OSW Para 13,0\""]
	},
	{
		weapon: "M4",
		bans: ["Lanceur sous canon · Underbarrel Launcher"]
	},
	{
		weapon: "Machine Pistol",
		bans: ["Canon court VDD 35MM"]
	},
	{
		weapon: "MG42",
		bans: [
			"KRAUSNICK 355MM Rapid",
			"Tambours 6.5 Arisaka 125",
			"Recoil Booster"
		]
	},
	{
		weapon: "Oden",
		bans: ["Canon OWC Ranger", "Canon OWC Marksman"]
	},
	{
		weapon: "QQ9",
		bans: ["10mm 30 coups · 10MM 30 Round Reload"]
	},
	{
		weapon: "RAM-7",
		bans: ["Canon FORGE TAC Eclipse"]
	},
	{
		weapon: "RPD",
		bans: ["Munitions infinies · Infinite Ammo"]
	},
	{
		weapon: "SKS",
		bans: ["Poignée tactique A · Tactical Foregrip A", "Bande granitée · Granulated Grip Tape"]
	},
	{
		weapon: "Type 19",
		bans: ["Sniper haute précision · Hi-Accuracy Sniper Ammo"]
	},
	{
		weapon: "Type 63",
		bans: [
			"Poignée Airborne Elastic Wrap",
			"Bande ferme · Firm Grip Tape",
			"Canon Rapid Fire 16,4\"",
			"Canon titane 16,4\" · Titanium",
			"Canon Strike Team 18,3\""
		]
	},
	{
		weapon: "Tundra",
		bans: ["Canon Hammer Forged 26,5\"", "Canon Tiger Team 28,2\""]
	},
	{
		weapon: "USS 9",
		bans: [
			"Canon Carbine Pro",
			"Canon Factory Carbine 16,6\"",
			"Canon First Responder 13,1\"",
			"Chargeurs .41 AE 32 coups"
		]
	}
];
var lethals = [
	["C4", "C4"],
	["Grenade à sous-munitions", "Cluster Grenade"],
	["Grenade de contact", "Contact Grenade"],
	["Charge perforante", "Drill Charge"],
	["Cocktail Molotov", "Molotov Cocktail"],
	["Thermite", "Thermite"],
	["Mine déclencheur", "Trip Mine"]
];
var tacticals = [
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
	["Capteur de piège", "Trip Sensor"]
];
var perks = [
	{
		color: "Rouge",
		items: [
			["Martyre", "Martyrdom — grenade à la mort"],
			["Overclock", "Recharge plus vite la compétence"],
			["Pinpoint", "Surlignage de la cible touchée"],
			["Réapprovisionnement", "Restock — l'équipement revient"],
			["Stabilisateurs de glissade", "Slide Stabilizers"],
			["Tacticien", "Tactician — un tactique de plus"]
		]
	},
	{
		color: "Verte",
		items: [
			["Soin rapide", "Quick Fix"],
			["Reconnaissance", "Recon"],
			["Pisteur", "Tracker"],
			["Vautour", "Vulture"]
		]
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
			["Shrapnel", "Shrapnel"]
		]
	}
];
var skills = [
	["Annihilateur", "Annihilator"],
	["Griffe", "Claw"],
	["Machine de mort", "Death Machine"],
	["Égaliseur", "Equalizer"],
	["Pointes gravitationnelles", "Gravity Spikes"],
	["Canon vortex gravitationnel", "Gravity Vortex Gun"],
	["Purificateur", "Purifier"],
	["Épervier", "Sparrow"],
	["Tempête", "Tempest"],
	["Machine de guerre", "War Machine"]
];
var streaks = [
	["Drone chasseur-tueur", "Hunter Killer Drone"],
	["Missile prédateur", "Predator Missile"],
	["IEM", "EMP"]
];
var skins = [
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
	"Zombie — Wicht Warden"
];
function chip(status, facet, group, label, sub) {
	return {
		status,
		facet,
		group,
		label,
		sub
	};
}
var chips = [
	...weaponGroups.flatMap((group) => group.items.map((item) => chip("interdit", "arme", group.title, item))),
	...attachmentGroups.flatMap((group) => group.bans.map((ban) => chip("interdit", "accessoire", group.weapon, ban, group.weapon))),
	...lethals.map(([fr, en]) => chip("interdit", "equipement", "Létales", fr, en)),
	...tacticals.map(([fr, en]) => chip("interdit", "equipement", "Tactiques", fr, en)),
	...perks.flatMap((row) => row.items.map(([fr, en]) => chip("interdit", "atout", `Atout ${row.color.toLowerCase()}`, fr, en))),
	chip("interdit", "atout", "Jokers", "Tous les jokers", "Wildcards — aucun n'est autorisé"),
	...skills.map(([fr, en]) => chip("autorise", "serie", "Compétences autorisées", fr, en)),
	...streaks.map(([fr, en]) => chip("autorise", "serie", "Séries autorisées", fr, en)),
	...skins.map((name) => chip("interdit", "cosmetique", "Skins opérateur", name)),
	chip("interdit", "cosmetique", "Équipement", "Skins légendaires létales et tactiques", "Toutes"),
	chip("interdit", "cosmetique", "Emotes", "Toutes les emotes", "Pendant la partie")
];
function fold(value) {
	return value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
var NAV = [
	{
		id: "accueil",
		label: "Accueil"
	},
	{
		id: "reglages",
		label: "Réglages"
	},
	{
		id: "cartes",
		label: "Cartes"
	},
	{
		id: "formats",
		label: "Formats"
	},
	{
		id: "roles",
		label: "Rôles"
	},
	{
		id: "interdit",
		label: "Interdit"
	},
	{
		id: "autorise",
		label: "Autorisé"
	},
	{
		id: "cosmetiques",
		label: "Cosmétiques"
	},
	{
		id: "discipline",
		label: "Discipline"
	}
];
var FACETS = [
	{
		id: "tous",
		label: "Tout"
	},
	{
		id: "arme",
		label: "Armes"
	},
	{
		id: "accessoire",
		label: "Accessoires"
	},
	{
		id: "equipement",
		label: "Équipement"
	},
	{
		id: "atout",
		label: "Atouts"
	},
	{
		id: "serie",
		label: "Séries"
	},
	{
		id: "cosmetique",
		label: "Skins"
	}
];
function Chapter({ id, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "chapter scroll-mt-48 px-4 py-14 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8",
			children
		})
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-condensed text-sm tracking-widest text-acid uppercase",
		children
	});
}
function actionLabel(action) {
	if (action === "ban") return "Ban";
	if (action === "pick") return "Choix";
	return "Reste";
}
function Board({ board }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: board.kicker }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-condensed mt-2 text-5xl leading-none text-fog uppercase sm:text-6xl",
						children: board.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-fog/75",
						children: board.lede
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex gap-3 overflow-x-auto pb-1",
				children: board.order.map((mode, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "token glass flex w-36 shrink-0 flex-col justify-between rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "extrude font-condensed text-4xl text-acid",
						children: ["0", index + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-6 font-condensed text-lg leading-tight text-fog uppercase",
						children: mode
					})]
				}, `${board.id}-${mode}-${index}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: board.phases.map((phase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex flex-col gap-4 rounded-3xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-condensed text-2xl text-fog uppercase",
						children: phase.mode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fog/70",
						children: phase.pool.join(" · ")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex flex-col gap-2",
						children: phase.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: step.action === "ban" ? "rounded-2xl border border-ember/40 bg-ember/10 p-3" : "rounded-2xl border border-acid/30 bg-acid/10 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: step.team === 1 ? "font-condensed text-sm tracking-widest text-acid uppercase" : "font-condensed text-sm tracking-widest text-fog uppercase",
									children: ["Équipe ", step.team]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-condensed text-sm text-fog/70 uppercase",
									children: actionLabel(step.action)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-fog",
								children: step.text
							})]
						}, `${phase.mode}-${index}`))
					})]
				}, phase.mode))
			})
		]
	});
}
function Handbook() {
	const [active, setActive] = (0, import_react.useState)("accueil");
	const [query, setQuery] = (0, import_react.useState)("");
	const [facet, setFacet] = (0, import_react.useState)("tous");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const nodes = NAV.map((item) => document.getElementById(item.id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-35% 0px -45% 0px",
			threshold: [.15, .4]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	const hits = (0, import_react.useMemo)(() => {
		const needle = fold(query.trim());
		if (needle.length < 2 && facet === "tous") return [];
		return chips.filter((item) => {
			if (!(facet === "tous" || item.facet === facet)) return false;
			if (needle.length < 2) return true;
			return fold(`${item.label} ${item.sub ?? ""} ${item.group}`).includes(needle);
		});
	}, [facet, query]);
	const showHits = query.trim().length >= 2 || facet !== "tous";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stage min-h-screen text-fog",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-30 border-b border-fog/10 bg-ink/80 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#accueil",
						className: "font-condensed text-xl tracking-widest text-fog uppercase",
						children: "Noxius"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => window.print(),
						className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-acid px-4 text-sm font-semibold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Guide PDF"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-3",
					"aria-label": "Sections",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: active === item.id ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-acid px-4 text-sm font-semibold text-ink" : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-fog/15 px-4 text-sm text-fog",
						children: item.label
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "accueil",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-frame relative overflow-hidden rounded-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/art/hero.jpg",
								alt: "Bunker du clan Noxius, cinq opérateurs sous une lumière acide",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col gap-5 p-5 sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Clan · Codex 2026" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "extrude font-condensed max-w-3xl text-6xl leading-none text-fog uppercase sm:text-8xl",
										children: "Noxius"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-xl text-lg leading-relaxed text-fog",
										children: "Le guide de révision du clan. Settings, cartes, Best of 5, Best of 3, rôles et tout ce qui est interdit — en français, sans simulateur."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2 sm:max-w-lg",
										children: [
											["3", "modes"],
											["13", "cartes"],
											["10", "jetons"]
										].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "glass rounded-2xl px-3 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "extrude font-condensed text-3xl text-acid",
												children: value
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-fog/80",
												children: label
											})]
										}, label))
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							[
								"Réglages",
								"Les chiffres exacts du salon.",
								"#reglages",
								Crosshair
							],
							[
								"Formats",
								"L'ordre des cartes, affiché.",
								"#formats",
								Flag
							],
							[
								"Rôles",
								"Le pool, pas un formulaire.",
								"#roles",
								Swords
							],
							[
								"Interdit",
								"Armes, stuff, atouts, skins.",
								"#interdit",
								Ban
							]
						].map(([title, text, href, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: String(href),
							className: "glass rounded-3xl p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 text-acid",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-condensed mt-4 text-2xl uppercase",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-fog/75",
									children: text
								})
							]
						}, String(title)))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "reglages",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Salon personnalisé" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-condensed mt-2 text-5xl leading-none uppercase",
								children: "Réglages de partie"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-fog/75",
								children: "Le chef qui ouvre le salon pose ces valeurs, mode par mode. Ce codex ne refait pas le tutoriel d'invitation : seulement les chiffres qui rendent la partie officielle."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: modes.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass flex flex-col overflow-hidden rounded-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mode.image,
								alt: "",
								className: "aspect-video w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-4 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-acid",
										children: mode.en
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed text-3xl uppercase",
										children: mode.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-fog/75",
										children: mode.blurb
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-auto",
									children: mode.settings.map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-3 border-b border-fog/10 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm text-fog/70",
											children: key
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-condensed text-2xl text-acid",
											children: value
										})]
									}, key))
								})]
							})]
						}, mode.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "cartes",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Esports Map Pool" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-condensed mt-2 text-5xl leading-none uppercase",
								children: "Treize cartes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl text-base leading-relaxed text-fog/75",
								children: "Pool 2026, du Stage 2 jusqu'aux finales mondiales. Chaque année : 7 cartes restent, 3 changent de mode, 3 nouvelles entrent. L'administration peut bouger le pool seulement dans un cas exceptionnel. Les noms ci-dessous sont ceux du règlement."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/art/maps.jpg",
							alt: "Table de guerre avec les maquettes des terrains",
							className: "aspect-video w-full rounded-3xl object-cover"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: pools.map((pool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass overflow-hidden rounded-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: pool.image,
								alt: "",
								className: "h-36 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-acid",
									children: pool.en
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-condensed text-3xl uppercase",
									children: pool.mode
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-2",
									children: pool.maps.map((map) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-2xl border border-fog/10 px-3 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-condensed text-xl uppercase",
											children: map.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-fog/70",
											children: map.note
										})]
									}, map.name))
								})]
							})]
						}, pool.en))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "formats",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Affichage, pas un veto" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-condensed mt-2 text-5xl leading-none uppercase",
									children: "L'ordre des cartes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-fog/75",
									children: "À lire comme une plaque de match. L'acide, c'est l'équipe 1. Le blanc, c'est l'équipe 2. Le veto réel se fait sur le Discord de l'administration — ici on révise seulement qui parle, et dans quel sens."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, { board: formats[0] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, { board: formats[1] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "glass rounded-3xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
									className: "font-condensed text-2xl uppercase",
									children: "Grande finale et Best of 7"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-3xl text-sm leading-relaxed text-fog/75",
									children: "Hors grande finale, les matchs des splits et des finales mondiales sont en Best of 5. La grande finale est un Best of 7 avec une carte d'avance pour l'équipe qui sort de la finale des gagnants. Une carte déjà bannie ou choisie ne peut plus revenir."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-4 lg:grid-cols-2",
									children: finals.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-fog/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-condensed text-2xl uppercase",
												children: block.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-acid",
												children: block.order
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-3 flex flex-col gap-2",
												children: block.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "text-sm leading-relaxed text-fog/80",
													children: line
												}, line))
											})
										]
									}, block.title))
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "roles",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Deux rôles par joueur" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-condensed mt-2 text-5xl leading-none uppercase",
									children: "Classes d'armes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-fog/75",
									children: "Affichage du pool. Rien à cocher. Chaque équipe a ses propres jetons : 3 fusils d'assaut, 3 mitraillettes, 1 FM, 1 pompe, 1 marksman, 1 sniper. Un joueur prend deux rôles différents. Jamais deux fois le même."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/art/roles.jpg",
								alt: "Armurerie vitrée avec cinq classes d'armes",
								className: "aspect-video w-full rounded-3xl object-cover"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-3xl p-4 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-condensed text-sm tracking-widest text-fog/70 uppercase",
								children: "Plateau d'une équipe · 10 jetons"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-3",
								children: roleTokens.flatMap((role) => Array.from({ length: role.count }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token glass-acid flex h-24 w-20 flex-col items-center justify-center rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-condensed text-2xl text-acid",
										children: role.short
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-center text-xs text-fog/80",
										children: role.name
									})]
								}, `${role.short}-${index}`)))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: roleTokens.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-condensed text-2xl uppercase",
											children: role.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "extrude font-condensed text-4xl text-acid",
											children: ["×", role.count]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-fog/70",
										children: role.en
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fog/80",
										children: "Arme principale de cette classe seulement. Le secondaire et une arme ramassée ne comptent pas dans le rôle."
									})
								]
							}, role.short))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass-acid rounded-3xl p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-condensed text-sm tracking-widest uppercase",
									children: "Déclaration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 flex flex-col gap-3 text-sm leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Annoncée en début de série, à l'adversaire et à l'administration." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "L'équipe qui a donné ses compétences en second annonce ses rôles en premier." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Valable pour toute la série. Pas deux fois le même rôle sur un joueur." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Si ce n'est pas annoncé à temps, les rôles de la série précédente restent." })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed text-2xl uppercase",
										children: "Exemple officiel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-acid/40 px-3 py-1 text-sm text-acid",
										children: "Lecture seule"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-col",
									children: rosterExample.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between gap-3 border-b border-fog/10 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.player }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-condensed text-xl text-acid",
											children: [
												row.a,
												" / ",
												row.b
											]
										})]
									}, row.player))
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "interdit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "grid items-end gap-6 lg:grid-cols-[1.15fr_0.85fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Au-delà du qualificatif en jeu" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-condensed mt-2 text-5xl leading-none uppercase",
									children: "Liste noire"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-fog/75",
									children: "Tout ce qui est nommé ici est interdit. Ce qui n'y est pas reste jouable, sauf contenu fonctionnel de moins de 21 jours, jokers, et séries ou compétences hors liste blanche. Infraction possible : forfait de la carte, du match, ou disqualification."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/art/loadout.jpg",
								alt: "Nature morte d'armes et d'équipements restreints",
								className: "aspect-video w-full rounded-3xl object-cover"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "no-print glass rounded-3xl p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex min-h-12 items-center gap-3 rounded-2xl border border-fog/15 px-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "size-4 shrink-0 text-acid",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Vérifier un objet"
										}),
										mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: query,
											onChange: (event) => setQuery(event.target.value),
											placeholder: "Molotov, Akimbo, Persistance, Grinch…",
											className: "w-full bg-transparent py-3 text-base text-fog outline-none placeholder:text-fog/40"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block w-full py-3 text-base text-fog/40",
											children: "Molotov, Akimbo, Persistance, Grinch…"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex gap-2 overflow-x-auto",
									children: FACETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setFacet(item.id),
										className: facet === item.id ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-fog px-4 text-sm font-semibold text-ink" : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-fog/15 px-4 text-sm text-fog",
										children: item.label
									}, item.id))
								}),
								showHits ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-fog/75",
										children: "Rien sous ce nom dans les listes. S'il ne s'agit pas d'un contenu de moins de 21 jours, il est en principe autorisé. Vérifie quand même le rôle d'arme."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "grid gap-2 sm:grid-cols-2",
										children: hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start justify-between gap-3 rounded-2xl border border-fog/10 px-3 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm text-fog/60",
												children: hit.group
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: hit.label
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: hit.status === "interdit" ? "font-condensed shrink-0 text-sm tracking-widest text-ember uppercase" : "font-condensed shrink-0 text-sm tracking-widest text-acid uppercase",
												children: hit.status
											})]
										}, `${hit.group}-${hit.label}`))
									})
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: [weaponGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass-ember rounded-3xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-condensed text-2xl uppercase",
									children: group.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-col gap-2",
									children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, {
											className: "size-4 shrink-0 text-ember",
											"aria-hidden": "true"
										})]
									}, item))
								})]
							}, group.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass-ember rounded-3xl p-4 sm:col-span-2 lg:col-span-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-condensed text-2xl uppercase",
									children: "Le reste des armes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-3xl text-sm leading-relaxed text-fog/75",
									children: "Une arme absente de ces cinq familles bannies peut être équipée, si elle entre dans tes deux rôles et si tu n'y montes aucun accessoire de la liste suivante. Les lanceurs cités sont des secondaires : eux sont interdits pour tout le monde."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-condensed text-3xl uppercase",
							children: "Accessoires bannis"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: attachmentGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-3xl border border-ember/30 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-condensed text-xl text-ember uppercase",
									children: group.weapon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 flex flex-col gap-1",
									children: group.bans.map((ban) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-sm leading-relaxed text-fog/85",
										children: ban
									}, ban))
								})]
							}, group.weapon))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearColumn, {
								title: "Létales interdites",
								rows: lethals,
								icon: "bomb"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearColumn, {
								title: "Tactiques interdites",
								rows: tacticals,
								icon: "scroll"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 lg:grid-cols-3",
							children: perks.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-condensed text-2xl uppercase",
									children: row.color === "Verte" ? "Atouts verts" : row.color === "Bleue" ? "Atouts bleus" : "Atouts rouges"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-col gap-2",
									children: row.items.map(([name, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-fog/60",
										children: detail
									})] }, name))
								})]
							}, row.color))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass-ember rounded-3xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-condensed text-sm tracking-widest text-ember uppercase",
									children: "Jokers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-condensed mt-2 text-4xl uppercase",
									children: "Tous interdits"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-sm leading-relaxed text-fog/75",
									children: "Aucun wildcard. Pas d'exception de confort, pas de « juste pour le perk en plus »."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "autorise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Listes blanches" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-condensed mt-2 text-5xl leading-none uppercase",
									children: "Ce qui passe"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-fog/75",
									children: "Ici, l'inverse de la liste noire : seulement ces compétences et ces trois séries peuvent être équipées. Tout le reste de ces deux familles est interdit, même sans l'activer."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-condensed flex items-center gap-2 text-3xl uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-6 text-acid",
								"aria-hidden": "true"
							}), "Compétences opérateur"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: skills.map(([fr, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "glass-acid rounded-3xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-condensed text-xl leading-tight uppercase",
									children: fr
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-fog/70",
									children: en
								})]
							}, en))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 lg:grid-cols-3",
							children: streaks.map(([fr, en], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "extrude font-condensed text-5xl text-acid",
										children: ["0", index + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed mt-4 text-3xl uppercase",
										children: fr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-fog/70",
										children: en
									})
								]
							}, en))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-3xl text-sm leading-relaxed text-fog/75",
							children: "Toute série de points absente de ces trois noms est interdite. Même règle pour toute compétence qui n'est pas dans les dix cases au-dessus."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "cosmetiques",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Summer · Fall · finales mondiales" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-condensed mt-2 text-5xl leading-none uppercase",
								children: "Skins et emotes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-fog/75",
								children: "Les cosmétiques bougent selon l'étape. Pas de délai de 21 jours sur un cosmétique neuf. Écoute quand même l'annonce du staff : la liste peut se resserrer d'un stage à l'autre."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-[0.8fr_1.2fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass-ember rounded-3xl p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-condensed text-3xl uppercase",
								children: "Bloc général"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 flex flex-col gap-3 text-sm leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toutes les skins légendaires de létales et de tactiques." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toutes les emotes, à n'importe quel moment de la partie." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Les skins d'opérateur de la colonne d'à côté." })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2 sm:grid-cols-2",
							children: skins.map((skin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "glass rounded-2xl px-4 py-3 text-sm",
								children: skin
							}, skin))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
					id: "discipline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "À relire avant le host" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-condensed mt-2 text-5xl leading-none uppercase",
								children: "Discipline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-fog/75",
								children: "Quatre règles qui font perdre une carte même avec un loadout « presque » propre."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 lg:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, {
										className: "size-5 text-acid",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed mt-4 text-3xl uppercase",
										children: "Compétence unique"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fog/80",
										children: "Deux joueurs vivants de la même équipe ne portent pas la même compétence, même sans l'activer. Si le coéquipier est mort et déjà en train d'en changer, apparaître avec son ancienne compétence ne compte pas. On peut changer en cours de carte, en se parlant avant. Doublon = forfait de la carte."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, {
										className: "size-5 text-acid",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed mt-4 text-3xl uppercase",
										children: "Vingt-et-un jours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fog/80",
										children: "Arme, compétence, atout, utilitaire, série ou accessoire tout juste sorti : interdit pendant 21 jours après la dispo mondiale. L'administration peut raccourcir ou allonger. Un doute se demande avant le match, pas pendant. Les cosmétiques n'ont pas ce délai."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bomb, {
										className: "size-5 text-acid",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed mt-4 text-3xl uppercase",
										children: "Preuve"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fog/80",
										children: "Enregistre les matchs. Si l'adversaire sort un objet de la liste, la VOD est ce que l'admin regardera. Le signalement passe par l'opérateur du tournoi ou codmesports@activision.com."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
										className: "size-5 text-acid",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-condensed mt-4 text-3xl uppercase",
										children: "Matériel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fog/80",
										children: "D'après la FAQ 2026, pas la page settings : écran sous 7,5 pouces pour les splits et les finales. Tablette interdite en ligne jusqu'aux finales. Aux finales, on joue sur l'appareil fourni. Manette, macro ou accessoire qui envoie des inputs : interdit sans accord. Une coque ou un ventilo qui ne se branche pas reste permis."
									})
								]
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mx-auto max-w-6xl px-4 py-10 text-sm leading-relaxed text-fog/60 sm:px-8",
				children: [
					"Synthèse du règlement public Call of Duty: Mobile — Esports Settings 2026, plus la FAQ matériel. En cas d'écart, la page Activision et l'administration du tournoi font foi.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-acid underline",
						href: "https://www.callofduty.com/mobile/esports/esports-settings",
						children: "Règlement settings"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-acid underline",
						href: "https://www.callofduty.com/mobile/esports/faq",
						children: "FAQ"
					}),
					". Codex interne du clan Noxius."
				]
			})
		]
	});
}
function GearColumn({ title, rows, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass rounded-3xl p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "font-condensed flex items-center gap-2 text-2xl uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon === "bomb" ? Bomb : ScrollText, {
				className: "size-5 text-ember",
				"aria-hidden": "true"
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-col",
			children: rows.map(([fr, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-baseline justify-between gap-3 border-b border-fog/10 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fr }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-fog/55",
					children: en
				})]
			}, en))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handbook, {});
}
//#endregion
export { Home as component };
