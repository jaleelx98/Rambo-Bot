const _0x3453=['./commentText.txt','[>]\x20Number\x20of\x20Accounts\x20per\x20Delay:','[>]\x20Insert\x20Sleep\x20(In\x20MiliSeconds)','all','Feed','get','accountsPerDelay','Like','log','then','length','CookieMemoryStorage','random','floor','catch','split','create','instagram-private-api','getCursor','chunk','params','Delay\x20is\x20number','hastag','match','[>]\x20Insert\x20Hashtag:','resolve','request-promise','getSeconds','getAccount','Session','Comment','getHours','string','TaggedMedia','utf-8','getMinutes','hasLiked','username','readFileSync','input','isMoreAvailable','Can\x27t\x20Empty','prompt','password','session','[>]\x20Insert\x20Username:','sleep','chalk','request'];(function(_0xfc44a8,_0x345334){const _0x189143=function(_0x156f9c){while(--_0x156f9c){_0xfc44a8['push'](_0xfc44a8['shift']());}};_0x189143(++_0x345334);}(_0x3453,0x192));const _0x1891=function(_0xfc44a8,_0x345334){_0xfc44a8=_0xfc44a8-0x0;let _0x189143=_0x3453[_0xfc44a8];return _0x189143;};const _0x545234=_0x1891,Client=require(_0x545234('0x7'))['V1'],delay=require('delay'),chalk=require(_0x545234('0x25')),_=require('lodash'),rp=require(_0x545234('0x10')),S=require(_0x545234('0x16')),inquirer=require('inquirer');var fs=require('fs'),request=require(_0x545234('0x26'));const question=[{'type':_0x545234('0x1d'),'name':_0x545234('0x1b'),'message':_0x545234('0x23'),'validate':function(_0x156f9c){const _0x2800b8=_0x545234;if(!_0x156f9c)return _0x2800b8('0x1f');return!![];}},{'type':_0x545234('0x21'),'name':_0x545234('0x21'),'message':'[>]\x20Insert\x20Password:','mask':'*','validate':function(_0x3ee795){const _0x37bfe9=_0x545234;if(!_0x3ee795)return _0x37bfe9('0x1f');return!![];}},{'type':_0x545234('0x1d'),'name':_0x545234('0xc'),'message':_0x545234('0xe'),'validate':function(_0x516350){const _0x558d9d=_0x545234;if(!_0x516350)return _0x558d9d('0x1f');return!![];}},{'type':'input','name':_0x545234('0x2d'),'message':_0x545234('0x28'),'validate':function(_0x9e33cc){const _0x2d2578=_0x545234;_0x9e33cc=_0x9e33cc[_0x2d2578('0xd')](/[0-9]/);if(_0x9e33cc)return!![];return'Use\x20Number\x20Only!';}},{'type':_0x545234('0x1d'),'name':_0x545234('0x24'),'message':_0x545234('0x29'),'validate':function(_0x4f79c2){const _0x3ffce5=_0x545234;_0x4f79c2=_0x4f79c2[_0x3ffce5('0xd')](/[0-9]/);if(_0x4f79c2)return!![];return _0x3ffce5('0xb');}}],doLogin=async _0x4c45c7=>{const _0x51edde=_0x545234,_0x39f539=new Client['Device'](_0x4c45c7['username']),_0x363c79=new Client[(_0x51edde('0x1'))](),_0x2e8a12=new Client[(_0x51edde('0x13'))](_0x39f539,_0x363c79);try{await Client[_0x51edde('0x13')][_0x51edde('0x6')](_0x39f539,_0x363c79,_0x4c45c7['username'],_0x4c45c7[_0x51edde('0x21')]);const _0x24f792=await _0x2e8a12[_0x51edde('0x12')]();return Promise[_0x51edde('0xf')]({'session':_0x2e8a12,'account':_0x24f792});}catch(_0x301a10){return Promise['reject'](_0x301a10);}};async function ngeComment(_0x6816e,_0x35b83a,_0x567c2d){const _0x2de6ee=_0x545234;try{return await Client[_0x2de6ee('0x14')][_0x2de6ee('0x6')](_0x6816e,_0x35b83a,_0x567c2d),!![];}catch(_0x282f85){return![];}}async function ngeLike(_0x4d96d6,_0x391fa3){const _0x370170=_0x545234;try{return await Client[_0x370170('0x2e')][_0x370170('0x6')](_0x4d96d6,_0x391fa3),!![];}catch(_0x174bc0){return![];}}const doAction=async(_0xf8ed3c,_0x390137,_0x33bfb0)=>{const _0x366c4d=_0x545234;if(_0x390137[_0x366c4d('0x1a')])return chalk`{bold.blue Already Liked & Comment}`;const _0x45e3b7=[ngeLike(_0xf8ed3c,_0x390137['id']),ngeComment(_0xf8ed3c,_0x390137['id'],_0x33bfb0)];var [_0x5c4ba3,_0x58a96c]=await Promise[_0x366c4d('0x2a')](_0x45e3b7);return _0x58a96c=_0x58a96c?chalk`{bold.green Comment}`:chalk`{bold.red Comment}`,_0x5c4ba3=_0x5c4ba3?chalk`{bold.green Like}`:chalk`{bold.red Like}`,chalk`${_0x5c4ba3},${_0x58a96c} ({cyan ${_0x33bfb0}})`;},doMain=async(_0x3e9c68,_0x321fae,_0xf13ab0,_0x3468a5)=>{const _0x359719=_0x545234;try{var _0x764657=fs[_0x359719('0x1c')](_0x359719('0x27'),_0x359719('0x18'))[_0x359719('0x5')]('|');console[_0x359719('0x2f')](chalk`{yellow \n [?] Try to Login . . .}`);var _0x1091a5=await doLogin(_0x3e9c68);console['log'](chalk`{green [!] Login Success!}`);const _0x122b94=await new Client[(_0x359719('0x2b'))][(_0x359719('0x17'))](_0x1091a5[_0x359719('0x22')],_0x321fae);console[_0x359719('0x2f')](chalk`{cyan  [?] Like and Comment All Account In Hashtag: #${_0x321fae}}`);var _0x3e7e3e,_0xf5d6cd=0x0;do{if(_0x3e7e3e)_0x122b94['setCursor'](_0x3e7e3e);_0xf5d6cd++;var _0x54534f=await _0x122b94[_0x359719('0x2c')]();_0x54534f=_[_0x359719('0x9')](_0x54534f,_0x3468a5);for(_0x54534f of _0x54534f){var _0x56a47f=new Date();_0x56a47f=_0x56a47f[_0x359719('0x15')]()+':'+_0x56a47f[_0x359719('0x19')]()+':'+_0x56a47f[_0x359719('0x11')](),await Promise[_0x359719('0x2a')](_0x54534f['map'](async _0x28e1a6=>{const _0x32ad08=_0x359719,_0x4fbf1d=_0x764657[Math[_0x32ad08('0x3')](Math[_0x32ad08('0x2')]()*_0x764657[_0x32ad08('0x0')])],_0x190023=await doAction(_0x1091a5[_0x32ad08('0x22')],_0x28e1a6['params'],_0x4fbf1d);console['log'](chalk`[{magenta ${_0x56a47f}}] {cyanBright @${_0x28e1a6[_0x32ad08('0xa')]['account'][_0x32ad08('0x1b')]}} => ${_0x190023}`);})),console[_0x359719('0x2f')](chalk`{yellow \n [#][>][{cyan Account: ${_0x3e9c68[_0x359719('0x1b')]}}][{cyan Target: ${_0x321fae}}] Delay For ${_0xf13ab0} MiliSeconds [<][#] \n}`),await delay(_0xf13ab0);}_0x3e7e3e=await _0x122b94[_0x359719('0x8')]();}while(_0x122b94[_0x359719('0x1e')]());}catch(_0x6010b){console[_0x359719('0x2f')](_0x6010b);}};console[_0x545234('0x2f')](chalk`
  {bold.cyan
  —————————————————— [INFORMATION] ————————————————————

  [?] {bold.green Comment & Like | Using Hastag Target!}

  ——————————————————  [THANKS TO]  ————————————————————
  [✓] RAMBO BOT
  [✓] Codded by jaleel_x98 
  —————————————————————————————————————————————————————}
      `),inquirer[_0x545234('0x20')](question)[_0x545234('0x30')](_0x2112cf=>{const _0x36ee98=_0x545234;var _0x18f20e=_0x2112cf[_0x36ee98('0xc')][_0x36ee98('0x5')]('|');doMain({'username':_0x2112cf[_0x36ee98('0x1b')],'password':_0x2112cf[_0x36ee98('0x21')]},_0x18f20e,_0x2112cf[_0x36ee98('0x24')],_0x2112cf[_0x36ee98('0x2d')]);})[_0x545234('0x4')](_0x30d048=>{const _0x157da7=_0x545234;console[_0x157da7('0x2f')](_0x30d048);});