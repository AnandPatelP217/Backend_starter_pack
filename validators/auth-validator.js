const { z } = require("zod");

//creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 character." })
    .max(50, { message: "Name must not be more than 50 characters" }),
   email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(4, { message: "Email must be at least of 4 character." })
    .max(50, { message: "Email must not be more than 50 characters" }),

  phone: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "phone number be at least of 10 character." })
    .max(25, { message: "phone number must not be more than 50 characters" }),
    password: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(7, { message: "password must be at least of 3 character." })
    .max(150, { message: "password must not be more than 150 characters" }),
});
//creating an object schema
const signinSchema = z.object({
   email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(4, { message: "Email must be at least of 4 character." })
    .max(50, { message: "Email must not be more than 50 characters" }),
    password: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(7, { message: "password must be at least of 3 character." })
    .max(150, { message: "password must not be more than 150 characters" }),
});


module.exports = {signupSchema,signinSchema};