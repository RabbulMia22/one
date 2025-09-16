import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String ,required: true}, // make optional for OAuth users
  role: { type: String, enum: ["user", "admin"], default: "user" },
  image: { type: String },    // profile image from provider
  provider: { type: String }, // 'google', 'github', etc.
}, { timestamps: true });

const User = models.User || model("User", UserSchema);
export default User;
