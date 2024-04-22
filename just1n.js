//Main.js
const client = new AoiClient({
    token: process.env['token'], // Lütfen Botunuzun Tokenini Giriniz, Aksi Halde Çalışmaz! Hata Verir.
    prefix: ["!"], // Botun Prefixini İstediğiniz Gibi Ayarlayabilirsiniz, Dilerseniz MultiPrefix Yapabilirsiniz! ["!", "Prefix 2"]
    // İntent & Event & Database İle Oynamayın!
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onJoin", "onLeave", "onBanAdd", "onBanRemove", "onChannelDelete", "onChannelUpdate", "onChannelCreate", "onRoleDelete", "onRoleUpdate", "onRoleCreate", "onGuildUpdate", "onGuildLeave", "onGuildJoin", "onInviteDelete", "onInviteCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "12345678910111213141516171819203",
    }});
//SoundCloud & Youtube
const voice = new AoiVoice(client, {
    searchOptions: {
        youtubeClient: "",
        youtubegl: "TR",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(client.functionManager.interpreter);

// Botun Eval Komutudur!
client.command({
    name: "eval",
    code: `
    $eval[$message]
    $onlyForIDs[$clientOwnerIDs;]`
});













































// Made By 💖 Just1N