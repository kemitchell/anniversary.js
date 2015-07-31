var leapDay = require('leap-day')

function anniversary(date, number) {
  number = ( number === undefined ? 1 : number )
  return (
    leapDay(date) ?
      new Date(
        ( date.getFullYear() + number ), 2, 1) :
      new Date(
        ( date.getFullYear() + number ),
        date.getMonth(),
        date.getDate()) ) }

module.exports = anniversary
