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
		getNoteContent: (state) => {
			return (id) => {
				return state.noted.filter(note => { return note.id === id})[0]
			}
		}
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
		},
		changenote(id, newcont){
			for(let i = 0; i < this.noted.length; i++){
				if(this.noted[i].id == this.noted[id].id){
					this.noted[i].content = newcont
					break
				}
			}
		}
	}
})