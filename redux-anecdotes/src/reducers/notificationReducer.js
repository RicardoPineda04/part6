import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNotification(state, action){
            return action.payload
        },
        clearNotification(state, action){
            return null
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export const addNotification = (message, seconds) => {
    return dispatch => {
      dispatch(setNotification(message))
      setTimeout(() => {
        dispatch(clearNotification())
      }, seconds * 1000)
    }
  }
export default notificationSlice.reducer