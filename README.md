# Taboo Game — Project Reference

> **For AI assistants**: This README is the authoritative reference for this project. Read it instead of parsing the word files. The word files are large (45–91 KB each) and don't need to be read unless you're doing a targeted search or adding words.

---

## What This Is

A browser-based **Taboo card game** — single HTML file (`index.html`) with no build step, no dependencies, no server required. Open `index.html` in a browser and play immediately.

Players take turns describing a target word to their team **without** saying any of the 5 forbidden "taboo" words on the card. Points for correct guesses, optional penalty for skips.

---

## File Structure

```
TabooGame/
├── index.html          # Entire game UI + logic (self-contained, ~27 KB)
├── config.js           # Game settings (timer, penalties, team names)
└── words/
    ├── easy.js         # 508 entries  → exports WORDS_EASY
    ├── medium.js       # 817 entries  → exports WORDS_MEDIUM
    └── hard.js         # 814 entries  → exports WORDS_HARD
```

**Total word bank: 2,139 entries**

---

## Word Entry Format

Every entry in every word file follows this exact structure:

```js
{ word: "TARGET WORD", taboo: ["w1", "w2", "w3", "w4", "w5"] }
```

- `word` — always **UPPERCASE**
- `taboo` — always **exactly 5 strings** (the forbidden clue words)
- Arrays are plain JS (`WORDS_EASY = [ ... ];`) — no `export`, no `module.exports`

Example:
```js
{ word: "EIFFEL TOWER", taboo: ["Paris", "iron", "France", "tall", "tourist"] },
```

---

## Difficulty Philosophy

| Level | Audience | Examples |
|-------|----------|---------|
| **easy** | Kids / casual players | PIZZA, MESSI, EIFFEL TOWER, SANDWICH |
| **medium** | General adults with cultural/sports knowledge | RAHUL DRAVID, PAELLA, STONEHENGE, BRUNO MARS |
| **hard** | Specialist knowledge required | GRAEME POLLOCK, ATACAMA DESERT, EDITH PIAF, BISMARCK |

---

## Category Breakdown

### easy.js (508 entries)
| Category | Approx count |
|----------|-------------|
| Everyday objects, animals, food | ~400 |
| Indian context (festivals, food, places, culture) | ~70 |
| World Famous Places (easy tier) | ~20 |
| World Famous Dishes (easy tier) | ~20 |

**Sample easy words**: PIZZA, CRICKET, EIFFEL TOWER, DIWALI, SARI, MANGO, TIGER, SANDWICH, PANCAKE, BBQ, BURJ KHALIFA, GREAT BARRIER REEF

---

### medium.js (817 entries)
| Category | Approx count |
|----------|-------------|
| Indian context (history, culture, festivals, sports) | ~300 |
| General medium concepts | ~100 |
| World Famous Places | ~38 |
| World Famous Dishes | ~29 |
| Cricket Players | ~48 |
| Football Players | ~49 |
| Tennis Players | ~49 |
| Singers | ~49 |
| Celebrities (actors, entrepreneurs) | ~49 |
| Politicians & World Leaders | ~46 |

**Sample medium words**:
- *Places*: ACROPOLIS, VERSAILLES, PETRA, CHICHEN ITZA, ULURU, DEAD SEA, CAPE TOWN, ISTANBUL, HAGIA SOPHIA
- *Dishes*: PAELLA, BIRYANI, BUTTER CHICKEN, PEKING DUCK, POUTINE, TAGINE, CEVICHE, TIRAMISU
- *Cricket*: RICKY PONTING, WASIM AKRAM, AB DE VILLIERS, RAHUL DRAVID, VIV RICHARDS, IMRAN KHAN, BABAR AZAM, DON BRADMAN, IAN BOTHAM, JASPRIT BUMRAH
- *Football*: THIERRY HENRY, RONALDO NAZARIO, CRUYFF, MALDINI, LEWANDOWSKI, MODRIC, MALDINI, SHEARER, GEORGE BEST
- *Tennis*: PETE SAMPRAS, BJORN BORG, IGA SWIATEK, NAVRATILOVA, ROD LAVER, BILLIE JEAN KING, ANDY MURRAY, BORIS BECKER
- *Singers*: WHITNEY HOUSTON, FRANK SINATRA, ARETHA FRANKLIN, A R RAHMAN, DAVID BOWIE, JOHN LENNON, KURT COBAIN, LATA MANGESHKAR
- *Celebrities*: MERYL STREEP, ROBERT DOWNEY JR, DWAYNE JOHNSON, PRIYANKA CHOPRA, ELON MUSK, LEONARDO DICAPRIO, TOM CRUISE
- *Politicians*: INDIRA GANDHI, JULIUS CAESAR, ALEXANDER THE GREAT, QUEEN ELIZABETH II, ATATURK, FIDEL CASTRO, KOFI ANNAN, MACRON

---

