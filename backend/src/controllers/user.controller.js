// import User from "../models/user.model.js";
// import fs from "fs";

// export const uploadProfileImage = async (req, res) => {
//   try {
//     const userId = req.user._id; // You need JWT middleware if you're using token auth
//     const imagePath = req.file.path;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { profileImage: imagePath },
//       { new: true }
//     ).select("-password");

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (err) {
//     console.error("Upload error", err);
//     res.status(500).json({ success: false, message: "Failed to upload image" });
//   }
// };
