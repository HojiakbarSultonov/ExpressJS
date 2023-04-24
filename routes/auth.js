import {Router} from "express";
import User from "../models/user.js";

const router = Router()


router.get('/login', (req, res)=>{
    res.render('login', {
        title:'login | Hojiakbar',
        isLogin:true
    })
})

router.get('/register', (req, res)=>{
    res.render('register', {
        title:'register | Hojiakbar',
        isRegister:true
    })
})

router.post('/login', (req, res)=>{
    console.log(req.body)
    res.redirect('/')
})

router.post('/register', async (req, res)=>{
    console.log(req.body)
    const userData = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
    }
    const user =  await User.create(userData)
    console.log(user);
    res.redirect('/')
})
export  default router