const User = require("./../models/user");

let fn_login = async (ctx,next) =>{
    const { username,password } = ctx.request.body;


    // var user = new User({
    //    username: 'admin',
    //    password: '123456',
    //    isAdmin: true
    // });
    //
    // user.save((err)=>{
    //     if(err){
    //         console.log('没存上',err);
    //     }else{
    //         console.log('存上了',err);
    //     }
    // });


    User.find({ name: 'admin'},(err) =>{
        if(err){
            console.log('有admin这个人',err);
            ctx.response.body = {
                status : 200,
                massage: '成功！',
                data: new Date().getTime()
            }
        }else{
            console.log('拉倒',err);
            ctx.response.body = {
                status : 400,
                massage: '失败！',
                data: new Date().getTime()
            }
        }
    });




};

module.exports = {
   "POST /user/login" :  fn_login
};