
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
// import { useState } from "react";
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCreateCustomer.types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    website: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
    cif: z.string().min(2).max(50),
    profileImage: z.string(),
})

export function FormCreateCustomer(props: FormCreateCustomerProps) {

    const { setOpenModalCreate } = props;

    // const [photoUploaded, setPhotoUploaded] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            country: "",
            website: "",
            phone: "",
            cif: "",
            profileImage: "",
        },
    })


    const isValid = form.formState.isValid;

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
        setOpenModalCreate(false);

        toast.success("Company created successfully");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="spain">España</SelectItem>
                                        <SelectItem value="portugal">Portugal</SelectItem>
                                        <SelectItem value="france">France</SelectItem>
                                        <SelectItem value="germany">Germany</SelectItem>
                                        <SelectItem value="italy">Italy</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input placeholder="abdiel.licona.com" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="123456789" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cif"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CIF</FormLabel>
                                <FormControl>
                                    <Input placeholder="44 345 678" {...field} type="number" />
                                </FormControl>
                                {/* <FormDescription>
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Profile Image</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>

                <Button type="submit" disabled={!isValid}>Submit</Button>
            </form>
        </Form>
    );
}