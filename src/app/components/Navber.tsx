"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "../context/auth";

const Navber = () => {
    const { user, logout } = useAuth();
    return (
        <header className="bg-primary p-4 text-white fixed top-0 left-0 right-0 z-20 h-18">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-semibold text-xl">
                    <Link href="/" className="text-2xl">
                        Eatist
                    </Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        {user ? (
                            <>
                                {/* <Link href={`/profile${user.id}`} className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium">
                                    プロフィール
                                </Link> */}
                                <button onClick={logout} className="bg-warning text-gray-500 py-2 px-3 rounded-lg font-medium">
                                    ログアウト
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="bg-warning text-gray-500 py-2 px-3 rounded-lg font-medium">
                                    ログイン
                                </Link>
                                <Link href="/signup" className="bg-warning text-gray-500 py-2 px-3 rounded-lg font-medium">
                                    サインアップ
                                </Link>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navber;
