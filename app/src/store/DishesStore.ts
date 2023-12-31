import {defineStore} from "pinia";
import type {TheDish} from "@/types";

interface StateShape {
    list: TheDish[];
}

export const useDishesStore = defineStore('DishesStore', {
    state: (): StateShape => ({
        list: [
            {
                id: '7d9f3f17-964a-4e82-98e5-ecbba4d709a1',
                name: 'Ghost Pepper Poppers',
                status: 'Want to Try',
            },
            {
                id: '5c986b74-fa02-4a22-98f2-b1ff3559e85e',
                name: 'A Little More Chowder Now',
                status: 'Recommended',
            },
            {
                id: 'c113411d-1589-414f-a283-daf7eedb631e',
                name: 'Full Laptop Battery',
                status: 'Do Not Recommend',
            },
        ]
    }),
    actions: {
        addDish(payload: TheDish): void {
            this.list.push(payload)
        },
        deleteDish(payload: TheDish): void {
            this.list = this.list.filter((dish) => {
                return dish.id !== payload.id
            })
        }
    },
    getters: {
        numberOfDishes: (state): number => {
            return state.list.length
        }
    }
})