const auth = require('basic-auth');

module.exports.basicAuthentication = async (req, res, next) => {
    const user = await auth(req);
    // console.log(user);
    const username = 'test';
    const password = '123456';
    if(user && user.name === username && user.pass === password){
        next();
    }else{
        res.status(401);
        res.end('Access denied');
    }
}