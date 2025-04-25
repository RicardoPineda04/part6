import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import FilterAnecdote from './components/FilterAnecdote'
import Notification from './components/Notification'

const App = () => {
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