'use client'
import { FilterOutlined } from '@ant-design/icons'
import { Badge, Button, Modal } from 'antd'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PrimaryButton } from '../common/Buttons'
import Tag from './components/Tag/Tag'

interface BlogsFiltersModalProps {
  tags: Array<{ id: string; name: string; slug: string; blogsCount: number }>;
}

const BlogsFiltersModal: React.FC<BlogsFiltersModalProps> = (props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const queryTags = searchParams.get('tags')
    if (queryTags === 'all') {
      setSelectedTags(props.tags.map((tag) => tag.name))
    } else if (typeof queryTags === 'string') {
      setSelectedTags(queryTags.split(','))
    } else if (Array.isArray(queryTags)) {
      setSelectedTags(queryTags)
    }
  }, [searchParams, props.tags])

  const handleTagClick = (tagId: string, tagSlug: string) => {
    if (selectedTags.includes(tagSlug)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagSlug))
    } else {
      setSelectedTags([...selectedTags, tagSlug])
    }
  }

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tags', selectedTags.join(','))
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleClearFilters = () => {}

  const Footer = (
    <div className='flex gap-5 justify-center'>
      <PrimaryButton text='APLICAR' onClick={handleApplyFilters} />
      <PrimaryButton text='LIMPIAR' onClick={handleClearFilters} />
    </div>
  )

  const handleOpenFilters = () => {
    setIsOpen(true)
  }

  const handleCloseFilters = () => {
    setIsOpen(false)
  }

  const handleSelectAllTags = () => {
    // TOGGLE
    if (isAllTagsSelected) {
      setSelectedTags([])
    } else {
      setSelectedTags(props.tags.map((tag) => tag.slug))
    }
  }

  const isAllTagsSelected = selectedTags.length === props.tags.length

  return (
    <>
      <div className='inline-block'>
        <Badge count={selectedTags.length}>
          <Button
            shape='circle'
            size='large'
            icon={<FilterOutlined />}
            onClick={handleOpenFilters}
          />
        </Badge>
      </div>
      <Modal open={isOpen} onCancel={handleCloseFilters} footer={Footer}>
        <p className='text-2xl mb-5'>Etiquetas</p>

        <div className='flex gap-2 flex-wrap'>
          <Tag
            mode={isAllTagsSelected ? 'flat' : 'normal'}
            text='Todos'
            type='normal'
            onClick={handleSelectAllTags}
          />
          {props.tags.map((tag) => {
            const isSelected = selectedTags.includes(tag.slug)
            const mode = isSelected ? 'flat' : 'normal'

            return (
              <Tag
                key={tag.id}
                mode={mode}
                text={`${tag.name} (${tag.blogsCount})`}
                id={tag.id}
                slug={tag.slug}
                type='normal'
                onClick={handleTagClick}
              />
            )
          })}
        </div>
      </Modal>
    </>
  )
}

export default BlogsFiltersModal
