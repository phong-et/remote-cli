const express = require('express'),
  app = express(),
  port = 3000,
  cors = require('cors'),
  log= console.log

app.use(cors());

app.get('/', (_, res) => {
  res.send('Welcome Remote Cli');
});
app.get('/remote/:serverIp', (req, res) => {
  let serverIp = req.params.serverIp,
    spawn = require('child_process').spawn;
  log(`/remote/:${serverIp}`);
  try {
    spawn('C:\\Windows\\System32\\mstsc.exe', ['/v:' + serverIp]);
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false });
  }
});

app.listen(port, () => {
  log(`Remote Cli listening at http://localhost:${port}`);
});
