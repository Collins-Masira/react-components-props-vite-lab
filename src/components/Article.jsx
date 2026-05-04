function Article({ post = {} }) {
  return (
    <article>
      <h3>{post.title || "No title"}</h3>
      <small>{post.date || "No date"}</small>
      <p>{post.preview || "No preview"}</p>
    </article>
  );
}

export default Article;