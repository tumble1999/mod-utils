# Mod Utils

```javascript
// @require      https://github.com/tumble1999/mod-utils/raw/master/mod-utils.js
```

```javascript

var mod = new TumbleMod({
	name:"Test",
	abriv:"T",
	author:"A Human"
})

mod.log("Hello World") //[T] Hello World

TumbleMod.runIfDocLoaded(_=>{ //also runs if docuemnt already loaded. Returns a promise
mod.log("Document Loaded")
})

var text = TumbleMod.camelize("Text Face") //testFace
```
