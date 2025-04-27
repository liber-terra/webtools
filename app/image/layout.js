import SideNav from "@/app/components/sidenav";

export default function Layout({ children }) {
    return (
        <div className="flex">
            <aside className="w-56 shrink-0 border-r bg-muted/40 p-4">
                <SideNav />
            </aside>

            <main className="flex-1">{children}</main>
        </div>
    );
}
