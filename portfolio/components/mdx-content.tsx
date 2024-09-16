import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { MDXComponents } from 'mdx/types'

import Counter from '@/components/counter'

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}


function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components: MDXComponents  = {
  code: Code,
  Counter
}

export default function MDXContent(
  props: MDXRemoteProps & JSX.IntrinsicAttributes
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
