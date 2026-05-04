import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blogData";

function App() {
  return (
    <div>
      <Header />

      <About
        about={blogData.about}
        image="https://via.placeholder.com/215"
      />

      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;