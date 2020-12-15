import { createSelector } from 'reselect';
import memoize from 'lodash.memoize'; //this helps us memoize the selectSingleCollection function since it uses a variable (collectionRouteName). Just wrap your function in memoize()

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//returns the array version of the collections object but also only returns a version of the collections object in which each collection has an items array with only the first 4 items in it.
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map((collection) => {
        return { ...collections[collection], items: collections[collection].items.slice(0, 4) }
    })
);

export const selectSingleCollection = memoize((collectionRouteName) =>
    createSelector(
        [selectShopCollections],
        collections => collections[collectionRouteName]
    ));
    /* By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to
memoize the return of this function (in this case we return a selector). If this function gets called again with the same
collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized
so just return the selector that's been stored */