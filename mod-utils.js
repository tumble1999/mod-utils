let TumbleMod;
(function () {
	'use strict';
	TumbleMod = class {
		constructor(mod = {}) {
			this.GM_info = GM_info;
			Object.assign(this, mod, GM_info.script);
			console.log(`[${this.name}] by ${this.author}`);
			if (!this.id) this.id = TumbleMod.camelize(this.name);
			if (!this.abriv)
				this.abriv = this.name
					.split(" ")
					.map(word => word[0].toUpperCase())
					.join("");

			const cRegister = _ => cardboard.register(this.id, this, this.cardboard, GM_info);
			if (typeof cardboard != "undefined")
				window.addEventListener('cardboardLoaded', cRegister);
			else
				cRegister();
		}

		log(...p) {
			console.debug(`[${this.abriv}]`, ...p);
			return p[0];
		}

		static onDocumentLoaded() {
			return new Promise((res, rej) => {
				if (document.readyState == "complete")
					res(true);
				else
					window.addEventListener("load", _ => res(false));
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
	};
})();