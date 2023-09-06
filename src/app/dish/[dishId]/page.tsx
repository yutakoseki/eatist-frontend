import DishObservation from "@/app/components/Observation/DishObservation";
import { DishId } from "@/types";
import { NextPage } from "next";
import React from "react";

const Dish: NextPage<DishId> = ({ params }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen min-h-screen py-2 -mt-18">
                <div className="h-1/5 pt-28">
                    <h1 className="text-4xl font-bold text-gray-500">Restaurant List</h1>
                </div>

                <div className="w-full max-w-xl h-4/5">
                    <div className="px-8 py-8">
                        <DishObservation params={params} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dish;
