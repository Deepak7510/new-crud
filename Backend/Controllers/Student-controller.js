import Student from "../Models/student.js";
import path from 'path'
import fs from 'fs'

export const addStudent = async (req, res) => {
    const { name, email, password, gender, hobbies } = req.body;
    const filePath = req.file ? req.file.path.replace(/\\/g, '/') : null;

    // Validation check
    if (!name || !email || !password || !gender || !hobbies || !filePath) {
        if (req.file) {
            fs.unlinkSync(filePath); // Remove uploaded file
        }
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }
    try {
        // Check if the user already exists
        const checkUser = await Student.findOne({ email });
        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered"
            });
        }

        // Create a new student record
        const newUser = new Student({
            name,
            email,
            password,
            gender,
            hobbies,
            profile: filePath
        });

        // Save the new student record to the database
        await newUser.save();

        return res.status(201).json({
            success: true,
            newUser,
            message: "Student added successfully."
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};


export const getStudent=async(req,res)=>{
    try {
        const userData=await Student.find();
        return res.status(201).json({
            success: true,
            userData,
        });
        
    } catch (error) {
        console.log(error)
    }

}
