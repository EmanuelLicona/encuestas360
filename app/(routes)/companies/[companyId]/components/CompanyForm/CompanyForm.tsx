
"use client";

import { CompanyFormProps } from "./CompanyForm.type";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { formSchema } from "./CompanyForm.form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

export default function CompanyForm(props: CompanyFormProps) {
  const { company } = props;


  const [isLoading, setIsLoading] = useState(false);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      country: company.country,
      website: company.website,
      phone: company.phone,
      cif: company.cif,
      profileImage: company.profileImage,
    },
  })

  const isValid = form.formState.isValid;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {

    try {
      setIsLoading(true);

      await axios.patch(`/api/company/${company.id}`, data);

      toast.success("Company updated successfully");

      setIsLoading(false);
    } catch (error) {

      setIsLoading(false);
      toast.error(`Company not updated successfully ${error}`);
    }

  }

  return (
    <Form {...form} >
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
                    <SelectItem value="honduras">Honduras</SelectItem>
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

        <Button type="submit" disabled={!isValid || isLoading}>Submit</Button>
      </form>
    </Form>
  )
}
