/*
 * @Description:  webhooks
 * @Author: gongwei_sun
 * @LastEditors: sungw
 * @Date: 2019-04-28 11:42:55
 * @LastEditTime: 2020-04-22 22:31:01
 */
const express = require('express')
const router = express.Router()
const EventEmitter = require('events')
const { exec } = require('child_process')
const eventList = [ 'ping,', 'push' ]
class WebHook extends EventEmitter {
  constructor() {
    super()
    this.hook = (req, res) => {
      var agent = req.headers['user-agent'],event 
      if (agent !== 'Coding.net Hook' || agent.indexOf("GitHub-Hookshot/") ==-1) {
        this.emit('error', res)
        return
      }
      if(agent !== 'Coding.net Hook'){
        event = req.headers['x-coding-event']
      }else{
        event = req.headers['X-GitHub-Event']
      }
      if (!event) {
        this.emit('error', res)
        return
      }
      if (eventList.indexOf(event) === -1) {
        this.emit('error', res)
        return
      }
      this.emit(event, req, res)
    }
  }
}
async function gitPull(path) {
  return new Promise((resolve, reject)=>{
    const child = exec(`cd ${path} git pull --rebase origin master `, (err, stdout, stderr)=>{
      console.log(err)
      console.log(stdout)
      console.log(stderr)
      child.kill('SIGHUP')
      console.log(  child.killed)
      resolve(true)
    })
  })
}
const webhook = new WebHook

const event2Path={
  "kaldorei":'/data/node_wwb/ghost/current/content/themes/ghost-theme-kaldorei-master'
}

router.post('/', webhook.hook)

webhook.on('error', (res) => {
  res.send('err')
})

webhook.on('ping', (req, res) => {
  console.log('ping: ')
  res.end('pong')
})
webhook.on('push', async (req, res) => {
  let body = req.body
  let {event} = req.query
  let path = event2Path(event)
  if(!path){
    console.log(event,"no event path to pull")
    res.end('no event path to pull')
    return
  }
  if (body.ref !== 'refs/heads/master') {
    res.end('no need update')
    return
  }
  let info = await gitPull(path)
  res.send(info)
})
module.exports = router

