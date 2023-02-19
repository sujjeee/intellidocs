import { GraphQLClient, gql } from 'graphql-request';

const hygraph = new GraphQLClient(
  process.env.GRAHPQL_ENDPOINT
);

export const getPostDetail = async (slugQuery) => {
  const { posts } = await hygraph.request(gql
    `query BlogPostPage($slug: String! ){
        posts(where:{slug: $slug}){
          slug
          title
          updatedAt
          description
          coverImg {
            url
          }
          content {
            html
          }
          createdAt
          relatedPosts {
            slug
            title
            coverImg {
              url
            }
          }
          keywords
          category {
            name
          }
          author {
            name
          }
          popularPosts {
            slug
            title
            coverImg {
              url
            }
          }
        }
      }
      `
    ,
    { slug: slugQuery }
  );

  return posts
};

export const getPosts = async () => {
  const { allPosts } = await hygraph.request(gql`
        {
          allPosts:posts {
            slug
            title
            description
            content{
              html
            }
            coverImg {
              url
            }
            category {
              name
            }
          }
        }
    `
  );

  return allPosts
};

