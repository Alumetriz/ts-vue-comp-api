import type {restaurantStatusList, dietList} from "@/constants";

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    website: string;
    status: Status;
    diet?: Diet
}

export interface TheDish {
    id: string;
    name: string;
    status: Status;
    diet?: Diet
}

export interface DataShape {
    filterText: string;
    showNewForm: boolean;
}

export interface RestaurantsDataShape extends DataShape {
    restaurantList: Restaurant[];
}

export interface DishesDataShape extends DataShape {
    dishList: TheDish[]
}

type Status = 'Want to Try' | 'Recommended' | 'Do Not Recommend';
type Diet = typeof dietList[number]
type StatusList = typeof restaurantStatusList[number]