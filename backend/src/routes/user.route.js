// import express from "express";
// import multer from "multer";
// import { uploadProfileImage } from "../controllers/user.controller.js";

// const router = express.Router();

// // Use multer for image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// router.post("/upload-profile", upload.single("profileImage"), uploadProfileImage);

// export default router;
