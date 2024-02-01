import Link from "next/link";

export default function BlogsRoot() {
    return <main>
        <h2> Blogs Root Page loaded.</h2>
        <ul>
            <li><Link href='/blogs/blog-1'>Blog-1</Link></li>
            <li><Link href='/blogs/blog-2'>Blog-2</Link></li>
        </ul>

    </main>
}