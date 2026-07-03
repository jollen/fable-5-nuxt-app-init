<script setup>
// Renders the list of news headlines. Emits `select` when an item is clicked.
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  selectedId: {
    type: Number,
    default: null,
  },
})

defineEmits(['select'])
</script>

<template>
  <ul class="news-list">
    <li
      v-for="item in items"
      :key="item.id"
      :class="['news-list__item', { 'is-active': item.id === selectedId }]"
      @click="$emit('select', item.id)"
    >
      <h3 class="news-list__title">{{ item.title }}</h3>
      <p class="news-list__summary">{{ item.summary }}</p>
      <p class="news-list__meta">{{ item.source }} · {{ item.publishedAt }}</p>
    </li>
  </ul>
</template>

<style scoped>
.news-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.news-list__item {
  padding: 0.85rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.news-list__item:hover {
  background: #f4f6f8;
}
.news-list__item.is-active {
  background: #eef4ff;
  border-color: #b9d1ff;
}
.news-list__title {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  line-height: 1.3;
}
.news-list__summary {
  margin: 0 0 0.35rem;
  font-size: 0.85rem;
  color: #4a5568;
}
.news-list__meta {
  margin: 0;
  font-size: 0.75rem;
  color: #94a3b8;
}
</style>
