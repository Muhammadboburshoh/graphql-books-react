import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
  {
    books {
      name
      price
      id
      author {
        name
      }
    }
  }
`

function App () {

  const { loading, error, data } = useQuery(QUERY)
  console.log(data);

  if (loading) return <>loading..</>
  if (error) return <>{error.message}</>

  return (
    <>
      <ul>
        {
          data.books.map(book => (
            <li key={book.id}>{book.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App