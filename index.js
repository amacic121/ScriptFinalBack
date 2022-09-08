
var express = require('express');
//const port = 3000;
const app = express();
mongoose = require('mongoose'),
Task  = require('./models/task');
const axios = require('axios');
bodyParser = require('body-parser')
const User = require('./models/user');
const users = require('./routes/users');
const auth = require('./routes/auth')
const jwt = require('jsonwebtoken');
const admin = require('./roleManagement/admin');
const http = require('http');
const cors = require("cors");
const history = require('connect-history-api-fallback');
const {Server} = require("socket.io");
const path = require('path');



const staticMd1 = express.static(path.join(__dirname,'dist'));
app.use(staticMd1);
app.use(history({index: '/index.html'}));
app.use(staticMd1);

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:8080"
//     credentials: true
//   },

//   allowEIO3: true
// })



// io.on("connection", socket => {
//   Task.find({}).then(result =>{
//     socket.emit('output-task', result)
//     console.log(socket.id);
//     console.log(result);
//   })
  
//   socket.on('addList', Task =>{


//   })
// })

// io.listen(8080);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://amacic121:ducili121@cluster0.ogzakm1.mongodb.net/TaskManager');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./views"));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/admin/users', users);
app.use('/admin/auth', auth);


var routes = require('./routes/tasks');
const { Socket } = require('socket.io');
const { result } = require('underscore');
const res = require('express/lib/response');
routes(app);


  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

