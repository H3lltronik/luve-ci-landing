import InnerPageHeader from '../common/InnerPageHeader/InnerPageHeader'
import image from '../../assets/images/pexels-gl-iık-3837464.webp'
import Search from './components/Search/Search'
import React from 'react'

type BlogLayoutProps = {
  children?: React.ReactNode;
};
export default function BlogLayout (props: BlogLayoutProps) {
  return (
    <main>
      <InnerPageHeader
        image={{ src: image.src, alt: '' }}
        title='BLOG'
        subtitle='Mantente Informado'
      >
        <Search placeholder='Busqueda...' />
      </InnerPageHeader>

      {props.children}
    </main>
  )
}
