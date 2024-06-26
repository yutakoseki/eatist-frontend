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
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
        const mode = localStorage.getItem("theme") || "light"; // デフォルトの値を指定
        setTheme(mode);
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
            <li key={todo.id} className="flex justify-between p-4 border-l-4 border-primary rounded shadow">
                {isEditing ? <input ref={ref} type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border" value={editedTaskTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedTaskTitle(e.target.value)} /> : <span className="w-40 truncate">{todo.text}</span>}
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
                            {theme === "light" ? <img src="/save.svg" className="p-1" /> : <img src="/savedark.svg" className="p-1" />}
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
                            >{theme === "light" ? <img src="/check.svg" className="p-1" /> : <img src="/checkdark.svg" className="p-1" />}
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
                                {theme === "light" ? <img src="/pencil.svg" className="p-1" /> : <img src="/pencildark.svg" className="p-1" />}
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
                                {theme === "light" ? <img src="/delete.svg" className="p-1" /> : <img src="/deletedark.svg" className="p-1" />}
                            </Button>
                        </>
                    )}
                </div>
            </li>
        </Link>
    );
};

export default Todo;
