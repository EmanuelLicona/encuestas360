"use client"

import { Company } from "@/prisma/generated/prisma"
import { Button } from "@/components/ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";
import { SortIcon } from "@/components/SortIcon";
import CustomImage from "@/components/CustomImage/CustomImage";


export const columns: ColumnDef<Company>[] = [
    {
        accessorKey: "profileImage",
        header: "Profile Image",
        cell: ({ row }) => {

            return (
                <div className="relative h-12 w-12 m-auto">
                    <CustomImage
                        src={row.getValue("profileImage") as string}
                        alt="Company Profile Image"
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                    />
                </div>
            );
        },
    },


    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                Company Name

                <SortIcon direction={column.getIsSorted()} />
            </Button>
        ),
    },

    {
        accessorKey: "cif",
        header: "CIF",
    },


    {
        accessorKey: "phone",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                Phone
                <SortIcon direction={column.getIsSorted()} />
            </Button>
        ),
    },


    {
        accessorKey: "country",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                Country
                <SortIcon direction={column.getIsSorted()} />
            </Button>
        ),
    },

    {
        accessorKey: "website",
        header: "website",
    },

    {
        id: "actions",
        header: "",
        cell: ({ row }) => {

            const { id } = row.original;


            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-4 p-0">
                            <span className="sr-only">Open Menu</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        <Link href={`/companies/${id}`}>
                            <DropdownMenuItem>
                                <Pencil className="w-4 h-4 mr-2" />
                                Edit
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>

            );

        },
    }




]
