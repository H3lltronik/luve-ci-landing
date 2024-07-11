import React from "react";
import image from "../../assets/images/pexels-gl-iık-3837464.webp";
import apolloClient from "../../data/api/apollo-client";
import {
  GET_ALL_BLOG_ENTRIES_FOR_COUNTING_TAGS,
  GET_ALL_TAGS,
} from "../../data/graphql/queries";
import {
  GetAllBlogEntriesForCountingTagsQuery,
  GetAllTagsQuery,
} from "../../data/graphql/types";
import InnerPageHeader from "../common/InnerPageHeader/InnerPageHeader";
import Search from "./components/Search/Search";

type BlogLayoutProps = {
  children?: React.ReactNode;
};
export default async function BlogLayout(props: BlogLayoutProps) {
  const { data: tagsData } = await apolloClient.query<GetAllTagsQuery>({
    query: GET_ALL_TAGS,
  });

  const {
    data: { blogEntries },
  } = await apolloClient.query<GetAllBlogEntriesForCountingTagsQuery>({
    query: GET_ALL_BLOG_ENTRIES_FOR_COUNTING_TAGS,
  });

  const tags =
    tagsData.tags?.data.map((tag) => ({
      id: tag.id ?? "",
      name: tag.attributes?.name ?? "Unknown Tag",
      slug: tag.attributes?.slug ?? "unknown-slug",
      blogsCount: blogEntries?.data.reduce((acc, entry) => {
        if (
          entry.attributes?.tags?.data.some(
            (entryTag) => entryTag.id === tag.id
          )
        ) {
          return acc + 1;
        }
        return acc;
      }, 0) as number,
    })) ?? [];

  return (
    <>
      <main>
        <InnerPageHeader
          image={{ src: image.src, alt: "" }}
          title="BLOG"
          subtitle="Mantente Informado">
          <Search placeholder="Busqueda..." tags={tags} />
        </InnerPageHeader>

        {props.children}
      </main>
    </>
  );
}
