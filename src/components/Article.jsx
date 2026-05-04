function Article({ post }) {
  if (!post) return null; // prevents crash

  const { title, date, preview } = post;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;