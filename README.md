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

A 15-minute session on teaching Cursor how your team works. Materials live in `workshop/`.

| Branch | What's in it |
| --- | --- |
| `main` | Where you start |
| `checkpoint` | After the demo |
| `complete` | After the lab |

Fell behind? `git stash && git checkout checkpoint`
