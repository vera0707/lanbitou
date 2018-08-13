const fn_index = async (ctx,next)=>{

    console.log('over');
    next();

};

module.exports = {
    "GET /" :  fn_index
}