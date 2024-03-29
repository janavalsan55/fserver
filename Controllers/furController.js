const furs = require('../Models/furSchema')


// addfur
exports.addfurs = async(req,res)=>{
    console.log("Inside add functions");
    const {pname,price,overview,mobile,uname,place,userid,access}=req.body
    const pimage=req.file.filename
   

   
    try{
    
     // add
     const newFur = new furs({
        pname,price,overview,mobile,uname,place,pimage,userid,access
     })
     await newFur.save()
     res.status(200).json(newFur)

 
    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}


exports.getfur = async(req,res)=>{
    try{
        const allfur=await furs.find()
        res.status(200).json(allfur)

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}


exports.deletefur = async(req,res)=>{
    const {fid}=req.body
    try{
        await furs.findByIdAndDelete({_id:fid})
        res.status(200).json("Deleted")

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}