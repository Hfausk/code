"use server"

import React from "react";
import { getAllBooks } from "../../database/crud/getAllItems";

import { DataTable } from "../../components/datatable/dataBooks-table";
import { columns } from "./columns";




export default async function page() {
    const books = await getAllBooks();

  
  
    return (
      <main className="flex min-h-screen flex-col items-center p-24 w-screen">
        <div className="w-[1000px]">
          <h1 className="text-4xl">All books</h1>
        <DataTable columns={columns} data={books} />
        </div>

      </main>
    );
  }
  