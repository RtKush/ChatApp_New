// // backend/src/middleware/upload.middleware.js
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Ensure uploads folder exists
// const uploadDir = path.resolve("uploads");
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
// // 
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}-${file.fieldname}${ext}`);
//   },
// });

// export const upload = multer({ storage });
