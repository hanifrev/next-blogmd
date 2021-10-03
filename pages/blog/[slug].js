import fs from 'fs'
import path from 'path'

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