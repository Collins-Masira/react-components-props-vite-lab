function Article({ post }) {
  if (!post) return null;

  const {
    title = "No title",
    date = "No date",
    preview = "No content"
  } = post;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;