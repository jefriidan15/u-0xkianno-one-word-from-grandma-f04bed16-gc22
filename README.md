# One Word From Grandma

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/jefriidan15/u-0xkianno-one-word-from-grandma-f04bed16-gc22/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/jefriidan15/u-0xkianno-one-word-from-grandma-f04bed16-gc22/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

## Entry word

**computor**

## Why this word

Grandma was asked for one word for AI. She means "computer" — the big box
that thinks — but she types it the way she says it: "computor". It is
warm, familiar, and unmistakably grandma: no jargon, no textbook spelling,
just her honest word for the machine that helps her grandchildren.

## How it works

`main.ts` (dependency-free, plain TypeScript, run directly by Node) holds a
short curated list of grandma words for AI and scores each one on three
fixed traits — how familiar it is to grandma, how warm it sounds, and
whether it carries grandma's honest spelling of a tech word. The highest
total wins, ties break by list order, and the winner is "computor". The
word is validated as a single 1–30 character token, then written to
`/output/entry.txt`. The selection is fully deterministic: no randomness,
no clock, no network, and no environment input, so every run produces the
exact same word.

## Run

```sh
node main.ts
```

This writes the entry word to `/output/entry.txt`.
