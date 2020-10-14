# Mod Utils

```javascript
// @require      https://github.com/tumble1999/mod-utils/raw/master/mod-utils.js
```

```javascript

var mod = BCModUtils.InitialiseMod({
	name:"Test",
	abriv:"T",
	author:"A Human"
})

mod.log("Hello World") //[T] Hello World

BCModUtils.runIfDocLoaded(_=>{ //also runs if docuemnt already loaded
mod.log("Document Loaded")
})

var text = BCModUtils.camelize("Text Face") //testFace
```