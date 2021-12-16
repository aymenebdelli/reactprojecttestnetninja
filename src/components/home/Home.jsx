import React from 'react';
import BlogsList from "../BlogsList/BlogsList";
import useFetch from '../useFetch'

function Home() {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
//     [
//     {title: 'website',body: 'bb',author: 'jack',id:1},
//   {title: 'article',body: 'cc',author: 'jack',id:2},{title: 'blog',body: 'dd',author: 'jack',id:3}
// ]

  // const [name, setName] = useState('aymen')

  return (
    <div className="main-component">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
    {blogs && < BlogsList blogs={blogs} title="all blogs!" />}
      {/* <button onClick={() => setName("luigi")}>change name</button> */}
      {/* <p>{name}</p> */}
      {/* <BlogsList blogs={blogs.filter((blog)=> blog.author === 'break')} title='break blogs!' /> */}
    </div>
  );
}
export default Home;