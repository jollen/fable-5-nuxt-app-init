import { getAllNews } from '../data/news.js'

// GET /api/news -> list of news items (without full article body).
export default defineEventHandler(() => {
  return getAllNews().map(({ content, ...summary }) => summary)
})
