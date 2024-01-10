const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 440, 570];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


// var username2 = process.env.username2;
// var password2 = process.env.password2;
// var shared_secret2 = process.env.shared2;

// var games2 = [1086940,730,570,682990,1151640,500,1966720,2499470,224540,346900,371140,217750,221380,813780,105450,933110,206500,945360,346110,407530,48190,201870,208480,554750,35140,238460,504370,113200,362890,236690,602490,49520,8980,729040,261640,293260,204360,544730,319050,219640,1591520,228200,4560,9340,20540,1782210,203770,223710,268910,211420,374320,262060,45740,814530,274940,861540,310560,205100,403640,435150,379720,367500,39190,39200,901638,206480,306130,72850,1135230,470260,204030,397060,22370,1265820,508790,304390,527230,1676840,242760,4000,469820,240720,1527910,431240,601840,209080,1145360,976730,239070,266510,657200,1157340,269210,297000,1092790,304430,295110,341800,1250,232090,1442170,368230,379430,496300,391720,550,469600,405310,12827301950440,213850,42910,238370,24980,2362420,17460,241930,48220,48220,1102190,320040,494720,261550,48700,323850162545,4920,548280,247730,711810109600,524220,1432050,466560,1393750,331600,427270,448510,218620,1240050,739630,218740,291650,17570,218230,1599600,688130,1599600,688130,315430,367450,400,620,201210,880940,200210,21690,391220,418460,632360,278100,252950,241600,1076200,4760,4770,270150,38720,91600,210770,1172620,34270,2400,2420,289070,47890,1222670,245170,725480,646570,473530,1104280,63380,1096530,544750,213670,355800,17390,996580,1948280,267130,6060,281990,674940,1332010,242640,1714040,221640,286160,1061610,105600, 299720,1112050, 359550,4700,364360,858820,269710,391540,1794680, 230410,251060,4570,4580,9450,9310,20570,55150,582500,526160,763890,559650,292030,210970,445980,327030,200510,268500,601510,433850,];  // Enter here AppIDs of the needed games
// var status2 = 1;  // 1 - online, 7 - invisible


// user2 = new steamUser();
// user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
// user2.on('loggedOn', () => {
// 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
// 	user2.setPersona(status2);               
// 	user2.gamesPlayed(games2);
// });
