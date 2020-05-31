import fetchCallData from './fetchData'

export const getEventsData = async () => {
  const myData = await fetchCallData('events')

  return myData.json()
}
