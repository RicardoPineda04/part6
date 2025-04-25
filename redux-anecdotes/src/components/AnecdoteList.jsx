import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(({ anecdotes, filter }) =>
        [...anecdotes]
          .filter(anecdote =>
            anecdote.content.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a, b) => b.votes - a.votes)
      )
    const dispatch = useDispatch()
    
    const vote = (id, anecdote) => {
        dispatch(addVote(id))
        dispatch(setNotification(`You voted ${anecdote}`))
        setTimeout(() => {
            dispatch(setNotification(null))
        }, 5000)
    }
    
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
            </div>
          )}
        </div>
    )
}

export default AnecdoteList