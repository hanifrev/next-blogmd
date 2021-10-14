import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage() {
    return <div>qwerty</div>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
}

export async function getStaticProps() {
    return  {
        props,
    }
}