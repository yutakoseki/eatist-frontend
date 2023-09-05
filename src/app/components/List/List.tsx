"use client";
import { Task } from "@/types";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import apiClient from "@/lib/apiClient";
import { Button } from "@nextui-org/react";

interface Props {
    count: number;
    setCheckItem: (value: number) => void;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
    setCompleteItem(value: number): void;
}

const List = ({ count, setCheckItem, setUpdateItem, setDeleteItem, setCompleteItem }: Props) => {
    const [task, setTask] = useState<Task[]>([]);

    useEffect(() => {
        const getLatestTasks = async () => {
            try {
                const response = await apiClient.get("/list/get_latest_list");
                setTask(response.data);
            } catch (err) {
                console.log("エラーです", err);
            }
        };
        getLatestTasks();
    }, [count]);

    const handleClick = async () => {
        try {
            const checkTask = await apiClient.post("/list/complete", {
                eatflag: false,
            });
            setCompleteItem(count);
        } catch (err) {
            console.log("コンプリートエラー", err);
        }
    };

    return (
        <>
            <ul className="space-y-3">
                {task.map((todo: Task) => {
                    return <Todo key={todo.id} todo={todo} setCheckItem={setCheckItem} setUpdateItem={setUpdateItem} setDeleteItem={setDeleteItem} />;
                })}
            </ul>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-primary text-white shadow-lg w-full mt-8" onClick={handleClick}>
                Complete!
            </Button>
        </>
    );
};

export default List;
