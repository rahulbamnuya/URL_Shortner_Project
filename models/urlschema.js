import mongoose from 'mongoose';
import shortid from 'shortid';

const Schema=mongoose.Schema
const shorturlschema=new Schema({
      full:{
            type:String,
            require:true,
      },
      short:{
            type:String,
            require:true,
            default:shortid.generate
      },
      clicks:{
            type:Number,
            require:true,
            default:0
      }
})
const shorturl=mongoose.model('shorturl',shorturlschema)
export default shorturl;