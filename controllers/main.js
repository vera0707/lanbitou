let getSystemDate = () => {
    return new Date().getTime();
};

let responseData = {
    code : 500,
    message: '用户未登录',
    systemTime: getSystemDate()
};

const fn_index = async (ctx,next)=>{
    const userInfo = ctx.cookies.get('userInfo');

    if(userInfo && userInfo.username){
        responseData = {
            code : 200,
            message: '恭喜你成功了',
            data: { userInfo },
            systemTime: getSystemDate()
        };
    }

    ctx.response.body = responseData;
};


module.exports = {
    "POST /" :  fn_index
};