<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<script type="text/javascript">
		bindReady(
			function(){

				var Win1251 =
					{
						0x0:	0x0,
						0x1:	0x1,
						0x2:	0x2,
						0x3:	0x3,
						0x4:	0x4,
						0x5:	0x5,
						0x6:	0x6,
						0x7:	0x7,
						0x8:	0x8,
						0x9:	0x9,
						0xA:	0xA,
						0xB:	0xB,
						0xC:	0xC,
						0xD:	0xD,
						0xE:	0xE,
						0xF:	0xF,
						0x10:	0x10,
						0x11:	0x11,
						0x12:	0x12,
						0x13:	0x13,
						0x14:	0x14,
						0x15:	0x15,
						0x16:	0x16,
						0x17:	0x17,
						0x18:	0x18,
						0x19:	0x19,
						0x1A:	0x1A,
						0x1B:	0x1B,
						0x1C:	0x1C,
						0x1D:	0x1D,
						0x1E:	0x1E,
						0x1F:	0x1F,
						0x20:	0x20,
						0x21:	0x21,
						0x22:	0x22,
						0x23:	0x23,
						0x24:	0x24,
						0x25:	0x25,
						0x26:	0x26,
						0x27:	0x27,
						0x28:	0x28,
						0x29:	0x29,
						0x2A:	0x2A,
						0x2B:	0x2B,
						0x2C:	0x2C,
						0x2D:	0x2D,
						0x2E:	0x2E,
						0x2F:	0x2F,
						0x30:	0x30,
						0x31:	0x31,
						0x32:	0x32,
						0x33:	0x33,
						0x34:	0x34,
						0x35:	0x35,
						0x36:	0x36,
						0x37:	0x37,
						0x38:	0x38,
						0x39:	0x39,
						0x3A:	0x3A,
						0x3B:	0x3B,
						0x3C:	0x3C,
						0x3D:	0x3D,
						0x3E:	0x3E,
						0x3F:	0x3F,
						0x40:	0x40,
						0x41:	0x41,
						0x42:	0x42,
						0x43:	0x43,
						0x44:	0x44,
						0x45:	0x45,
						0x46:	0x46,
						0x47:	0x47,
						0x48:	0x48,
						0x49:	0x49,
						0x4A:	0x4A,
						0x4B:	0x4B,
						0x4C:	0x4C,
						0x4D:	0x4D,
						0x4E:	0x4E,
						0x4F:	0x4F,
						0x50:	0x50,
						0x51:	0x51,
						0x52:	0x52,
						0x53:	0x53,
						0x54:	0x54,
						0x55:	0x55,
						0x56:	0x56,
						0x57:	0x57,
						0x58:	0x58,
						0x59:	0x59,
						0x5A:	0x5A,
						0x5B:	0x5B,
						0x5C:	0x5C,
						0x5D:	0x5D,
						0x5E:	0x5E,
						0x5F:	0x5F,
						0x60:	0x60,
						0x61:	0x61,
						0x62:	0x62,
						0x63:	0x63,
						0x64:	0x64,
						0x65:	0x65,
						0x66:	0x66,
						0x67:	0x67,
						0x68:	0x68,
						0x69:	0x69,
						0x6A:	0x6A,
						0x6B:	0x6B,
						0x6C:	0x6C,
						0x6D:	0x6D,
						0x6E:	0x6E,
						0x6F:	0x6F,
						0x70:	0x70,
						0x71:	0x71,
						0x72:	0x72,
						0x73:	0x73,
						0x74:	0x74,
						0x75:	0x75,
						0x76:	0x76,
						0x77:	0x77,
						0x78:	0x78,
						0x79:	0x79,
						0x7A:	0x7A,
						0x7B:	0x7B,
						0x7C:	0x7C,
						0x7D:	0x7D,
						0x7E:	0x7E,
						0x7F:	0x7F,
						0x402:	0x80,
						0x403:	0x81,
						0x201A:	0x82,
						0x453:	0x83,
						0x201E:	0x84,
						0x2026:	0x85,
						0x2020:	0x86,
						0x2021:	0x87,
						0x20AC:	0x88,
						0x2030:	0x89,
						0x409:	0x8A,
						0x2039:	0x8B,
						0x40A:	0x8C,
						0x40C:	0x8D,
						0x40B:	0x8E,
						0x40F:	0x8F,
						0x452:	0x90,
						0x2018:	0x91,
						0x2019:	0x92,
						0x201C:	0x93,
						0x201D:	0x94,
						0x2022:	0x95,
						0x2013:	0x96,
						0x2014:	0x97,
						0x2122:	0x99,
						0x459:	0x9A,
						0x203A:	0x9B,
						0x45A:	0x9C,
						0x45C:	0x9D,
						0x45B:	0x9E,
						0x45F:	0x9F,
						0xA0:	0xA0,
						0x40E:	0xA1,
						0x45E:	0xA2,
						0x408:	0xA3,
						0xA4:	0xA4,
						0x490:	0xA5,
						0xA6:	0xA6,
						0xA7:	0xA7,
						0x401:	0xA8,
						0xA9:	0xA9,
						0x404:	0xAA,
						0xAB:	0xAB,
						0xAC:	0xAC,
						0xAD:	0xAD,
						0xAE:	0xAE,
						0x407:	0xAF,
						0xB0:	0xB0,
						0xB1:	0xB1,
						0x406:	0xB2,
						0x456:	0xB3,
						0x491:	0xB4,
						0xB5:	0xB5,
						0xB6:	0xB6,
						0xB7:	0xB7,
						0x451:	0xB8,
						0x2116:	0xB9,
						0x454:	0xBA,
						0xBB:	0xBB,
						0x458:	0xBC,
						0x405:	0xBD,
						0x455:	0xBE,
						0x457:	0xBF,
						0x410:	0xC0,
						0x411:	0xC1,
						0x412:	0xC2,
						0x413:	0xC3,
						0x414:	0xC4,
						0x415:	0xC5,
						0x416:	0xC6,
						0x417:	0xC7,
						0x418:	0xC8,
						0x419:	0xC9,
						0x41A:	0xCA,
						0x41B:	0xCB,
						0x41C:	0xCC,
						0x41D:	0xCD,
						0x41E:	0xCE,
						0x41F:	0xCF,
						0x420:	0xD0,
						0x421:	0xD1,
						0x422:	0xD2,
						0x423:	0xD3,
						0x424:	0xD4,
						0x425:	0xD5,
						0x426:	0xD6,
						0x427:	0xD7,
						0x428:	0xD8,
						0x429:	0xD9,
						0x42A:	0xDA,
						0x42B:	0xDB,
						0x42C:	0xDC,
						0x42D:	0xDD,
						0x42E:	0xDE,
						0x42F:	0xDF,
						0x430:	0xE0,
						0x431:	0xE1,
						0x432:	0xE2,
						0x433:	0xE3,
						0x434:	0xE4,
						0x435:	0xE5,
						0x436:	0xE6,
						0x437:	0xE7,
						0x438:	0xE8,
						0x439:	0xE9,
						0x43A:	0xEA,
						0x43B:	0xEB,
						0x43C:	0xEC,
						0x43D:	0xED,
						0x43E:	0xEE,
						0x43F:	0xEF,
						0x440:	0xF0,
						0x441:	0xF1,
						0x442:	0xF2,
						0x443:	0xF3,
						0x444:	0xF4,
						0x445:	0xF5,
						0x446:	0xF6,
						0x447:	0xF7,
						0x448:	0xF8,
						0x449:	0xF9,
						0x44A:	0xFA,
						0x44B:	0xFB,
						0x44C:	0xFC,
						0x44D:	0xFD,
						0x44E:	0xFE,
						0x44F:	0xFF
					}

				String.prototype.Win1251_charCodeAt=function(char_num){
					var char_code=this.charCodeAt(char_num);
					return (char_code===undefined)?0x98:Win1251[char_code];
				}

				function utf8_decode(text){
					text=text.replace(/ /g,"\u00A0");
					var char_code, char_code2, char_code3, char_code4;
					var result_str='';
					for(var char_num=0; char_num<text.length; char_num++)
						if((char_code=text.Win1251_charCodeAt(char_num))<0x80 || char_code===text.charCodeAt(char_num))
							result_str+=text.charAt(char_num);//0zzzzzzz - 00000000 00000000 00000000 0zzzzzzz
						else if(char_code>=0xC0)
							if(char_code<0xE0){
								if(
									(char_code2=text.Win1251_charCodeAt(++char_num))>=0x80 &&
									char_code2<0xC0
								)//110yyyyy 10zzzzzz - 00000000 00000000 00000yyy yyzzzzzz
									result_str+="&#"+((char_code-0xC0)*0x40+(char_code2-0x80))+";";
							}
							else if(char_code<0xF0){
								if(
									(char_code2=text.Win1251_charCodeAt(++char_num))>=0x80 &&
									char_code2<0xC0 &&
									(char_code3=text.Win1251_charCodeAt(++char_num))>=0x80 &&
									char_code3<0xC0
								)//1110xxxx 10yyyyyy 10zzzzzz - 00000000 00000000 xxxxyyyy yyzzzzzz
									result_str+="&#"+((char_code-0xE0)*0x1000+(char_code2-0x80)*0x40+(char_code3-0x80))+";";
							}
							else if(
								char_code<0xF8 &&
								(char_code2=text.Win1251_charCodeAt(++char_num))>=0x80 &&
								char_code2<0xC0 &&
								(char_code3=text.Win1251_charCodeAt(++char_num))>=0x80 &&
								char_code3<0xC0 &&
								(char_code4=text.Win1251_charCodeAt(++char_num))>=0x80 && char_code4<0xC0
							)//11110www 10xxxxxx 10yyyyyy 10zzzzzz - 00000000 000wwwxx xxxxyyyy yyzzzzzz
								result_str+="&#"+((char_code-0xF0)*0x40000+(char_code2-0x80)*0x1000+(char_code3-0x80)*0x40+(char_code4-0x80))+";";
				    return result_str;
				}

				function unescapeTitle(title){
					return unescape(
						utf8_decode(document.title).replace(
							/&#([0-9]+);/g,
							function(expression, value){
								if(isNaN(value=parseInt(value, 10)))
									return NaN;
								var i=0, retval="", radix=16;
								while(i++<4 || value>0){
									retval=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"][value%radix]+retval;	
									value=Math.floor(value/radix);
								}
								return "%u"+retval;
							}
						)
					);
				}

				document.body.innerHTML=utf8_decode(document.body.innerHTML);
				if("vendor" in navigator && navigator.vendor.indexOf("Apple")>-1){
					document.title=unescapeTitle(document.title);
					return;
				}
				/*@cc_on
				document.title=unescapeTitle(document.title);
				return;
				@*/
				document.getElementsByTagName("title")[0].innerHTML=utf8_decode(document.title);
			}
		);
	</script>
</body>
</html>