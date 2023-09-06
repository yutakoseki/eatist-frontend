"use client";

import apiClient from "@/lib/apiClient";
import { Task } from "@/types";
import { CheckIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
    todo: Task;
    setCheckItem: (value: boolean) => void;
    setUpdateItem: (value: string) => void;
    setDeleteItem: (value: number) => void;
}

const DishTodo = ({ todo, setCheckItem, setUpdateItem, setDeleteItem }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEdting] = useState(false);
    const [editedTitle, setIsEditedTitle] = useState(todo.title);
    const [editedUrl, setIsEditedUrl] = useState(todo.url);
    const [editedComment, setIsEditedComment] = useState(todo.comment);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = async () => {
        setIsEdting(true);
    };
    const handleSave = async () => {
        try {
            const updateDish = await apiClient.post("/dish/update", {
                id: todo.id,
                title: editedTitle,
                url: editedUrl,
                comment: editedComment,
            });
            setIsEdting(false);
            setUpdateItem(editedTitle);
        } catch (err) {
            console.log("編集エラー", err);
        }
    };
    const handleDelete = async () => {
        try {
            const updateDish = await apiClient.post("/dish/delete", {
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
        <li key={todo.id} className="p-4 border-l-4 border-primary rounded shadow w-full bg-tertiary">
            <div className="mb-2 flex justify-center font-bold w-full">{isEditing ? <input ref={ref} type="text" className="py-1 px-2 rounded  focus:outline-none focus:border-primary border w-full" value={editedTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedTitle(e.target.value)} /> : <span className="w-full truncate">{todo.title}</span>}</div>

            <div className="mb-2 flex justify-center">
                {isEditing ? (
                    <input ref={ref} type="text" className="py-1 px-2 rounded focus:outline-none focus:border-primary border w-full" value={editedUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedUrl(e.target.value)} />
                ) : (
                    <a href={todo.url} className="text-blue-500 w-full truncate">
                        {todo.url}
                    </a>
                )}
            </div>

            <div className="mb-2 flex justify-center">{isEditing ? <input ref={ref} type="text" className="py-1 px-2 rounded focus:outline-none focus:border-primary border w-full" value={editedComment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEditedComment(e.target.value)} /> : <span className="w-full truncate">{todo.comment}</span>}</div>

            {isEditing ? (
                // 編集中
                <div className="flex justify-center rounded">
                    <Button
                        className="w-full text-white text-xl"
                        color="primary"
                        aria-label="done"
                        onClick={(e) => {
                            preventLinkNavigation(e);
                            handleSave();
                        }}
                    >
                        save
                    </Button>
                </div>
            ) : (
                <>
                    <div className="flex justify-between rounded">
                        <Button
                            className="w-1/2 text-primary text-xl"
                            color="warning"
                            aria-label="done"
                            onClick={(e) => {
                                preventLinkNavigation(e);
                                handleEdit();
                            }}
                        >
                            edit
                        </Button>
                        <Button
                            className="w-1/2 text-white text-xl"
                            color="primary"
                            aria-label="done"
                            onClick={(e) => {
                                preventLinkNavigation(e);
                                handleDelete();
                            }}
                        >
                            delete
                        </Button>
                    </div>
                </>
            )}
        </li>
    );
};

export default DishTodo;
