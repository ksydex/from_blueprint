import React from 'react'
import styles from './index.module.css'

export default ({ type, color, style, ...props }) => {
  let newType = types.filter(t => t.name.includes(type.toLowerCase()))[0] || null
  if (!newType) {
    console.warn(`Type "${type}" not exists. Using <p> instead`)
    newType = types[4]
  }

  const newProps = {
    ...props,
    className: newType.className,
    style: {
      ...style,
      color
    }
  }

  const Elem = () => React.createElement(newType.tag, newProps, props.children)

  return <Elem/>
}

const types = [
  {
    name: ['header', 'h1'],
    tag: 'h1',
    className: styles.header
  },
  {
    name: ['subheader', 'h2'],
    tag: 'h2',
    className: styles.subheader
  },
  {
    name: ['title', 'h3'],
    tag: 'h3',
    className: styles.title
  },
  {
    name: ['subtitle', 'h4'],
    tag: 'h4',
    className: styles.subtitle
  },
  {
    name: ['paragraph', 'p'],
    tag: 'p',
    className: styles.paragraph
  },
  {
    name: ['caption'],
    tag: 'p',
    className: styles.caption
  }
]