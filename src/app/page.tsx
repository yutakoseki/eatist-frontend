import Observation from "./components/Observation/Observation";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen min-h-screen py-2 -mt-18">
            <div className="h-1/5 pt-28">
                <h1 className="text-4xl font-bold text-gray-500">Dish List</h1>
            </div>
            <div className="w-full max-w-xl h-4/5">
                <div className="px-8 py-8">
                    <Observation />
                </div>
            </div>
        </main>
    );
}
