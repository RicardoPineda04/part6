import { useEffect } from 'react'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import FilterAnecdote from './components/FilterAnecdote'
import Notification from './components/Notification'

import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <FilterAnecdote />
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App