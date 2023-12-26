export interface Restaurant {
    id: string;
    name: string;
    address: string;
    website: string;
    status: string;
}

export interface TheDish {
    id: string;
    name: string;
    status: string;
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