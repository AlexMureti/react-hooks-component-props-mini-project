import React from 'react';
import Header from './Header';
import ArticleList from './ArticleList';
import About from './About';


/**
 * Make an App component that renders the following:
 * - An outer <div> with a class name of "App", with the following elements inside:
 *   - A <Header /> component, passing in a name prop of "My Blog"
 *   - An <ArticleList /> component, passing in an articles prop of the articles array (see below)
 *   - An <About /> component, passing in an about prop of "This is my blog about cute animals!" and no image prop
 */

const articles = [
  {
    id: 1,
    title: "The Cutest Puppies",
    date: "March 5, 2021",
    preview: "Discover the most adorable puppies from around the world.",
  },
  {
    id: 2,
    title: "Adorable Kittens",
    date: "March 10, 2021",
    preview: "A look at the cutest kittens you'll ever see.",
  },
  {
    id: 3,
    title: "Funny Animal Videos",
    date: "March 15, 2021",
    preview: "Laugh out loud with these hilarious animal videos.",
  },
];

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About about="This is my blog about cute animals!" />
      <ArticleList articles={articles} />

    </div>
  );
}

export default App;
