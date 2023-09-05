"use client";
import React, { useEffect, useState } from "react";
import DishAddTask from "../Task/DishAddTask";
import DishList from "../List/DishList";
import { DishId } from "@/types";

const DishObservation = ({params}:DishId) => {
    const [count, setCount] = useState(0);
    const [addItem, setAddItem] = useState<string>("");
    const [checkItem, setCheckItem] = useState<boolean>(false);
    const [updateItem, setUpdateItem] = useState<string>("");
    const [deleteItem, setDeleteItem] = useState<number>(0);
    useEffect(() => {
        setCount(count + 1);
    },[addItem, updateItem, deleteItem,checkItem]);

    return (
        <>
            <DishAddTask setAddItem={setAddItem} params={params}/>
            <DishList count={count} setCheckItem={setCheckItem} setUpdateItem={setUpdateItem} setDeleteItem={setDeleteItem} params={params}/>
        </>
    );
};

export default DishObservation;
