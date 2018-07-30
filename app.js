const Koa = require("koa");
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require("koa-bodyparser");
const session = require('koa-session');
const router = new Router();
const mongoose = require('mongoose');
const app = new Koa();

const CONFIG = {
    key: 'koa:sess',
    maxAge: 1296000,   //有效期一星期
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
};

app.use(serve(__dirname + '/dist'));
app.use(bodyParser());   //调用中间件koa-bodyparser
app.keys = ['some secret hurr'];
app.use(session(CONFIG, app));


// app.use('/',async (ctx,next)=>{
//     ctx.render();
//     await next();
// });

app.use(router.routes())
    .use(router.allowedMethods());


router.get('/',(ctx,next)=>{
    ctx.render('index');
});

mongoose.connect('mongodb://172.16.0.91:27017');
const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log("已连接到数据库");
    app.listen(3000);
    console.log('app started at port 3000...');
});