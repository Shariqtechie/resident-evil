// ============================================================
//  RESIDENT EVIL — GAME DATA
//  Edit this file to add/remove/update games, arcs, and tables.
//  No need to touch re-styles.css or index.html for data changes.
// ============================================================

// ----------------------------------------------------------------
//  CARD TYPES (controls color coding):
//    "mainline"  → red border
//    "remake"    → gold border
//    "spin-off"  → green border
// ----------------------------------------------------------------

// ----------------------------------------------------------------
//  RELEASE ORDER LIST
//  Fields:
//    num       - label shown in the number circle (e.g. "0", "CV", "OUT")
//    title     - full game title
//    metaLine  - short date/version line shown in red/gold/green
//    desc      - paragraph description
//    platforms - array of platform tag strings
//    connects  - optional "connects to" line shown at bottom
//    year      - large muted year shown on the right
//    type      - "mainline" | "remake" | "spin-off"
// ----------------------------------------------------------------
const RELEASE_ERA_LABELS = [
  { afterIndex: -1, label: "Classic Era — Fixed Camera" },
  { afterIndex: 4,  label: "Spin-offs & Expansions — Pre-RE4" },
  { afterIndex: 6,  label: "Action Era — Over-the-Shoulder" },
  { afterIndex: 11, label: "Modern Era — First-Person Horror Reboot" },
];

