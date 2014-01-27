# known-hosts

Parse ~/.ssh/known_hosts into a Javascript array

	npm install known-hosts

## Usage

``` js
var knownHosts = require('known-hosts');

console.log(knownHosts);
```

The above example will print out an array of the following form

``` js
[{
	host: 'github.com',
	publicKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDS...',
	fingerprint: '1627aca576282d36631b564debdfa648'
}, {
	host: '192.30.252.129'
	...
}]
```

The fingerprint is similar to the fingerprint in the ssh known host prompt (an md5 of the public key)

## License

MIT