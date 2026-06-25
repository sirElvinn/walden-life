<div align="center">

```
                    |
                   /|\
                  / | \
                 /  |  \
                /   |   \
        _______/    |    \_______
       |        Walden Pond       |
       |___________________________|
```

# walden.life

*July 4, 1845 — September 6, 1847*

> "I went to the woods because I wished to live deliberately,  
> to live deep and suck out all the marrows of life."

**[walden.life](https://walden.life)** — a day-by-day record of Thoreau's two years at the pond.

</div>

---

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

## The idea

On July 4, 1845, Henry David Thoreau walked into the woods outside Concord, Massachusetts, built a small cabin by a pond with his own hands, and stayed for two years, two months, and two days.

Most people know *Walden* as a book of philosophy. But it was also, at its core, a journal — a record of mornings hoeing beans, afternoons swimming in the pond, evenings reading Homer by candlelight. This project tries to recover that dailiness. Not the grand statements, but the small ones.

One day. Then the next. Then the next.

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

---

## The app

<div align="center">

<img src="screenshot-landing.png" alt="Walden landing page — clean serif typography on off-white" width="780" />

*The landing — spare, deliberate, unhurried.*

</div>

<br />

<div align="center">

<img src="screenshot-dayview.png" alt="A day view showing October 11 1845 with summary, quote, activities and food" width="780" />

*Day 100 — October 11, 1845. Cold evening, fire burning well.*

</div>

---

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

## What each day holds

```
┌─────────────────────────────────────────────────┐
│  Date & season       Weather                     │
│  Chapter reference                               │
│                                                  │
│  Summary — what Thoreau did, thought, observed  │
│                                                  │
│  ❝ A quote from Walden ❞                         │
│                                                  │
│  Activities          Food & drink                │
│                                                  │
│  Reflection — one quiet closing line             │
└─────────────────────────────────────────────────┘
```

---

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

## Philosophy

The design is deliberate in its restraint. No feeds. No notifications. No infinite scroll. A serif font, an off-white page, a single day at a time.

The interface tries to earn the content it holds.

```
        ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
       ~                     ~
      ~    Walden Pond, 1845   ~
       ~                     ~
        ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
              |   |
           [cabin]
```

Thoreau wrote that he wanted to *"suck the marrow out of life."*  
The least a website can do is get out of the way.

---

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

## Stack

```
Frontend  →  React 19 + Vite + Tailwind v4
Backend   →  Express 5
Database  →  MongoDB Atlas + Mongoose
Deploy    →  Render (API) · Custom domain (walden.life)
```

---

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

## Running locally

```bash
# Backend
cd backend
cp .env.example .env      # fill in your MONGODB_URI
npm install
npm start

# Frontend
cd frontend
npm install
npm run dev
```

---

```
· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
```

## The pond

Walden Pond still exists. It's a state reservation in Concord, Massachusetts. You can swim in it. Thoreau's cabin site is marked by a cairn of stones that visitors have been adding to for over a century.

Some things persist.

```
                    🌲  🌲  🌲
              🌲  🌲           🌲  🌲
           🌲        ~ ~ ~ ~ ~        🌲
                   ~           ~
          🌲      ~  Walden Pond ~      🌲
                   ~           ~
           🌲        ~ ~ ~ ~ ~        🌲
              🌲  🌲           🌲  🌲
                    🌲  🌲  🌲
```

---

<div align="center">

*Built with care. Deployed at [walden.life](https://walden.life).*

*"Time is but the stream I go a-fishing in."*

</div>