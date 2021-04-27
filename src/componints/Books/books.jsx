import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

import "./books.css"

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

function Books () {

  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <>loading..</>
  if (error) return <>{error.message}</>

  return (
    <div className="container">
      <ul className="books">
        {
          data.books.map(book => (
            <li key={book.id} className="book">
              <img src="https://via.placeholder.com/250x150" alt={book.name} className="book__img"/>
              <div>
                <p className="book__name"><b>Book Name: </b>{book.name}</p>
                <p className="book_author"><b>Book Author: </b>{book.author.name}</p>
              </div>
              <div className="book_price-wrapper">
                <span><b>Book Price: </b>{book.price}</span>
                <button type="submit" className="book__but-btn">BUY</button>
              </div>
            </li>
          ))
        }
      </ul>

      <Link to="/newbook" className="book__new">New Book</Link>
    </div>
  )
}

export default Books