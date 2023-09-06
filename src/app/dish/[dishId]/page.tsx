import DishObservation from "@/app/components/Observation/DishObservation";
import { DishId } from "@/types";
import { NextPage } from "next";
import React from "react";

const Dish: NextPage<DishId> = ({ params }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold text-gray-500 -mt-32">Restaurant List</h1>
                <div className="w-full max-w-xl mt-5">
                    <div className="px-8 py-6">
                        <DishObservation params={params} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dish;