const RELEASE_GAMES = [
  {
    num: "0",
    type: "remake",
    title: "Resident Evil 0 / HD Remaster",
    metaLine: "ORIGINAL: 2002 (GCN) · HD REMASTER: 2016",
    desc: "Prequel to the series. Rebecca Chambers and Billy Coen survive an overrun train and uncover Umbrella's T-Virus origins. Note: no item boxes — items are dropped on the floor.",
    platforms: ["GCN (orig)", "PS4", "PS5", "Xbox One", "Xbox Series X|S", "PC", "Switch"],
    connects: "Leads directly into RE1 — Rebecca arrives at Spencer Mansion",
    year: "2002",
  },
  {
    num: "1",
    type: "remake",
    title: "Resident Evil (REmake)",
    metaLine: "ORIGINAL: 1996 (PS1) · REMAKE: 2002 (GCN) · HD REMASTER: 2015",
    desc: "Chris Redfield and Jill Valentine investigate the Spencer Mansion. The foundation of the entire franchise — introduces the T-Virus, Wesker, and Umbrella. The HD Remaster is the definitive version.",
    platforms: ["PS1 (orig)", "Saturn (orig)", "GCN (2002)", "PS4", "PS5", "Xbox One", "Xbox Series X|S", "PC", "Switch"],
    connects: "Wesker's fate sets up Code: Veronica & future entries",
    year: "1996",
  },
  {
    num: "2",
    type: "remake",
    title: "Resident Evil 2 (Remake)",
    metaLine: "ORIGINAL: 1998 (PS1) · REMAKE: 2019",
    desc: "Leon S. Kennedy and Claire Redfield arrive in zombie-overrun Raccoon City. Two separate yet linked campaigns. Introduces Ada Wong and Mr. X. The remake is widely considered a modern masterpiece.",
    platforms: ["PS1 (orig)", "N64 (orig)", "PS4", "PS5", "Xbox One", "Xbox Series X|S", "PC", "Switch", "Amazon Luna"],
    connects: "RE3 overlaps these events · Claire searches for Chris in Code: Veronica",
    year: "1998",
  },
  {
    num: "3",
    type: "remake",
    title: "Resident Evil 3 (Remake)",
    metaLine: "ORIGINAL: 1999 (PS1) · REMAKE: 2020",
    desc: "Jill Valentine fights to escape Raccoon City before nuclear destruction, hunted by the bio-weapon Nemesis. First half precedes RE2; second half follows it. Carlos Oliveira introduced.",
    platforms: ["PS1 (orig)", "PS4", "PS5", "Xbox One", "Xbox Series X|S", "PC", "Switch", "Amazon Luna"],
    connects: "Raccoon City destroyed · Jill's fate is referenced throughout the series",
    year: "1999",
  },
  {
    num: "CV",
    type: "mainline",
    title: "Resident Evil: Code Veronica X",
    metaLine: "2001 (DC / PS2 X version) · 2011 (PS3 / 360 HD)",
    desc: "Claire continues searching for Chris, uncovering the Ashford family's dark legacy. Chris joins mid-game. Considered a mainline entry despite the different title. A remake is rumored.",
    platforms: ["Dreamcast", "PS2", "PS3", "Xbox 360", "PS4"],
    connects: "Closes the Raccoon City arc · introduces Wesker's superhuman powers",
    year: "2001",
  },
  {
    num: "OUT",
    type: "spin-off",
    title: "Resident Evil: Outbreak + File #2",
    metaLine: "OUTBREAK: 2004 (PS2) · FILE #2: 2004 (PS2)",
    desc: "First online co-op RE game. 8 civilian survivors each with unique abilities navigating Raccoon City during the outbreak. File #2 is a standalone expansion with 5 more scenarios. Servers shut down; fan-run private servers exist.",
    platforms: ["PS2 (only)"],
    connects: "Set during RE2/RE3 events · Grace (RE Requiem) is daughter of Outbreak's Alyssa Ashcroft",
    year: "2004",
  },
  {
    num: "4",
    type: "remake",
    title: "Resident Evil 4 (Remake)",
    metaLine: "ORIGINAL: 2005 (GCN) · REMAKE: 2023",
    desc: "Leon S. Kennedy rescues the president's daughter from a Spanish cult infected with Las Plagas parasite. Revolutionized the franchise — and gaming — by introducing over-the-shoulder gameplay. The 2023 remake is considered the definitive version.",
    platforms: ["GCN (orig)", "PS2 (orig)", "Wii (orig)", "PS4", "PS5", "Xbox Series X|S", "PC", "iPhone 15 Pro"],
    connects: "Introduces Saddler & Los Illuminados · Ada's mission revealed in 'Separate Ways' DLC",
    year: "2005",
  },
  {
    num: "REV1",
    type: "spin-off",
    title: "Resident Evil: Revelations",
    metaLine: "2012 (3DS) · HD: 2013 (PC/PS3/360/Wii U) · 2017 (PS4/XBO/Switch)",
    desc: "Set between RE4 and RE5. Jill Valentine and Chris Redfield investigate a ghost ship connected to a bioterrorist organization called Il Veltro. Returns to tense survival horror over action. Genesis scanner mechanic.",
    platforms: ["3DS", "PC", "PS3", "Xbox 360", "Wii U", "PS4", "Xbox One", "Switch"],
    connects: "Bridge between RE4 and RE5 · leads into Lost in Nightmares DLC",
    year: "2012",
  },
  {
    num: "5",
    type: "mainline",
    title: "Resident Evil 5",
    metaLine: "2009",
    desc: "Chris Redfield and new partner Sheva Alomar investigate a bioweapon deal in Africa. First fully co-op designed RE. Culminates in the Chris vs. Wesker showdown that closes the Umbrella storyline. More action than horror.",
    platforms: ["PS3", "Xbox 360", "PS4", "Xbox One", "PC", "Switch"],
    connects: "Wesker defeated — ends the original Umbrella arc; Uroboros virus reappears in Revelations 2",
    year: "2009",
  },
  {
    num: "REV2",
    type: "spin-off",
    title: "Resident Evil: Revelations 2",
    metaLine: "2015 (episodic)",
    desc: "Set between RE5 and RE6. Claire Redfield and Moira Burton are abducted to a Baltic island and exposed to the T-Phobos virus. Barry Burton investigates six months later with a young girl named Natalia. Villain: Alex Wesker, Albert's sister.",
    platforms: ["PS3", "PS4", "PS Vita", "Xbox 360", "Xbox One", "PC", "Switch"],
    connects: "Connects RE5 → RE6 · Alex Wesker's plot references Albert Wesker's fate",
    year: "2015",
  },
  {
    num: "6",
    type: "mainline",
    title: "Resident Evil 6",
    metaLine: "2012",
    desc: "Four interconnected campaigns: Leon, Chris, Jake Muller (Wesker's son), and Ada Wong, spanning a global bioterrorism crisis involving the C-Virus. Most ambitious and most divisive entry — cinematic but strayed from horror roots.",
    platforms: ["PS3", "Xbox 360", "PS4", "Xbox One", "PC", "Switch"],
    connects: "Jake Muller (Wesker's son) carries antibodies · C-Virus introduced; Ada's story spans all campaigns",
    year: "2012",
  },
  {
    num: "7",
    type: "mainline",
    title: "Resident Evil 7: Biohazard",
    metaLine: "2017",
    desc: "A total reinvention: first-person, intimate, terrifying. Ordinary man Ethan Winters searches for his missing wife at a decaying Louisiana plantation, encountering the infected Baker family. Introduces the Mold — a new bio-weapon. VR support on PS4.",
    platforms: ["PS4", "PS5", "Xbox One", "Xbox Series X|S", "PC", "Switch", "Switch 2", "PS VR", "Cloud (JP)"],
    connects: "Ethan's story continues in Village · introduces Eveline and the Mold virus · BSAA ties to Chris Redfield",
    year: "2017",
  },
  {
    num: "8",
    type: "mainline",
    title: "Resident Evil Village",
    metaLine: "2021",
    desc: "Ethan Winters travels to a mysterious European village to rescue his daughter Rose from the eccentric Lords. First-person with more action than RE7. Features the iconic Lady Dimitrescu. Chris Redfield returns with a shocking role. Closes Ethan's arc.",
    platforms: ["PS4", "PS5", "Xbox One", "Xbox Series X|S", "PC", "Switch", "Switch 2", "iPhone 15 Pro", "iPad Pro", "Mac", "PS VR2"],
    connects: "Rose's powers link forward to Requiem's timeline · Chris's fate unresolved going into RE9",
    year: "2021",
  },
  {
    num: "9",
    type: "mainline",
    title: "Resident Evil Requiem",
    metaLine: "FEBRUARY 27, 2026",
    desc: "Set in 2026, 28 years after Raccoon City's destruction. FBI analyst Grace Ashcroft (daughter of Outbreak's Alyssa Ashcroft) and returning hero Leon S. Kennedy investigate a new outbreak in the ruins of Raccoon City. Dual first/third-person perspectives. The 30th anniversary entry.",
    platforms: ["PS5", "Xbox Series X|S", "PC (Steam/Epic)", "Switch 2"],
    connects: "Grace is Alyssa Ashcroft's daughter (Outbreak) · Leon's first major role since RE6 · ties up Raccoon City threads",
    year: "2026",
  },
];

