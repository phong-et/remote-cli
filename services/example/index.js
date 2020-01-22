'use strict'
const log = console.log
module.exports = function (fastify, opts, next) {
  fastify.get('/example', function (request, reply) {
    reply.send('this is an example')
  })
  fastify.get('/remote/:serverIp', function (request, reply) {
    let serverIp = request.params.serverIp,
      spawn = require('child_process').spawn
    log(`/remote/:${serverIp}`)
    try {
      spawn('C:\\Windows\\System32\\mstsc.exe', ['/v:' + serverIp])
      reply.send({ success: true })
    } catch (error) {
      reply.send({ success: false })
    }
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
