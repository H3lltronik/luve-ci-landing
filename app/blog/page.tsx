import HighlightEntry from './components/HighlightEntry/HighlightEntry'
import Tag from './components/Tag/Tag'

export default function BlogsPage () {
  return (
    <div className=''>
      <div className=''>
        <Tag mode='normal' text='Financiero' type='normal' />
        <Tag mode='flat' text='Financiero' type='normal' />
        <Tag mode='normal' text='Financiero' type='big' />
        <Tag mode='flat' text='Financiero' type='big' />
      </div>

      <HighlightEntry />
    </div>
  )
}
