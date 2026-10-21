# Snowtooth Lift Board

The board guests see on the TVs in the lodge and on their phones.

## Run it

```
npm install
npm run dev
```

## Data source

Lift, trail, and grooming data comes from the Snowtooth REST API:

```
https://snowtooth-api-rest.fly.dev/lifts
```

Each lift includes the trails it serves.

## Workshop

15 minutes. Teach Cursor how your team works.

| Branch | What you get |
| --- | --- |
| `main` | Start here. One lift board. No project rules yet. |
| `checkpoint` | Mid-point. Data rule, trails panel, grooming report. |
| `complete` | Done. Copy rule and the Open Runs panel. |

Fell behind? `git stash && git checkout checkpoint`

Facilitator notes, deck, and handout live in `workshop/`.
