import { BskyAgent } from '@atproto/api';

interface Env {
    BLUESKY_USERNAME: string;
    BLUESKY_PASSWORD: string;
    AI: any; // or more specifically: AI: AIRunner;
}

async function post(env: Env) {
	// Generate AI response based on input text
    const messages = [
        { role: "system", content: "You are a witty assistant who generates funny variations of '4:19 blaze it' jokes. The joke is that it's one minute too early. Keep responses under 300 characters and maintain a playful, anticipatory tone." },
        {
            role: "user",
            content: "Generate a creative variation of a '4:19 blaze it' joke. Examples: '4:19... almost there' or '4:19 loading...' or 'T minus 1 minute'"
        }
    ];
	const aiResponse = await env.AI.run("@cf/meta/llama-3.2-3b-instruct", { messages });
    const postText = aiResponse.response; // The AI-generated text
    
    // Post to Bluesky
    const agent = new BskyAgent({
        service: new URL('https://bsky.social')
    });
    await agent.login({
        identifier: env.BLUESKY_USERNAME,
        password: env.BLUESKY_PASSWORD
    });
	const record = await agent.post({
		text: postText
	});
	console.log(JSON.stringify(record));
	return JSON.stringify(record);
}

export default {
	async scheduled(event, env, ctx) {
		console.log("cron processed");
		ctx.waitUntil(post(env));
	}
} satisfies ExportedHandler<Env>;
