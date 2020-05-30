export const updateLocalStorage = (objectID, item) => {

    localStorage.setItem(objectID, JSON.stringify(item));

    return item;

};

export const buildGraphData = (hits) => hits.map(item => ({name: item.objectID, polls: item.points}));
