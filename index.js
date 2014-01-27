var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

var HOME = process.env.HOME || process.env.USERPROFILE;
var KNOWN_HOSTS = path.join(HOME, '.ssh', 'known_hosts');

var md5 = function(host) {
	return crypto.createHash('md5').update(host, 'base64').digest('hex');
};

var data = fs.existsSync(KNOWN_HOSTS) ? fs.readFileSync(KNOWN_HOSTS, 'utf-8').trim().split('\n') : [];
var entries = [];

data.forEach(function(entry) {
	var i = entry.indexOf(' ');
	if (i === -1) return;

	var hosts = entry.slice(0, i).trim().split(',');
	var key = entry.slice(i+1);
	var fingerprint = md5(key.split(' ').pop());

	hosts.forEach(function(host) {
		entries.push({
			host: host,
			publicKey: key,
			fingerprint: fingerprint
		});
	});
});

module.exports = entries;