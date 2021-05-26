import { useQuery, gql } from "@apollo/client"

const AuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`



function NewBook () {

  const { loading, error, data } = useQuery(AuthorsQuery)

  console.log(data);
  return (
    <>
      <div className="container">
        <form action="">
          <label htmlFor="bookName">Book Name: </label>
          <input name="bookName" id="bookName" type="text"/>

          <br/>

          <label htmlFor="bookPrice">Book Price: </label>
          <input name="bookPrice" id="bookPrice" type="text"/>

          <br/>

          <label htmlFor="authorSelect">Authors: </label>
          <select name="authorSelect" id="authorSelect">
            <option value={null}>New Author</option>
            {loading && <>Loading</>}
            {loading && <>Loading</>}
            {  !loading && !error &&
              data.authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
              ))
            }
          </select>


          <label htmlFor="authorName">Author Name: </label>
          <input name="authorName" id="authorName" type="text"/>
          <button>Send</button>
        </form>
      </div>
    </>
  )
}

export default NewBook