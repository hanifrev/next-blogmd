/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-key */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
// import TextLoop from "react-text-loop";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Home({ posts }) {
  // const city = ["Kediri, Indonesia", "Taipe, Taiwan", "Madrid, Spain", "Abuja, Nigeria", "Barrow, UK", "New York City, USA"]
  console.log(posts);
  return (
    <div>
      <Head>
        <title>test test</title>
      </Head>
      {/* 
      <div className="textloop">
        Made with{" "}<FontAwesomeIcon icon={faHeart} color="red" />{" "}
        <TextLoop children={city} interval={2600} fade="true" />
      </div> */}

      <div className="posts">
        {posts.map((thepost, index) => (
          // <h3>{post.frontmatter.title}</h3>
          <Post post={thepost} key={index} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get files from post directory
  const files = fs.readdirSync(path.join("posts"));
  // console.log(files)

  // get slug and frontmatter from post
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    console.log(markdownWithMeta);
    console.log(__dirname);

    return {
      slug,
      frontmatter,
    };
  });

  // console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
