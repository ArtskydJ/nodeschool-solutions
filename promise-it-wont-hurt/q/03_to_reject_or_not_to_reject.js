var q = require('q')
var defer = q.defer()
defer.fulfill('I FIRED')
defer.reject('I DID NOT FIRE')
defer.promise.then(console.log, console.log)
