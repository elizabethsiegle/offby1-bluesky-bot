import { BskyAgent } from '@atproto/api';

async function post(env: Env, text: string) {
    
    // Post to Bluesky
    const agent = new BskyAgent({
        service: new URL('https://bsky.social')
    });
    await agent.login({
        identifier: env.BLUESKY_USERNAME,
        password: env.BLUESKY_PASSWORD
    });
	const record = await agent.post({
		text
	});
	console.log(JSON.stringify(record));
	return JSON.stringify(record);
}

export default {
	async scheduled(event, env, ctx) {
		console.log("cron processed");
		ctx.waitUntil(post(env, "It's 4:19, blaze it!"));
	}
} satisfies ExportedHandler<Env>;
