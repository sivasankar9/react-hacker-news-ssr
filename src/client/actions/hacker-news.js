// import actions from '../actions-list';
import Actions from '.'
import { getHackerNews } from '../service'

export default (query = '?tags=front_page') => async (dispatch) => {
  try {
    dispatch(Actions.loading({ status: 'LOADING' }))

    const data = await getHackerNews(query)

    await dispatch(Actions.loading({ status: 'LOADED' }))

    dispatch(Actions.updateNews(data))
  } catch (e) {
    dispatch(Actions.error(e.message))
  }
}
