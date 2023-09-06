import Observation from "./components/Observation/Observation";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen min-h-screen py-2 mt-32">
            <h1 className="text-4xl font-bold text-gray-500 ">Dish List</h1>
            <div className="w-full max-w-xl">
                <div className="px-8 py-6">
                    <Observation />
                </div>
            </div>
        </main>
    );
}
