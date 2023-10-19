"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

export function SearchFeature() {
    const [searchVal, setSearchVal] = useState("");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Search size={18} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Search Products</DialogTitle>
                    <DialogDescription>
                        Search Your fabric in our store
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            placeholder="lawn"
                            className="col-span-3"
                            value={searchVal}
                            onChange={(e) => setSearchVal(e.target.value)}
                        />
                        <Link href={`/search?query=${searchVal}`} className={buttonVariants({
                            variant: "outline",
                        })}>
                            <Search size={21} />
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
