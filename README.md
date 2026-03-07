<div align="center">

```
██████╗ ███████╗███████╗██╗██████╗ ███████╗███╗   ██╗████████╗    ███████╗██╗   ██╗██╗██╗     
██╔══██╗██╔════╝██╔════╝██║██╔══██╗██╔════╝████╗  ██║╚══██╔══╝    ██╔════╝██║   ██║██║██║     
██████╔╝█████╗  ███████╗██║██║  ██║█████╗  ██╔██╗ ██║   ██║       █████╗  ██║   ██║██║██║     
██╔══██╗██╔══╝  ╚════██║██║██║  ██║██╔══╝  ██║╚██╗██║   ██║       ██╔══╝  ╚██╗ ██╔╝██║██║     
██║  ██║███████╗███████║██║██████╔╝███████╗██║ ╚████║   ██║       ███████╗ ╚████╔╝ ██║███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚══════╝  ╚═══╝  ╚═╝╚══════╝
```

# ☣ Resident Evil — Complete Series Archive

**A beautifully designed, interactive reference guide to every Resident Evil game.**  
Release order · Chronological order · Story connections · Platforms · Lore

[![Live Site](https://img.shields.io/badge/LIVE%20SITE-Visit%20Archive-b30000?style=for-the-badge&logo=github)](https://shariqtechie.github.io/resident-evil-archive)
[![Maintained](https://img.shields.io/badge/MAINTAINED-By%20shariqtechie-1a1a1a?style=for-the-badge)](https://github.com/shariqtechie)
[![Games Covered](https://img.shields.io/badge/GAMES%20COVERED-14%20entries-8b2500?style=for-the-badge)](#)
[![Last Updated](https://img.shields.io/badge/LAST%20UPDATED-2026-3d2d1a?style=for-the-badge)](#)

</div>

---

## What This Is

This is a hand-crafted, single-page interactive archive covering every major Resident Evil game — from the original 1996 mansion incident all the way to *Resident Evil Requiem* (2026). It's built to look and feel like it belongs in the RE universe: dark, atmospheric, and precise.

There are no ads. No paywalls. No distractions. Just the series, laid out cleanly.

---

## What's Inside

The archive is split into three tabs:

**Release Order**  
Every game listed in the order it came out. Remakes replace their originals — so instead of seeing both the 1996 PS1 original and the 2002 GameCube remake listed separately, you get the definitive version with a note about the original. Each card includes every platform the game is available on across all generations.

**Chronological Order**  
The same games rearranged by in-universe date. Useful if you want to experience the story from the beginning. Includes notes about games that overlap in timeline — like Resident Evil 2 and 3, which take place concurrently — so you know exactly what order to play them.

**Story Connections**  
Five story arcs showing how every game connects to the others, a recurring characters table tracking major characters across their appearances, and a complete virus and bio-weapon glossary explaining what each agent does and where it first appeared in the series.

---

## Color Guide

Cards are color-coded so you can instantly identify what you're looking at:

| Color | Meaning |
|-------|---------|
| 🔴 Red border | Mainline numbered entry |
| 🟡 Gold border | Remake (replaces the original) |
| 🟢 Green border | Key spin-off |

---

## How to Use It

Just open the site. No account, no install, no setup. Everything runs in the browser.

If you're new to the series and want to play in lore order, go to the **Chronological** tab and start from entry ①. If you want to see the series as it was experienced by fans over the decades, use **Release Order**.

---

## The Files

The project is intentionally split into three files so each has one job:

```
index.html      ← Page structure and renderer. Reads from the other two files.
re-data.js      ← All game content: titles, descriptions, platforms, story arcs.
re-styles.css   ← All visual styling: colors, fonts, layout, animations.
```

This means if a new game comes out, only `re-data.js` needs to be touched. The visuals and structure stay the same.

---

## Games Covered

| # | Title | In-Universe Year |
|---|-------|-----------------|
| 0 | Resident Evil 0 / HD Remaster | July 1998 |
| 1 | Resident Evil (REmake) | July 1998 |
| 2 | Resident Evil 2 (Remake) | September 1998 |
| 3 | Resident Evil 3 (Remake) | September 1998 |
| — | Resident Evil: Code Veronica X | December 1998 |
| — | Resident Evil: Outbreak + File #2 | September 1998 |
| 4 | Resident Evil 4 (Remake) | 2004 |
| — | Resident Evil: Revelations | 2005 |
| 5 | Resident Evil 5 | 2009 |
| — | Resident Evil: Revelations 2 | 2011 |
| 6 | Resident Evil 6 | 2013 |
| 7 | Resident Evil 7: Biohazard | 2017 |
| 8 | Resident Evil Village | 2021 |
| 9 | Resident Evil Requiem | October 2026 |

---

## How to Run It Locally

No build step. No dependencies. No npm install. Just open a file.

```bash
git clone https://github.com/shariqtechie/resident-evil-archive.git
cd resident-evil-archive
```

Then open `index.html` in any modern browser.  
That's it.

> **Note:** Because `index.html` loads `re-data.js` and `re-styles.css` as separate files, opening `index.html` directly via `file://` may be blocked by your browser's CORS policy. If nothing loads, either use a local server (`python -m http.server`) or just use the [live site](https://shariqtechie.github.io/resident-evil-archive).

---

## How to Deploy to GitHub Pages (from scratch)

1. Create a new repository on GitHub named `resident-evil-archive`
2. Upload the three files: `index.html`, `re-data.js`, `re-styles.css`
3. Go to **Settings → Pages**
4. Under *Source*, select **Deploy from a branch**
5. Choose **main** branch, **/ (root)** folder
6. Click **Save**

Your site will be live at:  
`https://shariqtechie.github.io/resident-evil-archive`

It usually takes 1–2 minutes to go live the first time.

---

## Updates

This archive is maintained by [@shariqtechie](https://github.com/shariqtechie).

It will be updated as new games are announced, released, or when platform availability changes. The file structure is designed to make updates as simple as possible — new entries are added to `re-data.js` in a few lines with no changes needed anywhere else.

---

## Tech

Pure HTML, CSS, and vanilla JavaScript. No frameworks. No build tools. No external dependencies except two Google Fonts loaded over CDN. The entire archive loads in under a second.

---

<div align="center">

*"No matter what occurs, I will find you."*

☣ **S.T.A.R.S.**

</div>
