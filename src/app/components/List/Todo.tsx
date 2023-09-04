import apiClient from "@/lib/apiClient";
import { Task } from "@/types";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
    todo: Task;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
}

const Todo = ({ todo, setUpdateItem, setDeleteItem }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskTitle, setIsEditedTaskTitle] = useState(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

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
                    <Button isIconOnly color="danger" aria-label="Like">
                        <HeartIcon />
                    </Button>
                    {isEditing ? (
                        <button
                            className="text-pink-700 mr-3"
                            onClick={(e) => {
                                preventLinkNavigation(e);
                                handleSave();
                            }}
                        >
                            save
                        </button>
                    ) : (
                        <button
                            className="text-pink-300 mr-3"
                            onClick={(e) => {
                                preventLinkNavigation(e);
                                handleEdit();
                            }}
                        >
                            edit
                        </button>
                    )}

                    <button
                        className="text-amber-800"
                        onClick={(e) => {
                            preventLinkNavigation(e);
                            handleDelete();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </li>
        </Link>
    );
};

export default Todo;
