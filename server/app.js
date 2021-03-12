const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


// 解决跨域请求
app.use(cors());

//创建application/json解析
app.use(bodyParser.json());

//创建application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

const userRouter = require('./routes/user');
app.use('/api/v1', userRouter);

const orderRouter = require('./routes/order');
app.use('/api/v1', orderRouter);


const packageRouter = require('./routes/package');
app.use('/api/v1', packageRouter);

const port = process.env.PORT || 3000;

// 创建服务器
app.listen(port, () => {
    console.log(`server running port: ${port}`);
})
