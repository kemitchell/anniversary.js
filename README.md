Calculate the anniversary of a Date.

```javascript
var anniversary = require('anniversary')

var ofALeapDay = anniversary(new Date(2016, 1, 29))

ofALeapDay.getFullYear() // => 2017
ofALeapDay.getMonth() // => 2
ofALeapDay.getDate() // => 1
```
