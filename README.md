```javascript
var anniversary = require('anniversary')
var assert = require('assert')

var ofALeapDay = anniversary(new Date(2016, 1, 29))
assert.equal(ofALeapDay.getFullYear(), 2017)
assert.equal(ofALeapDay.getMonth(), 2)
assert.equal(ofALeapDay.getDate(), 1)

var second = anniversary(new Date(2016, 1, 29), 2)
assert.equal(second.getFullYear(), 2018)
assert.equal(second.getMonth(), 2)
assert.equal(second.getDate(), 1)
```
