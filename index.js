var leapDay = require('leap-day')

function anniversary(date) {
  return (
    leapDay(date) ?
      new Date(( date.getFullYear() + 1 ), 2, 1) :
      new Date(( date.getFullYear() + 1 ), date.getMonth(), date.getDate()) ) }

module.exports = anniversary
