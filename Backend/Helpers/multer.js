import multer from 'multer';
import path from 'path';  // Importing the 'path' module

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use a relative path here, not absolute
        cb(null, './Uploads'); // Make sure 'Uploads' folder exists in the root directory of your project
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });
export default upload;
