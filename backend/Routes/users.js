const User = require('../Schemas/Users/UsersSchema.model')
var router = require('express').Router()


router.route('/').get((req,res)=>{
    User.find()
    .then((users)=>res.json(users))
    .catch(err=>res.status(400).json('Error :' + err))
});


router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const city  = req.body.city

    const newUser  = new User({username,city});
    newUser.save()
    .then(()=>res.json('User Added'))
    .catch(err=>res.status(400).json('Error : '+err))
})




router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then((user)=>{
        user.username = req.body.username;
        user.city = req.body.city;
        
        user.save()
        .then(()=>res.json('User Updated!'))
        .catch(()=>res.json('Fail to update the user....'))
    })
    .catch((err)=>res.status(400).json('Error :'+err))
})

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then((user)=>{
        const username = user.username
        const city = user.city
        res.json({
            username,
            city
        })
    })
    .catch((err)=>res.status(400).json('Error : '+err))
})


router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('User Deleted with id : '+req.params.id))
    .catch(err=>res.status(400).json('Error :'+err))
})



module.exports = router;