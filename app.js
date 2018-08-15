const Koa = require("koa");
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require("koa-bodyparser");
const session = require('koa-session');
const mongoose = require('mongoose');
const controller = require('./controller');
const history = require('./middleware/koa2-connect-history-api-fallback');
const app = new Koa();
const router = new Router();

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

app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}));
app.keys = ['some secret hurr'];
app.use(session(CONFIG, app));
app.use(history({ verbose: true}));
app.use(router.routes())
    .use(router.allowedMethods());

app.use(controller());

mongoose.connect('mongodb://172.16.0.91:27017');
const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log("Successful connection to the database...");
    app.listen(3000);
    console.log('app started at port 3000...');
});