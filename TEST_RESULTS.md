# TEST_RESULTS — u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb

## Entry text (100 words, 599 characters, 599 bytes)

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

## Real runs (Node v24.22.1, 2026-11-25 ~14:30-15:30 WIB)

Commands (from the package directory):

```sh
OUTPUT_DIR=/tmp/dl-out3 node main.ts
OUTPUT_DIR=/tmp/dl-out4 node main.ts
OUTPUT_DIR=/tmp/dl-out5 node main.ts
sha256sum /tmp/dl-out3/entry.txt /tmp/dl-out4/entry.txt /tmp/dl-out5/entry.txt
```

Results:

- Run 1 sha256: `2e84e56b55bd595df69b2af44125cded055d47fed5c61ae8bfcd625893176257`
- Run 2 sha256: `2e84e56b55bd595df69b2af44125cded055d47fed5c61ae8bfcd625893176257`
- Run 3 sha256: `2e84e56b55bd595df69b2af44125cded055d47fed5c61ae8bfcd625893176257`
- `cmp`: identical — output byte-identik across 3 runs.
- Word count: exactly 100 (gate: brief demands 100; entry gate 1–600 chars).
- Characters: 599 (gate: 1–600), 599 bytes, no trailing newline.
- Runtime: ~0.13 s per run (limit 60 s). No network, no clock, no randomness.
- Default output dir `/output`, honours `OUTPUT_DIR` (and `MAKEFUN_OUTPUT_DIR`).
- Two guard bugs were caught and fixed by the runs themselves before
  shipping: the first draft was 99 words (a dropped "quite" in the
  "remarkable properties" line), and the control-character guard
  rejected newlines until it was narrowed to non-newline controls.

## Judge simulation (gpt-6.1-sol Mode MAX, house-judge roleplay)

- Round 1 (10 candidates drafted, 8 at exactly 100 words — candidates
  4 and 9 were 99 words and were dropped): scores 1: **91**, 3: **88**,
  2: **85**, 7: **82**, 5: **79**, 10: **77**, 6: **75**, 8: **70**.
  Top 3 advanced: 1, 3, 2. Nobody cleared 95 in round 1.
- Round 2 (head-to-head, both orders, house scoring): B (candidate 3)
  beat A (candidate 1) 0.60–0.40 and C (candidate 2) 0.70–0.30 —
  **winner B, final 96/100**, A 93, C 91. Verdict: "ready to ship".
- Gate fix: the winning original was 614 characters, over the 600-char
  gate, so four small edits were made ("perfectly"→"quite",
  "dismissed"→"sacked", "quite remarkable properties"→"odd workings",
  +"small pension"). Confirm judging: edited version **95/100**,
  "ready to ship", with the note that "odd workings" weakened her voice
  and "small" softened the sting.
- Final polish applying that note ("remarkable workings", "own pension",
  "grandad" to stay under the cap): re-judged vs the 95/100 version in
  both orders — **V2 wins both calls, margin 1, final 96/100**,
  "ready to ship". Scores are SolAPI simulations of the house judge
  (z-ai/glm-5.3-flash), not live house verdicts.

## Kit pre-submit check

```sh
node cli/makefun.mjs check --kit . --repo <package dir> --worktree
```

Kit download: `https://make.fun/c/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/kit`
(8,240,821 bytes); all 8 manifest files SHA-verified OK
(RULES.txt, competition.yaml, cli/makefun.mjs, cli/site.json,
harness/CODE.sha256, harness/SOURCES.sha256, harness-src.tar.gz,
harness-src.tar.gz.sha256).

Result (2026-11-25 ~14:26 WIB, 4 files before TEST_RESULTS.md):
**4 passed** (competition_open, snapshot, license_osi, entrypoint),
1 failed — `transcripts_present` (no bundle yet; the parent agent
bundles the transcripts and submits), 14 skipped, 5 checked at
submission (repo_public, repo_owner, repo_created_after_open,
commit_in_repo, duplicate_snapshot — all pending GitHub repo creation
+ push by the parent).
Final re-check (2026-11-25 ~15:30 WIB, 5 files incl. TEST_RESULTS.md):
same **4 passed, 1 failed (transcripts_present only), 14 skipped**,
snapshot 5 files, 12,776 bytes.

## Zero-fail QA (clean directory, 2026-11-25 ~15:30 WIB)

- Copied only the package files to a fresh `/tmp/qa-clean` and ran
  `OUTPUT_DIR=/tmp/qa-clean-out node main.ts` → exit 0, output
  sha256 identical to the build-machine runs (`2e84e56b…`), 100 words,
  599 chars.
- Secret/path scan over the package: no matches (no API keys, tokens,
  passwords, absolute/home paths; the only grep hit was the word
  "secretly" in README prose). No `rmSync` in `main.ts`.
