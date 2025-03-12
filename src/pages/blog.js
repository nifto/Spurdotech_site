import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            categories
            tags
          }
          slug
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <h1>Spurdotech Blog</h1>
      <p>Expert tips, guides, and news on Apple Mac support & repairs.</p>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            <p><strong>Categories:</strong> {node.frontmatter.categories.join(", ")}</p>
            <p><strong>Tags:</strong> {node.frontmatter.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
