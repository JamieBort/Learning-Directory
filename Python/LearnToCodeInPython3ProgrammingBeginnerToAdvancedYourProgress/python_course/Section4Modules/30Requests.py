# NOTE: The files
# ./LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/30Requests.py
# ./LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/31SendingHTTPRequestsToAPIs.py
# and
# ./LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/32WorkingWithJSON.py
# are related - they should be kept together/learned together/etc.

# Matplotlib is an external module.
# External modules need to be installed.
# to install this requests library type 'pip install requests' in the commnand line.
# it was already installed. I didn't update it.

# we'll be using these libraries in other lessons:
# https://matplotlib.org/
# https://scikit-learn.org/stable/
# https://www.pygame.org/news
# https://www.scipy.org/
# https://www.sqlalchemy.org/
# https://wxpython.org/
# https://requests.readthedocs.io/en/master/

import requests
r = requests.get("https://www.google.com") #send request using the get() method
print("The response/status code:")
print(r.status_code) # Hoping for a 200 response.
# The following is the response: 
# 200

# printing the headers of the requests
print("Printing the headers of the requests:")
print(r.headers)
# The following is the response: 
# {'Cache-Control': 'private, max-age=0', 'Date': 'Wed, 18 Mar 2020 20:42:38 GMT', 'Expires': '-1', 'Content-Encoding': 'gzip', 'X-XSS-Protection': '0', 'X-Frame-Options': 'SAMEORIGIN', 'P3P': 'CP="This is not a P3P policy! See g.co/p3phelp for more info."', 'Content-Type': 'text/html; charset=ISO-8859-1', 'Set-Cookie': '1P_JAR=2020-03-18-20; expires=Fri, 17-Apr-2020 20:42:38 GMT; path=/; domain=.google.com; Secure, NID=200=Gaojr9RZGUlhTK06u9kiBoC5HvVUnV87DA9-awGcMBPxl0DpvCczJZyBkTUtVNoLSGBEgsx3wnAKIueoWA4E9Po3O9q-6w3IcxOgD-Z-0FiaWyO1PiX27vsAKTNbDien4LvVrhqkT9ZD34mdq8LeOT_uxLCFkdva5xFq0vyncWo; expires=Thu, 17-Sep-2020 20:42:38 GMT; path=/; domain=.google.com; HttpOnly', 'Server': 'gws', 'Alt-Svc': 'quic=":443"; ma=2592000; v="46,43",h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,h3-T050=":443"; ma=2592000', 'Transfer-Encoding': 'chunked'}

print("The date:")
print(r.headers["Date"]) 
# The following is the response: 
# Wed, 18 Mar 2020 20:42:38 GMT

