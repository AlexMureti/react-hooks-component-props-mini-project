import react from "react";

/**
 * Make an About component as a child of App. It should return:

an <aside> element with the following elements inside:
an <img> element, with the src set to an image passed as a prop called image
the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215Links to an external site."
the image should also be accessible! Give it an alt attribute of "blog logo"
a <p> element, with the text for the blog passed in as a prop called about
 */
/**
 * 
  ● uses a default value for the image if no image is passed as a prop

    expect(received).toContain(expected) // indexOf

    Expected substring: "https://via.placeholder.com/215"
    Received string:    ""

      20 |   const img = screen.queryByAltText("blog logo");
      21 |   expect(img).toBeInTheDocument();
    > 22 |   expect(img.src).toContain("https://via.placeholder.com/215");
         |                   ^
      23 | });
      24 |
      25 | test("renders a <p> with the about text", () => {

      at Object.<anonymous> (src/__tests__/About.test.js:22:19)} props 
 * 
 */

const About = (props) => {
    const image = props.image || "https://via.placeholder.com/215";

    return (
        <aside>
            <img src={image} alt="blog logo" onError={(e) => e.target.src = "https://via.placeholder.com/215"} />
            <p>{props.about}</p>

        </aside>
    );
}

export default About;