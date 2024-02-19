module.exports = function getFlag(string) {
  const messagePosition = process.argv.indexOf(string) + 1
  return process.argv[messagePosition]
}

