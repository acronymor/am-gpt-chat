import Link from "next/link";

import link_style from "@/app/ui/lib/link.module.scss"


export function IconLink(props: { href: string, children: React.ReactNode }) {
    return (
        <Link href={props.href} className={link_style["icon-link"]}>
            {props.children}
        </Link>
    );
}