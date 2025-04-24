import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import FilterAnecdote from './components/FilterAnecdote'

const App = () => {
  return (
    <div>
      <FilterAnecdote />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App