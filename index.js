import express from 'express';
import mongoose from 'mongoose';
import urlRoute from './routes/urlrout.js';
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/urlshorts')
const db=mongoose.connection;
db.on('err',()=>{
  console.log("error")
})
db.once('open',()=>{
  console.log("db connected");
})
const PORT=process.env.PORT||3000;

app.set('view engine','ejs');
app.use(express.static('public'));
///after form submit they unable to read so we use url encoded json format
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//link router

app.use('/',urlRoute);
app.listen(PORT,()=>{
      console.log("server started "+PORT);
})
