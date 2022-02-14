import { Desserts, Mains, Starters } from 'anthony-and-alicya-domain';

import { DishInterface } from '../interfaces/dish.interface';

export const DishLabelConstant: Record<string, DishInterface> = {
    [Starters.PORK]: {
        value: Starters.PORK,
        label: 'Confit belly pork',
        description: 'Asian spiced confit belly pork served with an asian slaw and soy dressing'
    },
    [Starters.TERRINE]: {
        value: Starters.TERRINE,
        label: 'Chicken terrine',
        description: 'Coronation chicken terrine served with a mango salsa and toast'
    },
    [Starters.GOATS_CHEESE]: {
        value: Starters.GOATS_CHEESE,
        label: 'Goats cheese terrine',
        description: 'Walnut crushed goats cheese terrine served with a rocket and balsamic salad'
    },
    [Mains.PORK]: {
        value: Mains.PORK,
        label: 'Roast pork loin',
        description: 'Roast pork loin served with a fondant potato and a side of wilted baby gem lettuce, crispy bacon and garlic cream peas'
    },
    [Mains.CHICKEN]: {
        value: Mains.CHICKEN,
        label: 'Roast chicken',
        description: 'Roast breast of chicken served with dauphinoise potatoes, green beans and a mushroom fricassee'
    },
    [Mains.TAGINE]: {
        value: Mains.CHICKEN,
        label: 'Moroccan vegetable and apricot tagine',
        description: 'Moroccan vegetable and apricot tagine served with pine nut and raisin cous-cous raita and flatbread'
    },
    [Desserts.FONDANT]: {
        value: Desserts.FONDANT,
        label: 'Chocolate fondant',
        description: 'Warm chocolate fondant served with pistachio ice cream'
    },
    [Desserts.STICKY_TOFFEE]: {
        value: Desserts.STICKY_TOFFEE,
        label: 'Sticky toffee pudding',
        description: 'Sticky toffee pudding with a butterscotch sauce and vanilla ice cream'
    },
    [Desserts.CREME_BRULE]: {
        value: Desserts.CREME_BRULE,
        label: 'Cremé brulee',
        description: 'Vanilla cremé brulee served with a seasonal compote'
    }
}