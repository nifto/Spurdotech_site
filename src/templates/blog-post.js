const React = require("react");
const { graphql } = require("gatsby");

exports.default = function BlogPost({ data }) {
  const post = data.mdx;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

exports.query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;