### hard.js (814 entries)
| Category | Approx count |
|----------|-------------|
| Indian context (complex history, science, art) | ~300 |
| General hard concepts | ~100 |
| World Famous Places (geographic/specialist) | ~36 |
| Cricket Players (lesser-known / technical) | ~52 |
| Football Players (historical / tactical) | ~51 |
| Tennis Players (era specialists) | ~54 |
| Singers (jazz era, world music, niche) | ~45 |
| Celebrities (classic Hollywood, directors) | ~54 |
| Politicians (historic / regional) | ~58 |

**Sample hard words**:
- *Places*: ATACAMA DESERT, SILK ROAD, MARIANA TRENCH, FERTILE CRESCENT, RING OF FIRE, GULF STREAM, SARGASSO SEA
- *Cricket*: GRAEME POLLOCK, DENNIS LILLEE, GARFIELD SOBERS, RICHIE BENAUD, INZAMAM-UL-HAQ, CURTLY AMBROSE, SHAKIB AL HASAN
- *Football*: EUSEBIO, ALFREDO DI STEFANO, LEV YASHIN, GARRINCHA, SOCRATES, GEORGE WEAH, ALEXIA PUTELLAS
- *Tennis*: MARGARET COURT, FRED PERRY, SUZANNE LENGLEN, GORAN IVANISEVIC, GUILLERMO VILAS, JANA NOVOTNA
- *Singers*: EDITH PIAF, ELLA FITZGERALD, BILLIE HOLIDAY, NINA SIMONE, JOHN COLTRANE, CHUCK BERRY, CHARLES AZNAVOUR
- *Celebrities*: ALFRED HITCHCOCK, STANLEY KUBRICK, ORSON WELLES, BUSTER KEATON, MARLENE DIETRICH, GRACE KELLY
- *Politicians*: BISMARCK, KWAME NKRUMAH, GAMAL NASSER, POL POT, THOMAS SANKARA, HAILE SELASSIE, AYATOLLAH KHOMEINI

---

## Config Reference (`config.js`)

```js
CONFIG.defaultTimer   = 60        // seconds per turn
CONFIG.timerOptions   = [30,45,60,90]
CONFIG.cardsPerTurn   = 0         // 0 = unlimited (timer-limited)
CONFIG.skipPenalty    = false     // true = -1 point per skip
CONFIG.tabooCount     = 5         // taboo words shown per card
CONFIG.defaultDifficulty = "easy"
CONFIG.title          = "Taboo!"
CONFIG.teamNames      = ["Team A", "Team B"]
CONFIG.teamColors     = ["#e74c3c", "#2980b9"]
```

---

## Rules for Adding Words

1. **No duplicates across files** — a word must appear in exactly one of `easy.js`, `medium.js`, `hard.js`. Always grep before adding: `word: "EXACT WORD"`.
2. **Exactly 5 taboo words** — the config enforces `tabooCount: 5`.
3. **UPPERCASE target word** — the `word` field is always all-caps.
4. **Taboo words should be obvious** — they must be the first 5 words a person would use to describe the target.
5. **Difficulty placement** — see the philosophy table above.
6. **Do not re-add these** (already in medium.js as original entries): GANDHI, NEHRU, SARDAR PATEL, AMBEDKAR, NETAJI, RANI LAXMIBAI, ASHOKA, AKBAR, SHIVAJI, CHANDRAGUPTA.

---

## How to Add New Words (AI workflow)

```powershell
# 1. Check for duplicate first
Select-String -Path E:\agency\AIWorkflows\TabooGame\words\*.js -Pattern 'word: "NEW WORD"'

# 2. Append entries before the closing ]; of the target file
$file = "E:\agency\AIWorkflows\TabooGame\words\medium.js"
$content = Get-Content $file -Raw
$newEntry = "`n  { word: `"NEW WORD`", taboo: [`"t1`",`"t2`",`"t3`",`"t4`",`"t5`"] },"
$content -replace '\];\s*$', "$newEntry`n];" | Set-Content $file -Encoding UTF8 -NoNewline

# 3. Validate syntax and count
node -e "
  const fs=require('fs');
  const c=fs.readFileSync('$file','utf8');
  const m=c.match(/const\s+\w+\s*=\s*(\[[\s\S]*\]);/);
  const a=new Function('return '+m[1])();
  console.log(a.length+' entries, syntax OK');
"
```

---

## Validation Script

Save as `validate.js` and run with `node validate.js`:

```js
const fs = require('fs');
const files = { easy: 'words/easy.js', medium: 'words/medium.js', hard: 'words/hard.js' };
for (const [name, path] of Object.entries(files)) {
  const content = fs.readFileSync(path, 'utf8');
  const match = content.match(/const\s+WORDS_\w+\s*=\s*(\[[\s\S]*\]);/);
  const arr = new Function('return ' + match[1])();
  const bad = arr.filter(e => !e.word || e.taboo?.length !== 5);
  console.log(`${name}: ${arr.length} entries, ${bad.length} malformed`);
}
```

---

## Git

- Repo: `https://github.com/kmda212/taboogame.git`
- Branch: `main`
- No CI, no build — just commit and push the JS files.
- Line endings: `core.autocrlf = false` (set locally to avoid LF→CRLF errors on Windows)
