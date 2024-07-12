import React from 'react'

export const StructuredData = (props: { data: any }) => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data) }}
    />
  )
}
