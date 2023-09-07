"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import apiClient from "@/lib/apiClient";
import { useAuth } from "../context/auth";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const { login } = useAuth(); // カスタムフックス
    console.log(email);
    console.log(password);

    const handleSubmit = async () => {
        // ここで新規登録を行うAPIを叩く
        try {
            const response = await apiClient.post("/auth/login", {
                email,
                password,
            });
            const token = response.data.token;
            login(token);
            router.push("/");
        } catch (err) {
            alert("入力内容が正しくありません");
        }
    };
    return (
        <main className="h-screen md:p-20 p-6 -mt-28 overflow-hidden">
            <div className="h-2/5 pt-56">
                <ThemeSwitcher />
            </div>
            <div className="h-3/5">
                <Card className="max-w-sm mx-auto mt-10">
                    <CardHeader className="flex items-center justify-center">
                        <div className="text-lg font-medium">Log in</div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-col gap-3">
                            <Input type="email" label="Email" size="sm" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            <Input type="password" label="Password" size="sm" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button color="secondary" className="w-full" onClick={handleSubmit}>
                            login
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
};

export default Login;
