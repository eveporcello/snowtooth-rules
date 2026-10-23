# Snowtooth Lift Board

The board guests see on the TVs in the lodge and on their phones.

## Workshop

15 minutes. Teach Cursor how your team works.

Clone the repo and open the folder in Cursor:

```
git clone https://github.com/eveporcello/snowtooth-rules.git
```

Then follow the handout your instructor shares in chat. You don't need to run the app.

| Branch | What you get |
| --- | --- |
| `main` | Start here. One lift board. No project rules yet. |
| `checkpoint` | Part 1 is done. Pick up here for the challenge. |
| `complete` | One possible challenge answer, to compare with yours. |

Fell behind? `git stash -u && git checkout checkpoint`

## Run it (optional)

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
