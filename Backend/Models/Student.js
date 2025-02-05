import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobbies: {
        type: Array,
        required: true
    },
    profile: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Student = mongoose.model('student', studentSchema);
export default Student