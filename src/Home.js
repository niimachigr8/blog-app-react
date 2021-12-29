import BlogList from './BlogList';
import useFetch from './useFetch';
function Home() {

  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className="home">
      {/*conditional templating in react*/}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs}  title="Here is all my blogs!"/> }
    </div>
  )
}

export default Home