// ----------------------------------------------------------------
//  CHRONOLOGICAL ORDER LIST
//  Same fields as RELEASE_GAMES, but ordered by in-universe date.
// ----------------------------------------------------------------
const CHRON_ERA_LABELS = [
  { afterIndex: -1, label: "1998 — The Raccoon City Outbreak" },
  { afterIndex: 4,  label: "1998–2002 — Closing the Umbrella Arc" },
  { afterIndex: 5,  label: "2004–2009 — The Las Plagas Era" },
  { afterIndex: 8,  label: "2011–2013 — C-Virus Global Crisis" },
  { afterIndex: 10, label: "2017–2021 — The Winters Family Saga" },
  { afterIndex: 12, label: "2026 — Return to Raccoon City" },
];

const CHRON_GAMES = [
  {
    num: "①",
    type: "remake",
    title: "Resident Evil 0 / HD Remaster",
    metaLine: "IN-UNIVERSE: JULY 1998 · HOURS BEFORE RE1",
    desc: "Rebecca Chambers and Billy Coen on the Ecliptic Express. The Progenitor virus and Umbrella's darkest secrets are first revealed. Rebecca's chapter ends as she enters Spencer Mansion — the exact starting point of RE1.",
    platforms: ["PS4/5", "Xbox One/Series", "PC", "Switch"],
    year: "1998",
  },
  {
    num: "②",
    type: "remake",
    title: "Resident Evil (REmake)",
    metaLine: "IN-UNIVERSE: JULY 1998 · SPENCER MANSION",
    desc: "S.T.A.R.S. Bravo and Alpha teams investigate the mansion. Wesker's betrayal revealed. T-Virus origins fully exposed. The mansion self-destructs. Sets everything in motion.",
    platforms: ["PS4/5", "Xbox One/Series", "PC", "Switch"],
    year: "1998",
  },
  {
    num: "③",
    type: "remake",
    title: "Resident Evil 2 (Remake)",
    metaLine: "IN-UNIVERSE: SEPTEMBER 1998 · 2 MONTHS AFTER RE1",
    desc: "Leon and Claire arrive in Raccoon City, now overrun. G-Virus and William Birkin introduced. Their stories overlap and intersect — play Leon A + Claire B for the full picture.",
    platforms: ["PS4/5", "Xbox One/Series", "PC", "Switch", "Luna"],
    year: "1998",
  },
  {
    num: "④",
    type: "remake",
    title: "Resident Evil 3 (Remake)",
    metaLine: "IN-UNIVERSE: SEPT 1998 · OVERLAPS WITH RE2",
    desc: "Jill's escape begins days before RE2 and concludes after it. Nemesis hunts her across the city. The missile strike ends Raccoon City forever. Note: first half is before RE2; second half is after.",
    platforms: ["PS4/5", "Xbox One/Series", "PC", "Switch", "Luna"],
    year: "1998",
  },
  {
    num: "⑤",
    type: "spin-off",
    title: "Resident Evil: Outbreak + File #2",
    metaLine: "IN-UNIVERSE: SEPTEMBER 1998 · CONCURRENT WITH RE2/RE3",
    desc: "Civilian survivors navigate Raccoon City's final days. Alyssa Ashcroft (journalist) is one of 8 playable characters — her daughter Grace is the protagonist of RE Requiem (2026).",
    platforms: ["PS2 only"],
    year: "1998",
  },
  {
    num: "⑥",
    type: "mainline",
    title: "Resident Evil: Code Veronica X",
    metaLine: "IN-UNIVERSE: DECEMBER 1998 · 3 MONTHS AFTER RE2",
    desc: "Claire is captured by Umbrella, sent to a prison island, then a frozen Antarctic base. Chris flies in to rescue her. The Ashford family and their dark twin experiment revealed. Wesker reappears with new superhuman abilities.",
    platforms: ["Dreamcast", "PS2", "PS3", "Xbox 360", "PS4"],
    year: "1998",
  },
  {
    num: "⑦",
    type: "remake",
    title: "Resident Evil 4 (Remake)",
    metaLine: "IN-UNIVERSE: 2004 · 6 YEARS AFTER RACCOON CITY",
    desc: "Leon — now a trained government agent — rescues President Graham's daughter from the Las Plagas parasite cult in rural Spain. The series pivot: Plaga replaces virus as the central threat. Separate Ways DLC (Ada's story) is essential.",
    platforms: ["PS4/5", "Xbox Series X|S", "PC", "iPhone 15 Pro"],
    year: "2004",
  },
  {
    num: "⑧",
    type: "spin-off",
    title: "Resident Evil: Revelations",
    metaLine: "IN-UNIVERSE: 2005 · BETWEEN RE4 AND RE5",
    desc: "Jill and Chris, now BSAA agents, uncover a plot to infect the world's oceans with the T-Abyss virus. Ghost ship setting. Bridges RE4's world to the global bioterrorism of RE5.",
    platforms: ["3DS", "PC", "PS3/4", "Xbox 360/One", "Wii U", "Switch"],
    year: "2005",
  },
  {
    num: "⑨",
    type: "mainline",
    title: "Resident Evil 5",
    metaLine: "IN-UNIVERSE: 2009",
    desc: "Chris Redfield and Sheva Alomar travel to Kijuju, Africa to stop a Majini parasite outbreak and a bioweapon deal. The ultimate showdown with Albert Wesker. Co-op focused. Closes the original Wesker-Umbrella storyline definitively.",
    platforms: ["PS3/4", "Xbox 360/One", "PC", "Switch"],
    year: "2009",
  },
  {
    num: "⑩",
    type: "spin-off",
    title: "Resident Evil: Revelations 2",
    metaLine: "IN-UNIVERSE: 2011 · BETWEEN RE5 AND RE6",
    desc: "Claire Redfield and Moira Burton are kidnapped to a Baltic island. Barry Burton searches for Moira 6 months later with orphan Natalia. Villain Alex Wesker (Albert's sister) seeks immortality using T-Phobos. References Kijuju incident from RE5.",
    platforms: ["PS3/4", "PS Vita", "Xbox 360/One", "PC", "Switch"],
    year: "2011",
  },
  {
    num: "⑪",
    type: "mainline",
    title: "Resident Evil 6",
    metaLine: "IN-UNIVERSE: 2013",
    desc: "Four campaigns across a global C-Virus outbreak. Leon & Helena in Tall Oaks; Chris & Piers in Edonia and China; Jake Muller (Wesker's son with antibodies) and Sherry Birkin; Ada Wong solo. Campaigns physically intersect.",
    platforms: ["PS3/4", "Xbox 360/One", "PC", "Switch"],
    year: "2013",
  },
  {
    num: "⑫",
    type: "mainline",
    title: "Resident Evil 7: Biohazard",
    metaLine: "IN-UNIVERSE: 2017",
    desc: "Ethan Winters searches for his missing wife Mia at the Baker family plantation in Louisiana. The Mold — a new bio-organic weapon called Eveline — has infected the Bakers. Series reboot in tone, perspective, and protagonist. Terrifying and tense.",
    platforms: ["PS4/5", "Xbox One/Series", "PC", "Switch", "Switch 2", "PS VR"],
    year: "2017",
  },
  {
    num: "⑬",
    type: "mainline",
    title: "Resident Evil Village",
    metaLine: "IN-UNIVERSE: 2021 · ROUGHLY 3 YEARS AFTER RE7",
    desc: "Ethan and Mia have a daughter, Rose. She is taken to a mysterious European village controlled by the enigmatic Mother Miranda and her four Lords (Dimitrescu, Beneviento, Moreau, Heisenberg). Ethan's story concludes; Rose's abilities set up the future. Shadows of Rose DLC: Rose's story years later.",
    platforms: ["PS4/5", "Xbox One/Series", "PC", "Switch", "Switch 2", "iPhone 15 Pro", "Mac", "PS VR2"],
    year: "2021",
  },
  {
    num: "⑭",
    type: "mainline",
    title: "Resident Evil Requiem",
    metaLine: "IN-UNIVERSE: OCTOBER 2026 · 28 YEARS AFTER RACCOON CITY",
    desc: "New FBI analyst Grace Ashcroft — daughter of Outbreak survivor Alyssa — investigates mysterious deaths at the Wrenwood Hotel in the ruins of Raccoon City. Leon S. Kennedy joins her, infected with a new intelligent virus. Ties together the Raccoon City legacy with the modern era. The 30th anniversary entry.",
    platforms: ["PS5", "Xbox Series X|S", "PC", "Switch 2"],
    year: "2026",
  },
];

