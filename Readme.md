
# component-plus-node

makes components work in both node and the browser

## Installing

`npm install component-plus-node`

`component install stagas/component-plus-node`

## Example

This code runs the same in both component and node,
even though `each` and npm dependencies are suffixed with `-component`:

```js
require('component-plus-node');

var each = require('each');

var result = '';

each(['Hello,', ' world!'], function(el){
  result += el;
});

console.log(result); // => Hello, world!
```

## Notes

This is monkey-patching `Module._resolveFilename` thus requiring
`component-plus-node` needs to be called early before any other requires
that reference `-component` modules.

## License

MIT
