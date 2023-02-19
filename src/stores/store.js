import { defineStore } from "pinia";

export const useStore = defineStore( 'storeState',{
	state: () => {
		return {
			lastid: 2,
			noted: [
				{
					id:1,
					title:"One",
					content:"lorem"
				},
				{
					id:2,
					title:"Two",
					content:"lispum"
				},
			]
			}
	},
	
	getters: {
		
	},

	actions: {
		addNote(newNote){
			this.lastid++;
			let newEl = {
				id : this.lastid,
				title: 'Title',
				content: newNote
			}
			
			this.noted.unshift(newEl)
			console.log()
		},
		delNote(idWDel){
			for(let i = 0; i < this.noted.length; i++){
				if (this.noted[i].id == idWDel){
					this.noted.splice(i,1)
					break;
				}
				if (this.noted.length == 1){
					this.noted.pop()
				}
			}
		}

	}
})