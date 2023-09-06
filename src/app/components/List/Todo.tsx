import apiClient from "@/lib/apiClient";
import { Task } from "@/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
    todo: Task;
    setCheckItem: (value: number) => void;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
}

const Todo = ({ todo, setCheckItem, setUpdateItem, setDeleteItem }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskTitle, setIsEditedTaskTitle] = useState(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

    const handleCheck = async () => {
        try {
            const checkTask = await apiClient.post("/list/check", {
                id: todo.id,
                eatflag: true,
            });
            setIsEditing(false);
            setCheckItem(todo.id);
        } catch (err) {
            console.log("チェックエラー", err);
        }
    };

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const updateTask = await apiClient.post("/list/update", {
                id: todo.id,
                text: editedTaskTitle,
            });
            setIsEditing(false);
            setUpdateItem(editedTaskTitle);
        } catch (err) {
            console.log("編集エラー", err);
        }
    };

    const handleDelete = async () => {
        try {
            const updateTask = await apiClient.post("/list/delete", {
                id: todo.id,
            });
            setDeleteItem(todo.id);
        } catch (err) {
            console.log("削除エラー", err);
        }
    };

    const preventLinkNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <Link href={`/dish/${todo.id}`}>
            <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-primary rounded shadow">
                {isEditing ? <input ref={ref} type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border" value={editedTaskTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedTaskTitle(e.target.value)} /> : <span>{todo.text}</span>}
                <div>
                    {isEditing ? (
                        // 編集中
                        <Button
                            isIconOnly
                            size="sm"
                            color="default"
                            aria-label="done"
                            onClick={(e) => {
                                preventLinkNavigation(e);
                                handleSave();
                            }}
                        >
                            <img src="/save.svg" className="p-1 text-primary" />
                        </Button>
                    ) : (
                        // 編集中ではない
                        <>
                            <Button
                                isIconOnly
                                size="sm"
                                color="default"
                                aria-label="check"
                                onClick={(e) => {
                                    preventLinkNavigation(e);
                                    handleCheck();
                                }}
                            >
                                <img src="/check.svg" className="p-1 text-primary" />
                            </Button>
                            <Button
                                isIconOnly
                                size="sm"
                                color="default"
                                aria-label="done"
                                onClick={(e) => {
                                    preventLinkNavigation(e);
                                    handleEdit();
                                }}
                            >
                                <img src="/pencil.svg" className="p-1 text-primary" />
                            </Button>
                            <Button
                                isIconOnly
                                size="sm"
                                color="default"
                                aria-label="done"
                                onClick={(e) => {
                                    preventLinkNavigation(e);
                                    handleDelete();
                                }}
                            >
                                <img src="/delete.svg" className="p-1 text-primary" />
                            </Button>
                        </>
                    )}
                </div>
            </li>
        </Link>
    );
};

export default Todo;
