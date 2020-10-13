var BCModUtils = (function() {
	"use strict";

	async function runIfDocLoaded(func) {
		if (document.readyState == "complete") {
			return new Promise(async (resolve, reject) => {
				window.addEventListener("load", async () => {
					resolve(await func());
				})
			})
		}
		return await func();
	}

	
function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

function log(mod,...p) {
	p.unshift("["+mod.abriv+"]");
	console.debug(...p)
}

	function InitialiseMod({name,abriv,author}) {
		console.log("[" + name + "] by " + author)
		var mod = {
			id:camelize(name),
			abriv,
			name,
			author
		}
		mod.log = log.bind(mod.id)
		if(cardboard) {
			mod = cardboard.register(mod.id,mod);
		}
	}
	return {
		InitialiseMod,
		camelize,
		runIfDocLoaded
	}
})();