print("The body of the response:")
print(r.text)
# The following is the response: 
# <!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for." name="description"><meta content="noodp" name="robots"><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="dGFSXMSmuEPrhjRKZyfOZg==">(function(){window.google={kEI:'SIhyXvX7Kqyl_Qb6wKSADA',kEXPI:'0,1353747,5662,730,224,756,4348,207,3204,10,1051,175,364,1435,4,60,155,548,39,75,383,246,5,625,234,139,19,337,373,400,39,28,76,5,12,279,18,7,414352,712177,1197783,241,125,41,329077,1294,12383,4855,32692,15247,867,2236,15208,11240,364,8824,8384,1326,3532,1362,4323,4968,3022,4745,3118,7915,1808,4020,978,4788,1,3142,5297,2054,920,873,1217,2975,2784,3646,1142,7451,2715,2881,17,322,3172,1347,2775,520,399,2277,8,3685,704,1279,2212,202,328,149,562,541,327,513,517,1466,8,48,820,3438,312,1135,1,3,2063,606,1839,184,1777,143,377,1947,245,502,283,1,145,1053,93,330,1282,16,2927,2246,474,1339,29,719,1039,3227,773,2072,7,1320,4279,2034,5060,1453,2663,641,2450,2458,1226,1406,56,280,3654,1275,108,1446,37,1924,908,2,1473,2082,1883,249,265,5419,225,996,830,1,839,185,2,87,206,1523,244,188,3,346,200,187,813,183,388,40,133,121,1,377,90,729,690,124,1907,440,266,149,189,1984,1329,166,104,232,1,240,1601,6,138,28,130,1,698,2,1062,57,274,121,87,173,214,600,1211,49,2,141,921,423,1580,211,4,443,1085,143,145,33,240,75,2,1,2,300,268,24,599,472,154,302,361,141,235,123,132,59,198,111,49,232,284,385,2,18,35,4,63,594,91,388,84,32,99,179,2,2,123,140,5835849,1805894,4194916,2801106,549,333,444,1,2,80,1,900,896,1,8,1,2,2551,1,748,141,59,736,563,1,4265,1,1,1,1,137,1,1193,641,5,76,20,3,1,328,18,20,1,59,1,13,1,3364555,17378641,3220020,24',kBL:'sClC'};google.sn='webhp';google.kHL='en';})();(function(){google.lc=[];google.li=0;google.getEI=function(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||google.kEI};google.getLEI=function(a){for(var b=null;a&&(!a.getAttribute||!(b=a.getAttribute("leid")));)a=a.parentNode;return b};google.ml=function(){return null};google.time=function(){return Date.now()};google.log=function(a,b,e,c,g){if(a=google.logUrl(a,b,e,c,g)){b=new Image;var d=google.lc,f=google.li;d[f]=b;b.onerror=b.onload=b.onabort=function(){delete d[f]};google.vel&&google.vel.lu&&google.vel.lu(a);b.src=a;google.li=f+1}};google.logUrl=function(a,b,e,c,g){var d="",f=google.ls||"";e||-1!=b.search("&ei=")||(d="&ei="+google.getEI(c),-1==b.search("&lei=")&&(c=google.getLEI(c))&&(d+="&lei="+c));c="";!e&&google.cshid&&-1==b.search("&cshid=")&&"slh"!=a&&(c="&cshid="+google.cshid);a=e||"/"+(g||"gen_204")+"?atyp=i&ct="+a+"&cad="+b+d+f+"&zx="+google.time()+c;/^http:/i.test(a)&&"https:"==window.location.protocol&&(google.ml(Error("a"),!1,{src:a,glmm:1}),a="");return a};}).call(this);(function(){google.y={};google.x=function(a,b){if(a)var c=a.id;else{do c=Math.random();while(google.y[c])}google.y[c]=[a,b];return!1};google.lm=[];google.plm=function(a){google.lm.push.apply(google.lm,a)};google.lq=[];google.load=function(a,b,c){google.lq.push([[a],b,c])};google.loadAll=function(a,b){google.lq.push([a,b])};}).call(this);google.f={};(function(){ document.documentElement.addEventListener("submit",function(b){var a;if(a=b.target){var c=a.getAttribute("data-submitfalse");a="1"==c||"q"==c&&!a.elements.q.value?!0:!1}else a=!1;a&&(b.preventDefault(),b.stopPropagation())},!0);document.documentElement.addEventListener("click",function(b){var a;a:{for(a=b.target;a&&a!=document.documentElement;a=a.parentElement)if("A"==a.tagName){a="1"==a.getAttribute("data-nohref");break a}a=!1}a&&b.preventDefault()},!0);}).call(this); var a=window.location,b=a.href.indexOf("#");if(0<=b){var c=a.href.substring(b+1);/(^|&)q=/.test(c)&&-1==c.indexOf("#")&&a.replace("/search?"+c.replace(/(^|&)fp=[^&]*/g,"")+"&cad=h")};</script><style>#gbar,#guser{font-size:13px;padding-top:1px !important;}#gbar{height:22px}#guser{padding-bottom:7px !important;text-align:right}.gbh,.gbd{border-top:1px solid #c9d7f1;font-size:1px}.gbh{height:0;position:absolute;top:24px;width:100%}@media all{.gb1{height:22px;margin-right:.5em;vertical-align:top}#gbar{float:left}}a.gb1,a.gb4{text-decoration:underline !important}a.gb1,a.gb4{color:#00c !important}.gbi .gb4{color:#dd8e27 !important}.gbf .gb4{color:#900 !important} </style><style>body,td,a,p,.h{font-family:arial,sans-serif}body{margin:0;overflow-y:scroll}#gog{padding:3px 8px 0}td{line-height:.8em}.gac_m td{line-height:17px}form{margin-bottom:20px}.h{color:#36c}.q{color:#00c}.ts td{padding:0}.ts{border-collapse:collapse}em{font-weight:bold;font-style:normal}.lst{height:25px;width:496px}.gsfi,.lst{font:18px arial,sans-serif}.gsfs{font:17px arial,sans-serif}.ds{display:inline-box;display:inline-block;margin:3px 0 4px;margin-left:4px}input{font-family:inherit}body{background:#fff;color:#000}a{color:#11c;text-decoration:none}a:hover,a:active{text-decoration:underline}.fl a{color:#36c}a:visited{color:#551a8b}.sblc{padding-top:5px}.sblc a{display:block;margin:2px 0;margin-left:13px;font-size:11px}.lsbb{background:#eee;border:solid 1px;border-color:#ccc #999 #999 #ccc;height:30px}.lsbb{display:block}.ftl,#fll a{display:inline-block;margin:0 12px}.lsb{background:url(/images/nav_logo229.png) 0 -261px repeat-x;border:none;color:#000;cursor:pointer;height:30px;margin:0;outline:0;font:15px arial,sans-serif;vertical-align:top}.lsb:active{background:#ccc}.lst:focus{outline:none}</style><script nonce="dGFSXMSmuEPrhjRKZyfOZg=="></script></head><body bgcolor="#fff"><script nonce="dGFSXMSmuEPrhjRKZyfOZg==">(function(){var src='/images/nav_logo229.png';var iesg=false;document.body.onload = function(){window.n && window.n();if (document.images){new Image().src=src;} if (!iesg){document.f&&document.f.q.focus();document.gbqf&&document.gbqf.q.focus();}}})();</script><div id="mngb"> <div id=gbar><nobr><b class=gb1>Search</b> <a class=gb1 href="https://www.google.com/imghp?hl=en&tab=wi">Images</a> <a class=gb1 href="https://maps.google.com/maps?hl=en&tab=wl">Maps</a> <a class=gb1 href="https://play.google.com/?hl=en&tab=w8">Play</a> <a class=gb1 href="https://www.youtube.com/?gl=US&tab=w1">YouTube</a> <a class=gb1 href="https://news.google.com/nwshp?hl=en&tab=wn">News</a> <a class=gb1 href="https://mail.google.com/mail/?tab=wm">Gmail</a> <a class=gb1 href="https://drive.google.com/?tab=wo">Drive</a> <a class=gb1 style="text-decoration:none" href="https://www.google.com/intl/en/about/products?tab=wh"><u>More</u> &raquo;</a></nobr></div><div id=guser width=100%><nobr><span id=gbn class=gbi></span><span id=gbf class=gbf></span><span id=gbe></span><a href="http://www.google.com/history/optout?hl=en" class=gb4>Web History</a> | <a  href="/preferences?hl=en" class=gb4>Settings</a> | <a target=_top id=gb_70 href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/" class=gb4>Sign in</a></nobr></div><div class=gbh style=left:0></div><div class=gbh style=right:0></div> </div><center><br clear="all" id="lgpd"><div id="lga"><img alt="Google" height="92" src="/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png" style="padding:28px 0 14px" width="272" id="hplogo"><br><br></div><form action="/search" name="f"><table cellpadding="0" cellspacing="0"><tr valign="top"><td width="25%">&nbsp;</td><td align="center" nowrap=""><input name="ie" value="ISO-8859-1" type="hidden"><input value="en" name="hl" type="hidden"><input name="source" type="hidden" value="hp"><input name="biw" type="hidden"><input name="bih" type="hidden"><div class="ds" style="height:32px;margin:4px 0"><input class="lst" style="margin:0;padding:5px 8px 0 6px;vertical-align:top;color:#000" autocomplete="off" value="" title="Google Search" maxlength="2048" name="q" size="57"></div><br style="line-height:0"><span class="ds"><span class="lsbb"><input class="lsb" value="Google Search" name="btnG" type="submit"></span></span><span class="ds"><span class="lsbb"><input class="lsb" id="tsuid1" value="I'm Feeling Lucky" name="btnI" type="submit"><script nonce="dGFSXMSmuEPrhjRKZyfOZg==">(function(){var id='tsuid1';document.getElementById(id).onclick = function(){if (this.form.q.value){this.checked = 1;if (this.form.iflsig)this.form.iflsig.disabled = false;} else top.location='/doodles/';};})();</script><input value="AINFCbYAAAAAXnKWWAaku4-w06oc-TxsU4o7SfDnr0ZN" name="iflsig" type="hidden"></span></span></td><td class="fl sblc" align="left" nowrap="" width="25%"><a href="/advanced_search?hl=en&amp;authuser=0">Advanced search</a></td></tr></table><input id="gbv" name="gbv" type="hidden" value="1"><script nonce="dGFSXMSmuEPrhjRKZyfOZg==">(function(){var a,b="1";if(document&&document.getElementById)if("undefined"!=typeof XMLHttpRequest)b="2";else if("undefined"!=typeof ActiveXObject){var c,d,e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(c=0;d=e[c++];)try{new ActiveXObject(d),b="2"}catch(h){}}a=b;if("2"==a&&-1==location.search.indexOf("&gbv=2")){var f=google.gbvu,g=document.getElementById("gbv");g&&(g.value=a);f&&window.setTimeout(function(){location.href=f},0)};}).call(this);</script></form><div id="gac_scont"></div><div style="font-size:83%;min-height:3.5em"><br><div id="prm"><style>.szppmdbYutt__middle-slot-promo{font-size:small;margin-bottom:32px}.szppmdbYutt__middle-slot-promo a.ZIeIlb{display:inline-block;text-decoration:none}.szppmdbYutt__middle-slot-promo img{border:none;margin-right:5px;vertical-align:middle}</style><div class="szppmdbYutt__middle-slot-promo" data-ved="0ahUKEwj1v52A8qToAhWsUt8KHXogCcAQnIcBCAQ"><img height="45" src="https://www.gstatic.com/images/hpp/dothefive_90x90t.gif" width="45"><a class="NKcBbd" href="https://www.google.com/url?q=https://www.google.com/search%3Fq%3Dcoronavirus%2Btips%26fbx%3Ddothefive&amp;source=hpp&amp;id=19016691&amp;ct=3&amp;usg=AFQjCNHAHhk4de-HLAcc0MuxWVmzNQwmow&amp;sa=X&amp;ved=0ahUKEwj1v52A8qToAhWsUt8KHXogCcAQ8IcBCAU" rel="nofollow">   DO THE FIVE. Help stop coronavirus</a></div></div></div><span id="footer"><div style="font-size:10pt"><div style="margin:19px auto;text-align:center" id="fll"><a href="/intl/en/ads/">Advertising Programs</a><a href="/services/">Business Solutions</a><a href="/intl/en/about.html">About Google</a></div></div><p style="font-size:8pt;color:#767676">&copy; 2020 - <a href="/intl/en/policies/privacy/">Privacy</a> - <a href="/intl/en/policies/terms/">Terms</a></p></span></center><script nonce="dGFSXMSmuEPrhjRKZyfOZg==">(function(){window.google.cdo={height:0,width:0};(function(){var a=window.innerWidth,b=window.innerHeight;if(!a||!b){var c=window.document,d="CSS1Compat"==c.compatMode?c.documentElement:c.body;a=d.clientWidth;b=d.clientHeight}a&&b&&(a!=google.cdo.width||b!=google.cdo.height)&&google.log("","","/client_204?&atyp=i&biw="+a+"&bih="+b+"&ei="+google.kEI);}).call(this);})();(function(){var u='/xjs/_/js/k\x3dxjs.hp.en_US.pJltW1x-SVY.O/m\x3dsb_he,d/am\x3dgAEBNgI/d\x3d1/rs\x3dACT90oElDHKrvRcSSM3d9lyEUQ8hSPufPw'; setTimeout(function(){var b=document;var a="SCRIPT";"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());a=b.createElement(a);a.src=u;google.timers&&google.timers.load&&google.tick&&google.tick("load","xjsls");document.body.appendChild(a)},0);})();(function(){window.google.xjsu='/xjs/_/js/k\x3dxjs.hp.en_US.pJltW1x-SVY.O/m\x3dsb_he,d/am\x3dgAEBNgI/d\x3d1/rs\x3dACT90oElDHKrvRcSSM3d9lyEUQ8hSPufPw';})();function _DumpException(e){throw e;} function _F_installCss(c){} (function(){google.spjs=false;google.snet=true;google.em=[];google.emw=false;google.pdt=0;})();(function(){var pmc='{\x22d\x22:{},\x22sb_he\x22:{\x22agen\x22:true,\x22cgen\x22:true,\x22client\x22:\x22heirloom-hp\x22,\x22dh\x22:true,\x22dhqt\x22:true,\x22ds\x22:\x22\x22,\x22ffql\x22:\x22en\x22,\x22fl\x22:true,\x22host\x22:\x22google.com\x22,\x22isbh\x22:28,\x22jsonp\x22:true,\x22msgs\x22:{\x22cibl\x22:\x22Clear Search\x22,\x22dym\x22:\x22Did you mean:\x22,\x22lcky\x22:\x22I\\u0026#39;m Feeling Lucky\x22,\x22lml\x22:\x22Learn more\x22,\x22oskt\x22:\x22Input tools\x22,\x22psrc\x22:\x22This search was removed from your \\u003Ca href\x3d\\\x22/history\\\x22\\u003EWeb History\\u003C/a\\u003E\x22,\x22psrl\x22:\x22Remove\x22,\x22sbit\x22:\x22Search by image\x22,\x22srch\x22:\x22Google Search\x22},\x22ovr\x22:{},\x22pq\x22:\x22\x22,\x22refpd\x22:true,\x22rfs\x22:[],\x22sbpl\x22:16,\x22sbpr\x22:16,\x22scd\x22:10,\x22stok\x22:\x22LSxUuQ8JVqxJWeZ713D9zN7DOYU\x22,\x22uhde\x22:false}}';google.pmc=JSON.parse(pmc);})();</script>        </body></html>