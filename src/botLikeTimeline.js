const _0x3ca5=['delay','sleep','setCursor','resolve','session','Timeline','password','params','hasLiked','Session','CookieMemoryStorage','length','Can\x27t\x20Empty','match','instagram-private-api','Like','[>]\x20Insert\x20Sleep\x20(MiliSeconds):','username','all','prompt','Delay\x20is\x20number','isMoreAvailable','inquirer','chunk','create','chalk','input','log','map','reject','Device','Feed','user','getAccount'];(function(_0x1af9f7,_0x3ca55c){const _0x4c51d1=function(_0x4d4ce8){while(--_0x4d4ce8){_0x1af9f7['push'](_0x1af9f7['shift']());}};_0x4c51d1(++_0x3ca55c);}(_0x3ca5,0xe6));const _0x4c51=function(_0x1af9f7,_0x3ca55c){_0x1af9f7=_0x1af9f7-0x0;let _0x4c51d1=_0x3ca5[_0x1af9f7];return _0x4c51d1;};const _0x4904d1=_0x4c51;'use strict';const Client=require(_0x4904d1('0x16'))['V1'],delay=require(_0x4904d1('0x8')),chalk=require(_0x4904d1('0x21')),_=require('lodash'),inquirer=require(_0x4904d1('0x1e')),User=[{'type':_0x4904d1('0x0'),'name':'username','message':'[>]\x20Insert\x20Username:','validate':function(_0x4d4ce8){if(!_0x4d4ce8)return'Can\x27t\x20Empty';return!![];}},{'type':_0x4904d1('0xe'),'name':_0x4904d1('0xe'),'message':'[>]\x20Insert\x20Password:','mask':'*','validate':function(_0x264d1b){const _0x2748e7=_0x4904d1;if(!_0x264d1b)return _0x2748e7('0x14');return!![];}},{'type':_0x4904d1('0x0'),'name':_0x4904d1('0x9'),'message':_0x4904d1('0x18'),'validate':function(_0x5e5f0a){const _0x33d2eb=_0x4904d1;_0x5e5f0a=_0x5e5f0a[_0x33d2eb('0x15')](/[0-1]/);if(_0x5e5f0a)return!![];return _0x33d2eb('0x1c');}}],Login=async function(_0x1ee2be){const _0x3afe1d=_0x4904d1,_0x5c12ed=new Client[(_0x3afe1d('0x4'))](_0x1ee2be[_0x3afe1d('0x19')]),_0x151f6f=new Client[(_0x3afe1d('0x12'))](),_0x9a1489=new Client[(_0x3afe1d('0x11'))](_0x5c12ed,_0x151f6f);try{await Client[_0x3afe1d('0x11')]['create'](_0x5c12ed,_0x151f6f,_0x1ee2be[_0x3afe1d('0x19')],_0x1ee2be[_0x3afe1d('0xe')]);const _0xce1165=await _0x9a1489[_0x3afe1d('0x7')]();return Promise[_0x3afe1d('0xb')]({'session':_0x9a1489,'account':_0xce1165});}catch(_0x415c45){return Promise[_0x3afe1d('0x3')](_0x415c45);}},Like=async function(_0x1079d5,_0x286a4c){const _0xb5505e=_0x4904d1;try{if(_0x286a4c[_0xb5505e('0xf')][_0xb5505e('0x10')])return chalk`{bold.blue Already Liked}`;return await Client[_0xb5505e('0x17')][_0xb5505e('0x20')](_0x1079d5,_0x286a4c['id']),chalk`{bold.green Success Like}`;}catch(_0x1bfe65){return chalk`{bold.red Failed Like}`;}},Excute=async function(_0x1bf297,_0x486558){const _0x5aae9b=_0x4904d1;try{console[_0x5aae9b('0x1')](chalk`\n{yellow [?] Try to Login . . .}`);const _0x5375d5=await Login(_0x1bf297);console[_0x5aae9b('0x1')](chalk`{green [!] Login Succsess}, {yellow [?] Try Like All Media in Feed / Timeline . . .\n}`);const _0x40635b=new Client[(_0x5aae9b('0x5'))][(_0x5aae9b('0xd'))](_0x5375d5['session']);var _0x331b1d;do{if(_0x331b1d)_0x40635b[_0x5aae9b('0xa')](_0x331b1d);var _0x549bd4=await _0x40635b['get'](0x1);_0x549bd4=_[_0x5aae9b('0x1f')](_0x549bd4,0x1);for(var _0x37b1a7=0x0;_0x37b1a7<_0x549bd4[_0x5aae9b('0x13')];_0x37b1a7++){await Promise[_0x5aae9b('0x1a')](_0x549bd4[_0x37b1a7][_0x5aae9b('0x2')](async _0x24c5dc=>{const _0x498a84=_0x5aae9b,_0x15be04=await Like(_0x5375d5[_0x498a84('0xc')],_0x24c5dc);console[_0x498a84('0x1')](chalk`[{bold.green Username:}] ${_0x24c5dc[_0x498a84('0xf')][_0x498a84('0x6')]['username']}\n[{cyan ${_0x24c5dc['id']}}] => [${_0x15be04}]`);})),await console[_0x5aae9b('0x1')](chalk`{yellow \n [#][>] Delay For ${_0x486558} MiliSeconds [<][#] \n}`),await delay(_0x486558);}}while(_0x40635b[_0x5aae9b('0x1d')]());}catch(_0x32e4bd){console[_0x5aae9b('0x1')](_0x32e4bd);}};console[_0x4904d1('0x1')](chalk`
 {bold.cyan
  —————————————————— [INFORMATION] ————————————————————

  [?] {bold.green Feed Liker}

   ——————————————————  [THANKS TO]  ————————————————————
    [✓] RAMBO BOT
    [✓] Codded by jaleel_x98 
  —————————————————————————————————————————————————————}
      `),inquirer[_0x4904d1('0x1b')](User)['then'](_0x4344cb=>{const _0x3bb301=_0x4904d1;Excute({'username':_0x4344cb[_0x3bb301('0x19')],'password':_0x4344cb[_0x3bb301('0xe')]},_0x4344cb[_0x3bb301('0x9')]);});