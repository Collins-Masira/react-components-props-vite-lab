import Article from "./Article";

function ArticleList(props) {
  return (
    <section>
      <h2>Articles</h2>
      {props.posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </section>
  );
}

export default ArticleList;