import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    enabled: { type: 'boolean', required: true },
    title: { type: 'string', required: true },
    createdAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    readTime: { type: 'number', required: true },
    imageUrl: { type: 'string', required: true },
    imageAlt: { type: 'string', required: true },
    tag: { type: 'string', required: true },
    tagColor: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })