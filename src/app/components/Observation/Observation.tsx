"use client";
import React, { useEffect, useState } from "react";
import AddTask from "../Task/AddTask";
import List from "../List/List";

const Observation = () => {
    const [count, setCount] = useState(0);
    const [addItem, setAddItem] = useState<string>("");
    const [checkItem, setCheckItem] = useState<number>(0);
    const [updateItem, setUpdateItem] = useState<string>("");
    const [deleteItem, setDeleteItem] = useState<number>(0);
    const [completeItem, setCompleteItem] = useState<number>(0);
    useEffect(() => {
        setCount(count + 1);
    }, [addItem, checkItem, updateItem, deleteItem, completeItem]);
    return (
        <>
            <AddTask setAddItem={setAddItem} />
            <List count={count} setCheckItem={setCheckItem} setUpdateItem={setUpdateItem} setDeleteItem={setDeleteItem} setCompleteItem={setCompleteItem} />
        </>
    );
};

export default Observation;
