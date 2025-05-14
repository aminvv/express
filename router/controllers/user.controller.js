



 const getUser=(req,res)=>{
 res.send("users")
 }
 const createUser=(req,res)=>{
 res.send("create new  user")
 }
 const deleteUser=(req,res)=>{
 res.send(`delete user by id # ${req.params.id}`)
 }
 const updateUser=(req,res)=>{
 res.send(`update user by id # ${req.params.id}`)
 }


 module.exports={
    createUser,
    deleteUser,
    getUser,
    updateUser
 }