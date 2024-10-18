/* eslint-disable prettier/prettier */
import { z } from "zod";

export const loginValidationSchema = z.object({
    email: z.string().trim().email("please enter an valid email"),
    password: z.string().trim().min(6, "please enter at least 6 characters")
})