<script setup lang="ts">
import {v4 as uuidv4} from 'uuid'
import {onMounted, reactive, ref} from "vue";
import type {TheDish} from "@/types";

const newDish = reactive<TheDish>({
  id: uuidv4(),
  name: '',
  status: 'Want to Try',
  diet: '',
})

const emit = defineEmits<{
  (e: 'add-new-dish', newDish: TheDish): void;
  (e: 'cancel-new-dish'): void;
}>()

const addNewDish = (): void => {
  emit('add-new-dish', newDish);
}

const cancelNewDish = (): void => {
  emit('cancel-new-dish');
}

const elNameInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  elNameInput.value?.focus();
});
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
              v-model="newDish.name"
              type="text"
              class="input is-large"
              placeholder="Mystery Flavored Shrimp"
              required
              ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addNewDish" class="button is-success">Create</button>
          <button @click="cancelNewDish" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
