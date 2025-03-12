const React = require("react");
const { graphql } = require("gatsby");

exports.default = function Blog({ data }) {
  const posts = data.allMdx.edges;
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
};

exports.query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            categories
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;