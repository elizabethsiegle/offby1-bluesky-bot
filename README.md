# Automate Posts to BlueSky with BlueSky API, Cloudflare Workers, Cron Triggers
This is a [Cloudflare Workers](https://workers.cloudflare.com/) application that makes use of [Cron Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/) to automate posting once a day to [Blue Sky](https://bsky.app/).

## Setup
Copy [.dev.vars.example][./.dev.vars.example] to `.dev.vars` and add your `BLUESKY_USERNAME` and `BLUESKY_PASSWORD`.

```bash
npm install
npx wrangler login # if it's your first time here
```

In [wrangler.toml](./wrangler.toml), you can set the time to post in the `crons` array beneath the `triggers` configuration. Reminder--cron tabs are written in UTC. I used the [Cloudflare Workers AI LLM Playground](https://playground.ai.cloudflare.com/) to generate my cron tabs.
![workers ai llm playground screenshot generating cron tabs](https://private-user-images.githubusercontent.com/8932430/386395825-3cd10de8-dbd9-42d6-8124-7d78a3b4b96e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE2MjU0NTEsIm5iZiI6MTczMTYyNTE1MSwicGF0aCI6Ii84OTMyNDMwLzM4NjM5NTgyNS0zY2QxMGRlOC1kYmQ5LTQyZDYtODEyNC03ZDc4YTNiNGI5NmUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTExNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDExMTRUMjI1OTExWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MmZmNTIwNmI4NWQxMDcxMTg2ZGFmNzYzNzkwOWUwMzNkYzM2YmM3YmFiMmI2OTM2MDQ3ODFjYWI4MWI5OWJhZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.oW9CCAHzkObh55ApIOlKUZQp3gwhBRIgVDYWo88-Nl8)

## Develop locally
```bash
npm run dev
```

## Deploy
```bash
npm run deploy
```