// ----------------------------------------------------------------
//  STORY CONNECTION ARCS
//  Fields:
//    title  - arc name
//    chain  - array of strings, alternating game names and "→" arrows
//    note   - explanatory paragraph
//    highlight - true for blood-red highlight styling
// ----------------------------------------------------------------
const CONNECTION_ARCS = [
  {
    title: "The Raccoon City Arc (Core Foundation)",
    chain: ["RE0 — T-Virus Origin", "→", "RE1 — Spencer Mansion", "→", "RE2 — Raccoon City Outbreak", "↕", "RE3 — Jill's Escape", "→", "Code Veronica — Claire / Chris"],
    note: "RE2 and RE3 overlap: RE3's first half precedes RE2; the second half follows it. Raccoon City is destroyed by missile strike at the end of RE3. Code Veronica takes place 3 months later, closing the Raccoon City character arc.",
  },
  {
    title: "The Wesker Arc (Original Villain Storyline)",
    chain: ["RE1 — Wesker's Betrayal", "→", "Code Veronica — Wesker Returns (enhanced)", "→", "Revelations — BSAA formation", "→", "RE5 — Wesker Defeated (Final)"],
    note: "Albert Wesker is the overarching villain of the first decade. His son Jake Muller (RE6) carries antibodies. His sister Alex Wesker is the villain of Revelations 2.",
  },
  {
    title: "The Las Plagas / Action Arc",
    chain: ["RE4 — Plaga Parasite Introduced", "→", "Revelations — T-Abyss (bridge)", "→", "RE5 — Majini / Wesker End", "→", "Revelations 2 — T-Phobos", "→", "RE6 — C-Virus"],
    note: "Each game introduces a new bioweapon variant. Leon's skill set from RE4 evolves through RE6. The global scale of the bio-terror threat expands with each entry. RE6 is the widest-scope game in the franchise.",
  },
  {
    title: "The Ethan Winters Arc (Modern Reboot)",
    chain: ["RE7 — Mold / Eveline", "→", "Village — Rose Kidnapped", "→", "Village DLC — Rose's Future", "→", "Requiem — (Rose referenced)"],
    note: "RE7 is a soft-reboot using entirely new characters. Ethan is an ordinary civilian — no combat training. Chris Redfield reappears in both games. Rose's Cadou-granted powers in the Village DLC hint at future plotlines explored in Requiem.",
  },
  {
    title: "The Raccoon City Legacy (Full Circle)",
    chain: ["Outbreak — Alyssa Ashcroft survives", "→", "[28 years later]", "→", "Requiem — Grace Ashcroft investigates Raccoon City ruins"],
    note: "Resident Evil Requiem (2026) directly connects to the 2004 Outbreak spin-off. Grace Ashcroft's mother Alyssa was a playable journalist in Outbreak. Leon S. Kennedy returns to the city where his story began in RE2.",
  },
];

