/* eslint-disable react/jsx-key */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'

export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>test test</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          // <h3>{post.frontmatter.title}</h3>
          <Post post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // get files from post directory
  const files = fs.readdirSync(path.join('posts'))

  // get slug and frontmatter from post
  const posts = files.map(filename =>{
    // create slug
    const slug = filename.replace('.md', '')

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    console.log(markdownWithMeta)
    console.log(__dirname)

    return {
      slug,
      frontmatter
    }
  })

  console.log(posts)

  return {
    props: {
      posts,
    },
  }
}