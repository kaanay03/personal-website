import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";
import Contact from "./pages/contact/Contact";
import Footer  from "./components/footer/Footer";
import Page from "./pages/page/Page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:slug">
          <Post />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/:slug">
          <Page />
        </Route>
      </Switch>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
