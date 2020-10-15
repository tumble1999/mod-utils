var BCModUtils = (function() {
	"use strict";

	function onDocumentLoaded() {
		return new Promise((res,rej)=>{
			if(document.readyState==="complete") {
				res();
			} else {
				window.addEventListener("load",res)
			}
		})
	}

	
function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

function mapArguments(keys,argv,defaultKey) {
	if(!Array.isArray(keys)) keys =Object.keys(keys);
	defaultKey = defaultKey||keys[0]
	if(!Array.isArray(argv)) return argv;
	if(argv.length==1) return {[defaultKey]:argv[0]}
	return keys.reduce((obj,key,i)=>(obj[key]=argv[i],obj),{})
}

function varDefined(v) {
	return typeof(v)!=="undefined"&&v;
}

function log(mod,...p) {
	p.unshift("["+mod.abriv+"]");
	console.debug(...p)
}


	function InitialiseMod({id,name,abriv,author}) {
		console.log("[" + name + "] by " + author)
		var mod = {
			id:camelize(id||name),
			abriv,
			name,
			author
		}
		mod.log = log.bind(self,mod)
		if(typeof(cardboard)!=="undefined") {
			mod = cardboard.register(mod.id,mod);
		}
		return mod;
	}
	return {
		InitialiseMod,
		camelize,
		onDocumentLoaded,
		varDefined,
		mapArguments
	}
})();
