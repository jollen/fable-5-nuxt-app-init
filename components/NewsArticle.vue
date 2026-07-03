<script setup>
// Renders the full body of a single selected article.
defineProps({
  article: {
    type: Object,
    default: null,
  },
})
</script>

<template>
  <article v-if="article" class="news-article">
    <h1 class="news-article__title">{{ article.title }}</h1>
    <p class="news-article__meta">{{ article.source }} · {{ article.publishedAt }}</p>
    <p class="news-article__summary">{{ article.summary }}</p>
    <div class="news-article__content">{{ article.content }}</div>
  </article>
  <div v-else class="news-article news-article--empty">
    <p>Select a story to start reading.</p>
  </div>
</template>

<style scoped>
.news-article {
  padding: 0.5rem 0.25rem;
}
.news-article--empty {
  color: #94a3b8;
  font-style: italic;
}
.news-article__title {
  margin: 0 0 0.35rem;
  font-size: 1.6rem;
  line-height: 1.25;
}
.news-article__meta {
  margin: 0 0 1rem;
  font-size: 0.8rem;
  color: #94a3b8;
}
.news-article__summary {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  font-weight: 500;
  color: #2d3748;
}
.news-article__content {
  font-size: 1rem;
  line-height: 1.65;
  color: #1a202c;
  white-space: pre-line;
}
</style>
