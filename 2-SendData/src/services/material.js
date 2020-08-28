const createDoc = (req, res) => {
  console.log(`req.body = ${JSON.stringify(req.body)}`)
}

module.exports = {
  createDoc
}
