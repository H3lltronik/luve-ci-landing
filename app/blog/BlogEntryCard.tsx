import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCardImages from "./BlogCardImages";
import { BlogEntryCardMarquee, TagProps } from "./BlogEntryCardMarquee";

type BlogEntryCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  authorImageUrl: string;
  authorName: string;
  publicationDate: string;
  tags: TagProps[];
  slug: string;
  hoverImages?: string[];
};

export const BlogEntryCard: React.FC<BlogEntryCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  authorImageUrl,
  authorName,
  slug,
  publicationDate,
  tags,
  hoverImages,
}) => {
  return (
    <article className="flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-lg group p-2">
      <header>
        <Link href={`/blog/${slug}`}>
          <div className="h-[300px] relative transition-all group-hover:scale-105">
            <BlogCardImages
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              hoverImages={hoverImages}
            />
          </div>
        </Link>
      </header>
      <div>
        <div className="mb-2">
          <BlogEntryCardMarquee tags={tags} />
        </div>
        <Link href={`/blog/${slug}`}>
          <h2 className="font-bold text-3xl mb-3 line-clamp-2">{title}</h2>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-4">{description}</p>
      </div>
      <footer className="border-t border-gray-300">
        <div className="flex py-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={authorImageUrl}
              alt={`Profile picture of ${authorName}`}
              width={48}
              height={48}
              layout="fixed"
            />
          </div>
          <div className="ml-2">
            <strong className="font-bold text-lg">{authorName}</strong>
            <p className="text-gray-500 text-sm capitalize">
              {publicationDate}
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
};
