import Link from "next/link"
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";




const HomePage = () => {
    const postMetadata = getPostMetadata()
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post}></PostPreview>
    ))
    return <p> {postPreviews} </p>
};

export default HomePage