import { getNewsById } from '../../data/news.js'

// GET /api/news/:id -> a single news item, including full content.
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const item = getNewsById(id)

  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'News item not found' })
  }

  return item
})
