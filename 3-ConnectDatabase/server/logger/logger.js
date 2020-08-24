const { Bristol } = require('bristol')
const palin = require('palin')
const moment = require('moment')

let logger

const init = () => {
  logger = new Bristol()
  logger.addTarget('console').withFormatter(palin, {
    timestamp: date => moment(date).toISOString(),
    indent: '\n    ⇒  '
  })

  return logger
}

module.exports = {
  get instance() {
    return logger || init()
  }
}
