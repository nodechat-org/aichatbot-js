import Fosscord from "fosscord-monkey.js";
const client = new Fosscord.Client({
	intents: ["GUILD_MESSAGES"],

	http: {		//New default endpoints
		api: 'http://app.icey.fr:3001/api',
		cdn: 'http://app.icey.fr:3001/',
		invite: 'http://app.icey.fr:3001/invite',
	},
});

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.tag}`);
})

client.on("messageCreate", (msg) => {
	console.log(msg);
})

client.login("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNzE4MDE0OTcyNjUzMTMxNDciLCJpYXQiOjE2OTk0NDk2NDd9.4ro8qBHjy5UuzMALq6G6va3d_uL4odAuQFaKbgu9lN0");	//Token from instance