import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    calculation: {
        price: 0,
        vat: 0,
        total: 0,
    },
    items: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        add(state, action) {
            const itemExit = state.items.find(item => {
                return item.id === action.payload.id;
            });

            const { id, name, price, quantity_available, vat, addons } =
                action.payload;
            const addon = addons.filter(addon => addon.is_default == true);

            const item = {
                id: id,
                name: name,
                price: price,
                quantity: 0,
                vat: vat,
                addons: [...addon],
            };

            if (!itemExit) {
                item.quantity += 1;
                state.items.push(item);

                // calculate total
                state.calculation.price += item.price * item.quantity;
                state.calculation.vat += Math.floor(
                    item.price * (item.vat / 100)
                );
                state.calculation.total +=
                    item.price + Math.floor(item.price * (item.vat / 100));
            }

            if (itemExit) {
                state.items.map(item => {
                    if (
                        item.id === action.payload.id &&
                        item.quantity < quantity_available
                    ) {
                        item.quantity += 1;

                        // calculate total
                        state.calculation.price += item.price;
                        state.calculation.vat += Math.floor(
                            item.price * (item.vat / 100)
                        );
                        state.calculation.total +=
                            item.price +
                            Math.floor(item.price * (item.vat / 100));
                    }
                });
            }
        },

        remove(state, action) {
            // calculate total
            state.items.filter(item => {
                if (item.id === action.payload) {
                    state.calculation.price -= item.price * item.quantity;
                    state.calculation.vat -= Math.floor(
                        item.price * item.quantity * (item.vat / 100)
                    );
                    state.calculation.total -=
                        item.price * item.quantity +
                        Math.floor(
                            item.price * item.quantity * (item.vat / 100)
                        );
                }
            });

            // remove item
            const filteredItems = state.items.filter(
                item => item.id !== action.payload
            );
            state.items = [...filteredItems];
        },

        clearALL(state, action) {
            return (state = { ...initialState });
        },
    },
});

export const { add, remove, clearALL } = cartSlice.actions;

export default cartSlice.reducer;
