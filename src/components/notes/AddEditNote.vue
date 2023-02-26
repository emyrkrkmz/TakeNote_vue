<template>
	<v-container class="bg-cyan-darken-3 rounded-xl mt-4" >
	
		<v-textarea class="mt-4 mr-2"
		  label="Write..."
		  prepend-icon="mdi-book"
		  variant="outlined"
		  autofocus
		  rounded
		  v-model="props.modelValue"
		  :placeholder="props.placeholder"
		  @input="$emit('update:modelValue',$event.target.value)"
		></v-textarea>
		<row class="d-flex flex-row-reverse">
		<slot name="buttons"/>
		</row>
		</v-container>
</template>

<script setup>
import { useStore } from '@/stores/store.js'

import { ref } from 'vue';


const props = defineProps({
	modelValue:{
		type: String,
		required: true
	},
	placeholder:{
		type:String,
		default: "Type something..."
	}
})


const stores = useStore()

const newNote = ref('')

</script>