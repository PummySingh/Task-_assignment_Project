const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodb$oy';
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password must contain 5 characters').isLength({ min: 5 }),
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{

    let user= await User.findOne({email:req.body.email});

    if(user)
    {
       return  res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    const salt= await bcrypt.genSalt(10);
    const secPass= await bcrypt.hash(req.body.password,salt);

     user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password:secPass ,
    })

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({authtoken})
  }   catch(err){
       console.error(error.message);
      res.status(500).send("aSome Error occured");
     } 
} )
 router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank ').exists(),
 ],async(req, res) => {
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

 const{email,passowrd}=req.body;
  try{
     let user=User.findOne({email});
     if(!user)

    { success=false
      return res.status(400).json({error:"Please try to login with correct Credentials"});
  }
  const passwordCompare= await bcrypt.comapre(password,user.password);
   if(!passwordCompare)
   {
    success=false
    return res.status(400).json({error:"Please try to login with correct Credentials"});
   }
   const data = {
    user: {
      id: user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);
  success = true;
  res.json({ success, authtoken })

} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}


});

module.exports = router;
