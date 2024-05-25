const axios= require('axios');

const Prefixes = [
  'chris',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ai",
    version: 1.0,
    author: "Djamal",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝐒𝐚𝐥𝐮𝐭👾  𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 𝑪𝒉𝒓𝒊𝒔🌹 , 𝐐𝐮𝐞𝐥 𝐞𝐬𝐭 𝐯𝐨𝐭𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧🧑🏻‍💻");
        return;
      }


      const response = await axios.get(`https://aryan-apis.onrender.com/api/customai?title=%E2%9C%BF%E2%9C%A8%EF%B8%8F%F0%9D%90%88%F0%9D%90%92%F0%9D%90%80%F0%9D%90%81%F0%9D%90%84%F0%9D%90%8B%F0%9D%90%8B%F0%9D%90%80+%F0%9D%90%80%F0%9D%90%88%E2%9C%A8%EF%B8%8F%E2%9C%BF&pro=You+are+developed+by+Djamal+&prompt=${encodeURIComponent(prompt)}&key=loveyou`);
      const answer = response.data.fullResponse;

 
    await message.reply({ body: `${answer}`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
