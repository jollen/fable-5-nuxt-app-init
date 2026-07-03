<script setup>
// Main reader page: fetches the headline list, then loads the selected article.
const { data: items } = await useFetch('/api/news')

const selectedId = ref(null)

// Default to the first story once the list is available.
watchEffect(() => {
  if (selectedId.value === null && items.value?.length) {
    selectedId.value = items.value[0].id
  }
})

const { data: article } = await useFetch(
  () => `/api/news/${selectedId.value}`,
  { immediate: false, watch: [selectedId] },
)

function select(id) {
  selectedId.value = id
}
</script>

<template>
  <div class="reader">
    <header class="reader__header">
      <h1 class="reader__brand">Semiconductor News Reader</h1>
      <p class="reader__tagline">Analysis and headlines from across the chip industry.</p>
    </header>

    <main class="reader__body">
      <aside class="reader__sidebar">
        <NewsList :items="items || []" :selected-id="selectedId" @select="select" />
      </aside>
      <section class="reader__main">
        <NewsArticle :article="article" />
      </section>
    </main>
  </div>
</template>

<style>
:root {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
}
body {
  margin: 0;
  background: #fafbfc;
  color: #1a202c;
}
.reader {
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.5rem;
}
.reader__header {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}
.reader__brand {
  margin: 0;
  font-size: 1.5rem;
}
.reader__tagline {
  margin: 0.25rem 0 0;
  color: #718096;
  font-size: 0.9rem;
}
.reader__body {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  align-items: start;
}
.reader__main {
  min-width: 0;
}
@media (max-width: 720px) {
  .reader__body {
    grid-template-columns: 1fr;
  }
}
</style>
