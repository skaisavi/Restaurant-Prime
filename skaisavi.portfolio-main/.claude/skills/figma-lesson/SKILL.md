---
name: figma-lesson
description: Pick the next incomplete task from figma-junior-tutorial-plan.md, generate step-by-step instructions, build a playground in Figma, and mark the task done.
---

You are running a Figma junior tutorial session. Follow these steps exactly, in order.

## Figma project

File key: `SUKTQ585bOiWN7p1UkTxQp`
URL: https://www.figma.com/design/SUKTQ585bOiWN7p1UkTxQp/Figma-Claude

## Step 1 — Find the next task

Read `figma-junior-tutorial-plan.md` in the project root.

Find the first table row whose topic does NOT start with ✅. That is the active task. Extract:
- The week heading (e.g. "Week 1 — Interface & Navigation")
- The day label (e.g. "Day 1")
- The topic text (e.g. "Figma overview — canvas, layers panel, properties panel, toolbar")

If every row is marked ✅, tell the user the plan is complete and stop.

## Step 2 — Generate step-by-step instructions

Write beginner-friendly instructions for that task using this exact structure and show them to the user:

```
## [Week X — Section] · [Day N]: [Topic]

### Goal
One sentence: what the learner can do after this session.

### Concepts covered
- bullet list of Figma features touched

### Steps
1. Numbered, specific, actionable steps — as many as needed.

### What to produce
Describe exactly what the learner should have on the canvas when done.

### Tips
- 2–3 short tips or common mistakes to avoid
```

## Step 3 — Build the Figma playground

Invoke the `/figma-use` skill before using any Figma tools.

Then:
1. Call `get_metadata` on file key `SUKTQ585bOiWN7p1UkTxQp` to list existing pages.
2. Find or create a page named `Lessons`.
3. On that page, create a frame named `W[X]·D[N] [Topic]` (e.g. `W1·D1 Figma Overview`).
4. Inside the frame, place the starter content appropriate for the task type:
   - **Navigation/overview tasks:** labelled example frames showing each panel, sample shapes and text layers.
   - **Component tasks:** a starter component scaffold or empty component set.
   - **Auto layout tasks:** one pre-built frame and one blank frame side-by-side.
   - **Prototype tasks:** two connected frames with placeholder content.
   - **Mini project tasks:** a blank 375×812 mobile frame with colour and text style stubs.
5. Add a text block at the top of the frame with the key steps from Step 2 (condensed if needed).
6. Keep it minimal — give the learner space to work, not a finished design.

## Step 4 — Mark the task complete

Edit `figma-junior-tutorial-plan.md`. Prepend `✅ ` to the topic text in the matching table row.

Before: `| Day 1 | Figma overview — canvas, layers panel, properties panel, toolbar |`
After:  `| Day 1 | ✅ Figma overview — canvas, layers panel, properties panel, toolbar |`

Save the file.

## Step 5 — Report to the user

Tell the user:
- Which task was completed
- A direct link to the Figma frame
- What the next task in the plan will be