// ----------------------------------------------------------------
//  RECURRING CHARACTERS TABLE
//  Columns: Character | Appears In | Role
// ----------------------------------------------------------------
const CHARACTERS = [
  { name: "Leon S. Kennedy",  games: "RE2, RE4, RE6, Requiem",           role: "Rookie cop → government agent → DSO operative; co-protagonist of RE9" },
  { name: "Chris Redfield",   games: "RE1, RE5, RE6, Rev.1, Village",    role: "S.T.A.R.S. → BSAA veteran; fights Wesker; appears in Village with ambiguous role" },
  { name: "Claire Redfield",  games: "RE2, Code Veronica, Rev.2",        role: "Chris's sister; searches for Chris in RE2/CV; TerraSave operative in Rev.2" },
  { name: "Jill Valentine",   games: "RE1, RE3, Rev.1, RE5 (DLC)",       role: "S.T.A.R.S. → BSAA; Nemesis survivor; mind-controlled by Wesker in RE5" },
  { name: "Ada Wong",         games: "RE2, RE4, RE6",                    role: "Spy working for mysterious organizations; constantly allies and betrays Leon" },
  { name: "Albert Wesker",    games: "RE0, RE1, CV, RE5",                role: "Primary villain of first decade; superhuman abilities; killed in RE5 volcano" },
  { name: "Ethan Winters",    games: "RE7, Village",                     role: "Ordinary civilian; his 'death' and Mold-based biology revealed in Village" },
  { name: "Grace Ashcroft",   games: "Requiem",                          role: "New protagonist; daughter of Outbreak's Alyssa; connects classic and modern eras" },
];

