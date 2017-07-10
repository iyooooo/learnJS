var Sequelize = require('sequelize');

// 连接数据库
var sequelize = new Sequelize({
    logging: false,
    storage: 'shiyanlou.sqlite',
    dialect: 'sqlite'
});

// 定义 User 表
var User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
});

// 定义 Course 表
var Course = sequelize.define('course', {
    name: {
        type: Sequelize.STRING
    },
});

// 定义 UserCourse 表
// 存储用户学习记录
var UserCourse = sequelize.define('usercourse', {
    studyTime: Sequelize.INTEGER
});
UserCourse.belongsTo(User, {foreignKey: 'userId'});
UserCourse.belongsTo(Course, {foreignKey: 'courseId'});

// 删除表
User.drop();
Course.drop();
UserCourse.drop();

// 创建表
User.sync();
Course.sync();
UserCourse.sync();

// 插入数据
// 此处的 user、course及usercourse 都是 promise 对象

var user = User.create({
    name: 'jack'
}).then(p=>{
    user = p;
});

var course = Course.create({
    name: 'node.js'
}).then(p=>{
    course = p; 
});

var usercourse = UserCourse.create({
    userId: user.id,
    courseId: course.id,
    studyTime: 100,
});

// 查询学习记录
UserCourse.findOne().then(usercourse => {
    var u = usercourse.userId;
    var c = usercourse.courseId;
    var t = usercourse.studyTime;
    console.log('usercourse: '+ usercourse + user.id + course.id);
    console.log('学习记录：用户ID %d，课程ID %d，学习时间 %d', u, c, t);
});

