import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <div className="h-screen overflow-auto w-screen bg-base-background">
            <Header />
            <main className="max-w-4xl w-full mx-auto">
                <Outlet />
            </main>
        </div>
    )
}