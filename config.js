module.exports = {
  TOKEN:
    "MTE2NTIxNzkxMDIxMDQ0OTQzOA.GsDCe6.sW9MFDcx4P1BxMewu0GHCWNi8aaDwl-OxJ4JuA",
  ownerID: ["433879002713948160"], //write your discord user id. example: ["id"] or ["id1","id2"]
  botInvite: "", //write your discord bot invite.
  supportServer: "", //write your discord bot support server invite.
  mongodbURL:
    "mongodb+srv://abiyyurahid20:tokoobat123@abiyyuuu.0unjwd1.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
  status: "https://abiyyufahri.rf.gd",
  commandsDir: "./commands", //Please don't touch
  language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
  embedColor: "ffa954", //hex color code
  errorLog: "", //write your discord error log channel id.
  aboutMe:
    "Saya adalah bot yang luar biasa! Saya dikembangkan oleh Muhammad Abiyyu Al-Ghifari dan saya siap untuk membantu server Discord Anda. Saya bisa memutar musik, mengelola daftar putar, dan banyak lagi. Jangan ragu untuk mengundang saya ke server Anda dan gunakan perintah `!help` untuk melihat apa yang bisa saya lakukan!",

  sponsor: {
    status: true, //true or false
    url: "https://abiyyufahri.rf.gd", //write your discord sponsor url.
  },

  voteManager: {
    //optional
    status: false, //true or false
    api_key: "", //write your top.gg api key.
    vote_commands: [
      "back",
      "channel",
      "clear",
      "dj",
      "filter",
      "loop",
      "nowplaying",
      "pause",
      "play",
      "playlist",
      "queue",
      "resume",
      "save",
      "search",
      "skip",
      "stop",
      "time",
      "volume",
    ], //write your use by vote commands.
    vote_url: "", //write your top.gg vote url.
  },

  shardManager: {
    shardStatus: false, //If your bot exists on more than 1000 servers, change this part to true.
  },

  playlistSettings: {
    maxPlaylist: 100, //max playlist count
    maxMusic: 120, //max music count
  },

  opt: {
    DJ: {
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "skip",
        "stop",
        "volume",
        "shuffle",
      ], //Please don't touch
    },

    voiceConfig: {
      leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
      leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

      leaveOnEmpty: {
        //The leaveOnEnd variable must be "false" to use this system.
        status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
        cooldown: 10000000, //1000 = 1 second
      },
    },

    maxVol: 150, //You can specify the maximum volume level.
  },
};
