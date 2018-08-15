let getSystemDate = () => {
    return new Date().getTime();
};

let responseData = {
    code : 500,
    message: '请求失败,请重新尝试',
    systemTime: getSystemDate()
};

const fn_index = async (ctx,next)=>{
    responseData = {
        code : 200,
        message: '恭喜你成功了',
        systemTime: getSystemDate()
    };

    ctx.response.body = responseData;
};


module.exports = {
    "POST /" :  fn_index
};