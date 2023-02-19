<template>

	<AddEditNote />
	
	<v-container class="mt-5">
		<TakeNotes />
	</v-container>
</template>

<script setup>

import TakeNotes from '@/components/notes/TakeNotes.vue';
import AddEditNote from '@/components/notes/AddEditNote.vue'

import { useStore } from '@/stores/store.js'

import { ref } from 'vue';

const stores = useStore()

const newNote = ref('')


</script>
