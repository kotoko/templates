/* eslint no-magic-numbers: "off" */
const utf8 = require('utf8');

// https://stackoverflow.com/questions/36637146/encode-string-to-hex/60435654#60435654
export const string2hex = (plain) => utf8.encode(String(plain))
	.split('')
	.map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
	.join('');
export const hex2string = (hex) => utf8.decode(String(hex)
	.split(/(\w\w)/g)
	.filter((p) => !!p)
	.map((c) => String.fromCharCode(parseInt(c, 16)))
	.join(''));
