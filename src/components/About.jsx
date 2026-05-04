function About({
  image = "https://via.placeholder.com/215",
  about = "A blog about learning React",
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;