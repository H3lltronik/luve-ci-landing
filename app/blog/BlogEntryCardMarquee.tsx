'use client'
import Marquee from 'react-fast-marquee'
import Tag from './components/Tag/Tag'

export type TagProps = {
  id: string
  name: string
  slug: string
}
type Props = {
  tags: TagProps[]
}
export const BlogEntryCardMarquee = (props: Props) => {
  return (
    <Marquee className='' gradient={false} pauseOnHover play={props.tags.length > 3}>
      <div className='flex gap-5'>
        {
          props.tags.map((tag) => (
            <Tag key={tag.id} mode='normal' text={tag.name} slug={tag.slug} type='normal' id={tag.id} />
          ))
        }
      </div>
    </Marquee>
  )
}
