"use server"

import mongoose from "mongoose";

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const { Schema, model, models } = mongoose;

const EmailSchema = new Schema({
  email: { type: String, required: true, unique: true }
});

// Check if the model already exists to avoid overwriting
const Email = models.Email || model("Email", EmailSchema);

export async function sendEmail(email:string) {
  try {
    // Check if the email already exists
    const exists = await Email.exists({ email });

    if (exists) {
      return "Already Registered";
    }

    // Create a new email entry
    const response = await Email.create({ email });

    if (response) {
      return "Successfully Registered";
    } else {
      return "Something Went Wrong";
    }
  } catch (error) {
    console.error('Error in sendEmail function:', error);
    return "Error occurred";
  }
}
