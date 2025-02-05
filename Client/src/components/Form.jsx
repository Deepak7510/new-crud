import axios from "axios";
import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        hobbies: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("gender", formData.gender);
        data.append("hobbies", formData.hobbies);
        data.append("file", formData.file);

        try {
            const response = await axios.post("http://localhost:8000/api/student/add", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Registration Form</h2>

                <label className="block mb-2 font-medium">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />

                <label className="block mt-3 mb-2 font-medium">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />

                <label className="block mt-3 mb-2 font-medium">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />

                <label className="block mt-3 mb-2 font-medium">Gender</label>
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} className="mr-2" /> Male
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} className="mr-2" /> Female
                    </label>
                </div>

                <label className="block mt-3 mb-2 font-medium">Hobbies</label>
                <select name="hobbies" value={formData.hobbies} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select hobbies</option>
                    <option value="reading">Reading</option>
                    <option value="sports">Sports</option>
                    <option value="music">Music</option>
                    <option value="traveling">Traveling</option>
                </select>

                <label className="block mt-3 mb-2 font-medium">Upload File</label>
                <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Submit</button>
            </form>
        </div>
    );
};

export default Form;
