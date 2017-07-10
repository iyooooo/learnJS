var Sequelize = require('sequelize');

var sequelize = new Sequelize({
    logging: false,
    dialect: 'sqlite',
    storage: 'shiyanlou.sqlite'
});


function ensureLoggedIn() {
    console.log('ensureLoggedIn');
//    sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//      User.findOne({
//                     where: {
//                         githubId: githubId
//                     }
//                 }).then(user => {
//                     // 登录成功后返回用户信息
//                     return user;
//                 });
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
}

module.exports = {
    ensureLoggedIn: ensureLoggedIn
};
