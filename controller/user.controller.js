const db=require("../models/index.js");
const User=db.User;
const createUser=async(req,res)=>{
    try{
     const {name ,age,email,password}=req.body;
     const user = await User.create({ name, email, password,age});
     res.status(201).json({ message: 'User created successfully', user });
    }
    catch(eror){
        console.log(eror)
    }
}
const getUsers=async(req,res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(users);
      } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Error fetching users' });
      }
}
const getUser=async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
      } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Error fetching user' });
      }
}
const updateUser=async(req,res)=>{
    try{
     const { id } = req.params;
    const { name, email, password ,age} = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update({ name, email, password,age });
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Error updating user' });
  }
}
const deleteUser=async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Error deleting user' });
      }
}
module.exports={createUser,getUsers,getUser,updateUser,deleteUser}