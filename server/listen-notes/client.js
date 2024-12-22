const { Client } = require("podcast-api");

module.exports = Client({
	apiKey: process.env.LISTEN_NOTES_API_KEY || undefined,
});
