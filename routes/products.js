import {Router} from "express";

const router = Router()


router.get('/', (req, res)=>{
    res.render('index', {
        title:'Boom Shop | Hojiakbar'
    } )
})


router.get('/products',  (req, res)=>{
    res.render('products', {
        title:"Products | Hojiakbar",
        isProducts:true,
    })
})

router.get('/add', (req, res)=>{
    res.render('add', {
        title:'Add | Hojiakbar',
        isAdd:true
    })
})

export default router
