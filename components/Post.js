/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Post({post}) {
    return (
        <div className="card">
            <img src={post.frontmatter.cover_image} alt="x" />
            <div>Posted on {post.frontmatter.date}</div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
        </div>
    )
}