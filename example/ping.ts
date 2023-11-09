import Fosscord from "../src/index"

const client = new Fosscord.Client({
	intents: [
		Fosscord.Intents.FLAGS.GUILD_MESSAGES
	],
	http: {
		api: 'http://app.icey.fr:3001/api',
		cdn: 'http://app.icey.fr:3001',
		invite: 'http://app.icey.fr:3001',
	}
});

client.on("ready", () => {
	console.log(`ready as ${client.user?.tag}`);
});

client.on("messageCreate", message => {
	console.log(`${message.author.tag} : ${message.content}`);

	if (message.content === "ping") {
		message.reply("pong");
	}
});

client.login("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNzE4MDE0OTcyNjUzMTMxNDciLCJpYXQiOjE2OTk0NDk2NDd9.4ro8qBHjy5UuzMALq6G6va3d_uL4odAuQFaKbgu9lN0");