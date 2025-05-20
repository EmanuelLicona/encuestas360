import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  country: z.string().min(3),
  website: z.string().min(3),
  phone: z.string().min(3),
  cif: z.string().min(3),
  profileImage: z.string().min(3),
})