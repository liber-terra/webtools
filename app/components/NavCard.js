import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavCard({ title, description, url, className }) {
    return (
        <div className="flex-center">
            <Link href={url} className={cn("h-32 w-full max-w-64", className)}>
                <Card className="h-full w-full py-2 px-4 ">
                    <CardTitle className="w-full flex-between">
                        {title}
                        <Button variant="ghost" size="icon">
                            <Star fill="currentColor" />
                        </Button>
                    </CardTitle>
                    <CardDescription className="w-full line-clamp-2">
                        {description}
                    </CardDescription>
                </Card>
            </Link>
        </div>
    );
}
