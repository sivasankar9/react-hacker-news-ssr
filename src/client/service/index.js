import fetchData from '../../helpers/fetch';

export const getHackerNews = async(params) => {

    const myData = await fetchData(params);

    return myData.json();

};
