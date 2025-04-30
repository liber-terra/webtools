import SideNav from "@/app/components/sidenav";

export default function Layout({ children }) {
    return (
        <div className="h-full flex">
            <aside className="w-56 shrink-0 border-r p-4">
                <SideNav />
            </aside>

            <main className="flex-1 overflow-y-auto scrollbar-hide">
                {children}
            </main>
        </div>
    );
}
