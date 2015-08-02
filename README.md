# Simple Anniversaries

```javascript
var anniversary = require('anniversary')
var assert = require('assert')

var simple = anniversary(new Date(2015, 0, 1))
assert.equal(simple.getFullYear(), 2016)
assert.equal(simple.getMonth(), 0)
assert.equal(simple.getDate(), 1)
```

# Leap-Day Anniversaries

```javascript
var leapDay2016 = new Date(2016, 1, 29)

var first = anniversary(leapDay2016)
assert.equal(first.getFullYear(), 2017)
assert.equal(first.getMonth(), 2)
assert.equal(first.getDate(), 1)

var second = anniversary(leapDay2016, 2)
assert.equal(second.getFullYear(), 2018)
assert.equal(second.getMonth(), 2)
assert.equal(second.getDate(), 1)

var nextLeapDay = anniversary(leapDay2016, 4)
assert.equal(nextLeapDay.getFullYear(), 2020)
assert.equal(nextLeapDay.getMonth(), 1)
assert.equal(nextLeapDay.getDate(), 29)
```
