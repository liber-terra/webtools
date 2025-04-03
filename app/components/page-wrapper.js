export default function PageWrapper({ title, children }) {
    return (
        <div className="pt-10 md:pt-20">
            <div className="flex-center flex-col gap-12 md:gap-24">
                <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-chart-1 to-chart-4 bg-clip-text text-transparent animate-gradient">
                    {title}
                </h1>
                {children}
            </div>
        </div>
    );
}
