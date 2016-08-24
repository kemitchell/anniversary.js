var leapDay = require('leap-day')
var leapYear = require('leap-year')

module.exports = function anniversary (date, number) {
  number = number === undefined ? 1 : number
  var anniversaryYear = date.getFullYear() + number
  return (
    (leapDay(date) && !leapYear(anniversaryYear))
    ? new Date(anniversaryYear, 2, 1)
    : new Date(anniversaryYear, date.getMonth(), date.getDate())
  )
}
