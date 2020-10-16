"use strict";
class TumbleMod {
	constructor(mod = {}) {
		if (!mod.name || !mod.author) throw "Mods require a name and an author";
		Object.assign(this, mod);
		console.log(`[${this.name}] by ${this.author}`);
		if (!this.id) this.id = TumbleMod.camelize(this.name);
		if (!this.abriv)
			this.abriv = name
				.split(" ")
				.map((word) => word[0].toUpperCase())
				.join("");
	}

	log(...p) {
		p.unshift(`[${this.abriv}]`);
		console.debug(...p);
		return this;
	}

	register() {
		if (typeof cardboard == "undefined")
			throw "Cardbaord has to be available to register mods";
		Object.assign(this, cardboard.register(this.id, this));
		return this;
	}

	static onDocumentLoaded() {
		return new Promise((res, rej) => {
			if (document.readyState === "complete") {
				res();
			} else {
				window.addEventListener("load", res);
			}
		});
	}

	static camelize(str) {
		return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
			if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
			return index === 0 ? match.toLowerCase() : match.toUpperCase();
		});
	}

	static mapArguments(keys, argv, defaultKey) {
		if (!Array.isArray(keys)) keys = Object.keys(keys);
		defaultKey = defaultKey || keys[0];
		if (!Array.isArray(argv)) return argv;
		if (argv.length == 1) return { [defaultKey]: argv[0] };
		return keys.reduce((obj, key, i) => ((obj[key] = argv[i]), obj), {});
	}
}

//To Deprecate
var BCModUtils = {
	onDocumentLoaded: TumbleMod.onDocumentLoaded,
	camelize: TumbleMod.camelize,
	mapArguments: TumbleMod.mapArguments,
	InitialiseMod: mod => new TumbleMod(mod)
}
