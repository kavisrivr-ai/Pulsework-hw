import {z} from "zod";
const clean=(text)=>text.replace(/[<>]/g,"");
const studentSchema=z.object({
name:z.coerce
.string()
.trim()
.min(4,"Name should be atleast 4 characters")
.max(20,"Name should not exceed 20 characters")
.trim()
.regex(/^[A-Za-z\s]+$/,"Name should only contain alphabets and spaces")
.transform(clean),
email:z
.email("Invalid email address"),
age:z.coerce
.number({message:"Age should be a number"})
.min(18,"Age should be atleast 18")
.max(60,"Age should not exceed 60"),
course: z.enum(["CSE","ECE","CSBS","MECH"],{message:"Invalid course selected"}),
});
export default studentSchema;