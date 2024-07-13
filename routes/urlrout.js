import express from 'express';

import shorturl from '../models/urlschema.js';
const router = express.Router();

router.post('/shortUrls',async (req,res)=>{
     const url=req.body.full;
     const newshorturl=new shorturl({
      full:url
     })
     await newshorturl.save();
     console.log("short url created",newshorturl);
     res.redirect('/')
     
})
router.get("/", async(req, res) => {
      const shortUrls=await shorturl.find()
  res.render('index',{shortUrls:shortUrls});
});
router.get('/:shortUrl',async (req,res)=>{
      const sshortUrl=await shorturl.findOne({short:req.params.shortUrl});
      if(sshortUrl==null){
            return res.sendStatus(404);
      }else{
           await sshortUrl.clicks++;
           sshortUrl.save()
           res.redirect(sshortUrl.full)
      }
})
router.get('/delete/:id',async(req,res)=>{
      const id=req.params.id;
     try{await shorturl.deleteOne({_id:id})
     console.log("delet");
     res.redirect('/')

     }catch(err){
      console.log(err)
     }
})
//post end
//view data
// router.get(':shortUrls')
export default router;
