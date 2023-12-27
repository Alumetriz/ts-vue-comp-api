<script setup lang="ts">
import {v4 as uuidv4} from 'uuid'
import {onMounted, reactive, ref} from 'vue'
import type {Restaurant, Status} from "@/types";
import {restaurantStatusList} from "@/constants";

const newRestaurant = reactive<Restaurant>({
  id: uuidv4(),
  name: '',
  address: '',
  website: '',
  status: 'Want to Try',
})

const emit = defineEmits<{
  (e: 'add-new-restaurant', newRestaurant: Restaurant): void;
  (e: 'cancel-new-restaurant'): void;
}>()

const addNewRestaurant = (): void => {
  emit('add-new-restaurant', newRestaurant);
}

const cancelNewRestaurant = (): void => {
  emit('cancel-new-restaurant');
}

const elNameInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  elNameInput.value?.focus();
})

const updateName = (event: InputEvent) => {
  newRestaurant.name = (event.target as HTMLInputElement).value;
}

const updateWebsite = (event: InputEvent) => {
  newRestaurant.website = (event.target as HTMLInputElement).value;
}

const updateStatus = (event: Event) => {
  newRestaurant.status = (event.target as HTMLSelectElement).value as Status;
}
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name: {{ newRestaurant.name }}</label>
        <div class="control">
          <input
              :value="newRestaurant.name"
              @input="updateName"
              type="text"
              class="input is-large"
              placeholder="Beignet and the Jets"
              required
              ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <label for="website" class="label">Website</label>
        <div class="control">
          <input :value="newRestaurant.website" @input="updateWebsite" type="text" class="input"
                 placeholder="www.beignetandthejets.com"/>
        </div>
      </div>
      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select :value="newRestaurant.status" @change="updateStatus" id="status">
            <!-- v-model="newRestaurant.status"-->
            <option v-for="status in restaurantStatusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addNewRestaurant" class="button is-success">Create</button>
          <button @click="cancelNewRestaurant" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
