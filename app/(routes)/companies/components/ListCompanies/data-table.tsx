"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef /*, ColumnFiltersState*/, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";  
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}




export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([]);
    // const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);


    const [globalFilter, setGlobalFilter] = useState([])

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        // onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        // onGlobalFilterChange: setColumnFilters,
        // onColumnVisibilityChange
        // onRowSelectionChange
        state: {
            sorting,
            // columnFilters,
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter,
    });

    if (!isMounted) return null;


    return (
        <div className="p-4 bg-background shadow-md rounded-lg mt-4">
            <div className="flex items-center mb-2">
                <Input
                    placeholder="Filter emails..."
                    // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={e => table.setGlobalFilter(String(e.target.value))}
                    // onChange={(event) => {
                    //     const value = event.target.value as string;

                    //     table.getColumn("name")?.setFilterValue(value)
                    // }}
                    className="max-w-sm"
                />
            </div>


            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}

                            </TableRow>
                        ))}
                    </TableHeader>


                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}>
                                    {
                                        row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        )

                            :
                            (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No hay registros
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div >

            <div className="flex items-center justify-end py-4 space-x-2">
                <Button variant="outline" size="sm" onClick={() => { table.previousPage() }}
                    disabled={!table.getCanPreviousPage()}>
                    <ChevronLeft />
                </Button>

                <Button variant="outline" size="sm" onClick={() => { table.nextPage() }}
                    disabled={!table.getCanNextPage()}>
                    <ChevronRight />
                </Button>

            </div>
        </div >
    );

}