


 const getUser=(req,res)=>{
 console.log(req.time);
 res.send("users")
 }
 const createUser=(req,res)=>{
 console.log(req.time);
 res.send("create new  user")
 }
 const deleteUser=(req,res)=>{
 console.log(req.time);
 res.send(`delete user by id # ${req.params.id}`)
 }
 const updateUser=(req,res)=>{
 console.log(req.time);
 res.send(`update user by id # ${req.params.id}`)
 }


 module.exports={
    createUser,
    deleteUser,
    getUser,
    updateUser
 }