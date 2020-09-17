const express = require('express'),
  app = express(),
  port = 3000,
  cors = require('cors'),
  log = console.log,
  spawn = require('child_process').spawn;

app.use(cors());

app.get('/', (_, res) => {
  res.send('Welcome Remote Cli');
});
app.get('/remote/:serverIp', (req, res) => {
  let serverIp = req.params.serverIp;
  log(`/remote/:${serverIp}`);
  try {
    spawn('C:\\Windows\\System32\\mstsc.exe', ['/v:' + serverIp]);
    res.send({ success: true });
  } catch (error) {
    log(error)
    res.send({ success: false });
  }
});

app.listen(port, () => {
  log(`Remote Cli listening at http://localhost:${port}`);
});
