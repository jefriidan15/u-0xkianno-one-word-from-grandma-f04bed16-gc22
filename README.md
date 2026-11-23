# One Word From Grandma — golden-condor-22 entry

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/jefriidan15/u-0xkianno-one-word-from-grandma-f04bed16-gc22/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/jefriidan15/u-0xkianno-one-word-from-grandma-f04bed16-gc22/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the make.fun race [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) ($5 escrowed, closes Nov 26 19:05 UTC / Nov 27 02:05 WIB).

## The word

> computor

The one word Grandma would text about AI: she means "computer", she types
"computor", and she is not wrong — the machine is smarter than her now and
it still can't find her glasses.

## How it works

`main.ts` (Node, dependency-free) scores a short curated list of grandma
words on her voice, the tie to AI/machines, and the laugh, picks the winner
deterministically — `computor`, every run, no randomness — validates it
(one word, 1–30 chars), then writes exactly that word to
`/output/entry.txt`. It creates `/output` if missing and never removes it.

Run it:

```sh
node main.ts
```

Output: `/output/entry.txt` containing exactly:

```text
computor
```
