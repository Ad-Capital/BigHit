import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    image?: string;
    image2?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function AppCard({
    title,
    href,
    description,
    dates,
    tags,
    link,
    image,
    image2,
    links,
    className,
}: Props) {
    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            }
        >
            <Link
                href={href || "#"}
                className={cn("flex flex-row cursor-pointer align-center justify-center ", className)}
            >
                {image && (
                    <div  className={cn("flex flex-row justify-center align-center cursor-pointer", className)}>
                        <Image
                            src={image}
                            alt={title}
                            width={180}
                            height={80}
                            className="overflow-hidden object-fill object-top"
                        />
                        <Image
                            src={image2  || "/mockup/2.png"}
                            alt={title}
                            width={180}
                            height={80}
                            className="overflow-hidden object-fill object-top"
                        />
                    </div>

                )}
            </Link>
            <CardHeader className="px-2">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>
                    <time className="font-sans text-xs">{dates}</time>
                    <div className="hidden font-sans text-xs underline print:visible">
                        {link?.replace("https://", "").replace("www.", "").replace("/", "")}
                    </div>
                    <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {description}
                    </Markdown>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
                {tags && tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {tags?.map((tag) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={tag}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {links?.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                                    {link.icon}
                                    {link.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}