// ----------------------------------------------------------------
//  VIRUS / BIOWEAPON GLOSSARY TABLE
//  Columns: Virus | Introduced | Effect & Notes
// ----------------------------------------------------------------
const VIRUSES = [
  { name: "T-VIRUS",        game: "RE0 / RE1",        desc: "Umbrella's flagship mutagen. Turns hosts into zombies. Foundation of the entire series." },
  { name: "G-VIRUS",        game: "RE2",              desc: "William Birkin's creation. Causes extreme rapid mutation. Far more dangerous than T-Virus." },
  { name: "VERONICA VIRUS", game: "Code Veronica",    desc: "Ashford family creation. Reanimates the dead and enhances hosts with plant-based DNA." },
  { name: "LAS PLAGAS",     game: "RE4",              desc: "Parasite (not virus) from Spain. Hosts retain intelligence and can follow orders — a paradigm shift." },
  { name: "T-ABYSS",        game: "Revelations",      desc: "T-Virus variant adapted for aquatic environments. Intended to infect the world's oceans." },
  { name: "UROBOROS",       game: "RE5",              desc: "Wesker's personal bioweapon. Only compatible hosts survive; others are consumed." },
  { name: "T-PHOBOS",       game: "Revelations 2",    desc: "Alex Wesker's virus. Activates and kills the host when they experience fear." },
  { name: "C-VIRUS",        game: "RE6",              desc: "Chrysalid-based virus causing extreme physical transformation. Global distribution in RE6." },
  { name: "MOLD / CADOU",   game: "RE7 / Village",    desc: "Eveline (RE7) is a Mold weapon. Cadou (Village) is derived from Mold. Grants powers to compatible hosts like Rose." },
];
