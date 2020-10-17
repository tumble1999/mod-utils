# Mod Utils

```js
// @require      https://github.com/tumble1999/mod-utils/raw/master/mod-utils.js
```

```js
const mod = new TumbleMod({
	id: "tumbleMod", // code-friendly version of name
	abriv: "TM", // abbreviation for mod.log
	cardboard: true, // if this mod requires cardboard
})

mod.log("Hello World") // [TM] Hello World

TumbleMod.onDocumentLoaded().then(alreadyLoaded => { // also runs if document already loaded. Returns a promise
	if (alreadyLoaded)
		mod.log("Document was already loaded") // [TM] Document was already loaded
	else
		mod.log("Document loaded") // [TM] Document loaded
})

let text = TumbleMod.camelize("Text Face") // textFace
```