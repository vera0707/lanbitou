const User = require("./../models/user");

let getSystemDate = () => {
    return new Date().getTime();
};

let responseData = {
    code : 500,
    message: '请求失败,请重新尝试',
    systemTime: getSystemDate()
};

let fn_login = async (ctx,next) =>{
    const { username,password } = ctx.request.body;

    if(!username || username.trim() == ""){
        responseData = {
            code: 400,
            message: "用户名不能为空",
            systemTime: getSystemDate()
        }
    }else if(!password || password.trim() == ""){
        responseData = {
            code: 400,
            message: "用户名不能为空",
            systemTime: getSystemDate()
        }
    }else{
        User.findOne({ username: username , password : password})
            .then((userInfo)=>{
                if(userInfo){
                    responseData = {
                        code : 200,
                        message: `欢迎${username}回家`,
                        systemTime: getSystemDate()
                    }

                }else{
                    responseData = {
                        code : 400,
                        message: '用户名或密码错误',
                        systemTime: getSystemDate()
                    }
                }
            });
    }

    ctx.response.body = responseData;
};

module.exports = {
   "POST /user/login" :  fn_login
};