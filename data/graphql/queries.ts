import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts($title: String, $tagSlugs: [String]) {
    blogEntries(
      filters: {
        title: { containsi: $title }
        tags: { slug: { in: $tagSlugs } }
      }
    ) {
      data {
        id
        attributes {
          author {
            data {
              id
              attributes {
                avatar {
                  data {
                    attributes {
                      url
                      alternativeText
                      caption
                      width
                      height
                    }
                  }
                }
                name
                description
              }
            }
          }
          slug
          date
          preview_title
          preview_description
          preview_hover_pictures {
            data {
              id
              attributes {
                url
                alternativeText
                caption
                width
                height
              }
            }
          }
          tags {
            data {
              id
              attributes {
                slug
                name
              }
            }
          }
          preview_picture {
            data {
              id
              attributes {
                url
                alternativeText
                caption
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HIGHLIGHTED_BLOG = gql`
  query GetHighlightedBlog {
    blogEntryHighlighted {
      data {
        id
        attributes {
          title
          description
          date
          date_color
          title_color
          description_color
          enabled
          image {
            data {
              id
              attributes {
                url
                alternativeText
                caption
                width
                height
              }
            }
          }
          blog_entry {
            data {
              id
              attributes {
                slug
              }
            }
          }
          tag {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_TAGS = gql`
  query GetAllTags {
    tags {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const GET_BLOG_ENTRY_BY_SLUG = gql`
  query GetBlogEntryBySlug($slug: String!) {
    findSlug(modelName: "blog-entry", slug: $slug) {
      ... on BlogEntryEntityResponse {
        data {
          id
          attributes {
            title
            date
            cover_picture {
              data {
                id
                attributes {
                  url
                  alternativeText
                  caption
                  width
                  height
                  formats
                }
              }
            }
            content_t
            seo {
              canonicalURL
              id
              keywords
              metaDescription
              metaImage {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              metaRobots
              metaSocial {
                description
                id
                image {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                socialNetwork
                title
              }
              metaTitle
              metaViewport
              structuredData
            }
            related_entries {
              data {
                id
                attributes {
                  author {
                    data {
                      id
                      attributes {
                        avatar {
                          data {
                            id
                            attributes {
                              url
                              alternativeText
                              caption
                              width
                              height
                            }
                          }
                        }
                        name
                        description
                      }
                    }
                  }
                  slug
                  date
                  preview_title
                  preview_description
                  preview_hover_pictures {
                    data {
                      id
                      attributes {
                        url
                        alternativeText
                        caption
                        width
                        height
                      }
                    }
                  }
                  tags {
                    data {
                      id
                      attributes {
                        slug
                        name
                      }
                    }
                  }
                  preview_picture {
                    data {
                      id
                      attributes {
                        url
                        alternativeText
                        caption
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
            tags {
              data {
                id
                attributes {
                  name
                  slug
                }
              }
            }
            author {
              data {
                id
                attributes {
                  avatar {
                    data {
                      id
                      attributes {
                        url
                        alternativeText
                        caption
                        width
                        height
                      }
                    }
                  }
                  name
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_BLOG_ENTRIES_FOR_COUNTING_TAGS = gql`
  query GetAllBlogEntriesForCountingTags {
    blogEntries {
      data {
        id
        attributes {
          tags {
            data {
              id
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;
