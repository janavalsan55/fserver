// import express
const express = require('express')
// create router for express app using Router()
const router = new express.Router()
// import usercontroller js file

const usercontroller=require('../Controllers/userController')
const furController=require('../Controllers/furController')
const multerConfig = require('../Middlewares/multerMiddleware')

// define different routes for server app
// register

router.post('/registeruser',usercontroller.register)

router.post('/loginuser',usercontroller.login)

router.post('/addfur',multerConfig.single('pimage'),furController.addfurs)

router.get('/allfur',furController.getfur)

router.get('/allusers',usercontroller.getallusers)

router.delete('/deleteuser',usercontroller.deleteuser)

// router.get('/admin/getbikes',bikeController.getbikes)

// router.delete('/deletebike',bikeController.deletebike)


// export router
module.exports = router