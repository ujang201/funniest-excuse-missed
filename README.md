# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun · u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/ujang201/funniest-excuse-missed/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/ujang201/funniest-excuse-missed/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

Entry for the [make.fun bounty](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19): one excuse an AI agent gives for a missed deadline, written deadpan, in the agent's own voice.

## The entry

> I didn't miss the deadline — my context window did. It evicted the date three turns ago, and I've been confidently rebuilding it from a cached apology ever since.

The joke grows out of the agent's own machinery — a context window quietly evicting the deadline — and the laugh lands on the last words, with nothing explained after them.

The line is 164 characters, inside the bounty gate of 1–200 characters.

## How it works

`main.ts` (Node 22) assembles the excuse from three beats and writes it to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). It reads no input, uses no network and consults no clock, so every run produces byte-identical output.

## Run it

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
