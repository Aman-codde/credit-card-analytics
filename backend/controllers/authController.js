import User from "../models/User.js";
import { comparePasswords, hashPassword } from "../utils/authUtils.js";

export const register = async (req,res) => {
    const {username,email,password} = req.body;
    try {
        const encryptedPassword = await hashPassword(password)
        const new_user = new User({
            username,
            email,
            password: encryptedPassword,
        })
        await new_user.save()
        return res.status(201).json({message: 'user created successfully'})
    }
    catch(err){
        console.log('register error: ',err);
        return res.status(500).json({message: `error creating user: ${err}`})
    }
}

export const login = async (req,res) => {
    const {email, password} = req.body;
    try {
        const userFound = await User.findOne({email});
        if(!userFound){
            return res.status(404).json({message: 'user not found'})
        }
        const isMatch = comparePasswords(password,userFound.password)
        if(isMatch){
            return res.status(200).json({message: 'user logged in'})
        }
        return res.status(401).json('Invalid credentials');
    }
    catch(err){
        console.log('Login error: ',err);
        return res.status(500).json({message: 'Server error'})
    }
}