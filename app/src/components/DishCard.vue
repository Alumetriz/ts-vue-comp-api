<script setup lang="ts">
import {computed} from "vue";
import type {PropType} from "vue";
import type {TheDish} from "@/types";

const props = defineProps({
  dish: {
    type: Object as PropType<TheDish>,
    required: true,
  }
})

const emits = defineEmits<{
  (e: 'delete-dish', dish: TheDish): void;
}>();

const statusColor = computed((): string => {
  switch (props.dish.status) {
    case 'Want to Try':
      return 'is-warning'
    case 'Recommended':
      return 'is-success'
    case 'Do Not Recommend':
      return 'is-danger'
    default:
      return ''
  }
});

const deleteDish = (): void => {
  emits('delete-dish', props.dish);
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt=""/>
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ dish.name }}
        </p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor">{{ dish.status }}</span>
        </p>
        <div>
          <button @click="deleteDish" class="button is-small is-danger is-light">Delete</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
