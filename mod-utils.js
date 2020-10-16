"use strict";
var BCModUtils = {
	onDocumentLoaded: function () {
		return new Promise((res, rej) => {
			if (document.readyState === "complete") {
				res();
			} else {
				window.addEventListener("load", res)
			}
		})
	},
	camelize: function (str) {
		return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
			if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
			return index === 0 ? match.toLowerCase() : match.toUpperCase();
		});
	},
	mapArguments: function (keys, argv, defaultKey) {
		if (!Array.isArray(keys)) keys = Object.keys(keys);
		defaultKey = defaultKey || keys[0]
		if (!Array.isArray(argv)) return argv;
		if (argv.length == 1) return { [defaultKey]: argv[0] }
		return keys.reduce((obj, key, i) => (obj[key] = argv[i], obj), {})
	},
	InitialiseMod: function ({ id, name, abriv, author }) {
		function TumbleMod(mod){Object.assign(this,mod)}
		console.log(`[${name}] by ${author}`)
		var mod = new TumbleMod({
			id: id || camelize(name),
			abriv: abriv || name.split(" ").map(word => word[0].toUpperCase()).join(""),
			name,
			author,
			log: function (...p) {
				p.unshift("[" + mod.abr, iv + "]");
				console.debug(...p)
			}
		})
		if (typeof (cardboard) != "undefined") {
			mod = cardboard.register(mod.id, mod);
		}
	}
}
