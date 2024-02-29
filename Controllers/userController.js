// import user model
const users = require('../Models/userSchema')


// register
exports.register = async(req,res)=>{
    console.log("Inside Register functions");
    const {username,email,mobile,password,access} = req.body
    console.log(`${username},${email},${mobile},${password}`);
    try{
    // check already existing user
    const existingUser = await users.findOne({email})
    if(existingUser){
     res.status(406).json("User Already Exists... Please Login!!!")
    }
    else{
     // register
     const newUser = new users({
         username,email,mobile,password,access
     })
     await newUser.save()
     res.status(200).json(newUser)

 }
    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}

exports.login = async(req,res)=>{
    const{email,password}=req.body
    try{
        const existinguser=await users.findOne({email,password})
    if(existinguser){
        // const pend=await users.findOne({access:"pending"})
        // if(pend){
        //     res.status(404).json("You dont have permission to login contact admin")
        // }
        // else{
            res.status(200).json(existinguser)

        // }
        
    }
    else{
        res.status(404).json("Invalid email or password")

    }
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}

exports.getallusers = async(req,res)=>{
    try{
        const allusersdetails=await users.find()
        res.status(200).json(allusersdetails)

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}

exports.deleteuser = async(req,res)=>{
    const {userid}=req.body
    try{
        await users.findByIdAndDelete({_id:userid})
        res.status(200).json("Deleted")

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}

exports.edituser=async(req,res)=>{
    // const {userid}=req.body
    const {_id,username,email,mobile,password,access} = req.body
    const {id}=req.params

    try{
      const updateuser=await users.findByIdAndUpdate({_id:id},{
        username,mobile,email,password,access
    },{new:true})

    await updateuser.save()
    res.status(200).json(updateuser)


    }catch(err){
        res.status(401).json(`Error!!! Transaction failed : ${err}`)

    }
    

}