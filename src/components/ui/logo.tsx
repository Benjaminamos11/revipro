import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    textClassName?: string
}

export function Logo({ className, textClassName }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center gap-2", className)}>
            <div className="relative h-12 w-48 overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/dphbnwjtx/image/upload/v1763770550/Generated_Image_November_22_2025_-_8_15AM_zsswsk.jpg"
                    alt="Revipro Logo"
                    fill
                    className="object-contain object-left"
                />
            </div>
        </Link>
    )
}
