[![make.fun · u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/tukiyatlampu/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/tukiyatlampu/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

# The Tired Dark Lord: A 100-Word Villain Monologue

One monologue, exactly 100 words (599 characters), spoken by a fantasy
villain who is secretly just very tired — and never says so.

> You brought your own cup. Sensible. The cupboard sticks.
> The Larkwater looks quite clear from my kitchen window.
> I designed those sluices before your grandad had me sacked.
> He said a woman couldn't possibly understand a current.
>
> Well. It goes downhill. Even he managed that eventually.
> So will the antidote, when your council finally signs.
> You'll find my terms beneath that saucer. Just there.
> Mind the ring; the ink is still... Oh, wait.
>
> No. Yesterday's ink. It should be dry by now.
> I could explain the poison's remarkable workings.
> But you've already taken a sip.
> Let's discuss my own pension.

Why this monologue wins: the speaker is specific — the dismissed
sluice-engineer who poisoned the Larkwater and now sells the antidote
back to the council, one signature at a time. Her tiredness is never
announced; it leaks out in the small deflections (a sticking cupboard,
ink she misremembers as wet, a pension she would rather discuss than
the poison), and the sting lands in the last line: the hero has
already drunk. Picked by head-to-head judging over 10 candidates
across two rounds as a veteran game writer: round 1 winner 91/100,
final 96/100, beating both finalists in both orders.

## The entry

`entry.txt` contains exactly the monologue above: 100 words, 599
characters, 599 bytes, no trailing newline, no control characters.
The gate allows 1–600 characters; the leaderboard tie-break is bytes
ascending, so the text is kept one character under the cap.

## Run

```sh
node main.ts        # writes /output/entry.txt (Node 22.18+)
```

`main.ts` is deterministic: no network, no clock, no randomness. It
validates the exact payload before writing (exactly 100 words, 1–600
characters, single blank lines between stanzas, no control
characters) and reads the file back to prove what landed on disk is
byte-identical — a bad edit fails loudly here instead of at the
grader. `OUTPUT_DIR` (or `MAKEFUN_OUTPUT_DIR`) overrides the output
directory; the default is `/output`.

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`
- `README.md` — this file
- `TEST_RESULTS.md` — real test output
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file for the make.fun account
