const express = require('express');
const { allRouter } = require('./routers');
const serveFavIcon = require('serve-favicon');
const path = require('path');

const app = express();

// فقط برای مسیرهایی که با /user شروع می‌شن، favicon رو اعمال کن
app.use('/user', serveFavIcon(path.join(__dirname, './icon/timer_arrows_stopwatch_clock_dead_icon_265376.png')));

// بقیه روت‌ها
app.use(allRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000 run server on port 3000");
});
