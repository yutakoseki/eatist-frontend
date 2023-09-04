"use client";
import apiClient from "@/lib/apiClient";
import { Task } from "@/types";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    setAddItem: (value: string) => void;
}

const AddTask = ({ setAddItem }: Props) => {
    const [tastTitle, setTaskTitle] = useState("");
    const handleSubmit = async (e: FormEvent) => {
        if(!tastTitle){
            alert("料理名を入力してください。");
            return;
        }
        e.preventDefault();
        try {
            const newPost = await apiClient.post("/list/register", {
                text: tastTitle,
            });
            setTaskTitle("");
            setAddItem(tastTitle);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
            <input type="text" className="w-full h-10 border px-4 rounded-lg focus:outline-none focus:border-gray-400" onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)} value={tastTitle} placeholder="New Dish" />
            <button className="w-full px-4 py-2 bg-secondary text-white rounded transform hover:bg-primary hover:scale-95 duration-200">Add Favorite Dish</button>
        </form>
    );
};

export default AddTask;
