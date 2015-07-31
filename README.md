Calculate the anniversary of a Date.

```javascript
var anniversary = require('anniversary')

var ofALeapDay = anniversary(new Date(2016, 1, 29))
ofALeapDay.getFullYear() // => 2017
ofALeapDay.getMonth() // => 2
ofALeapDay.getDate() // => 1

var second = anniversary(new Date(2016, 1, 29), 2)
second.getFullYear() // => 2018
second.getMonth() // => 2
second.getDate() // => 1
```
