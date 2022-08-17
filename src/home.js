import { useState } from 'react';
import BlogList from './blogLists';

const Home = () => {
    const [blogs, setBlogs] = useState([
       { title: 'My new website', body: 'lorem ipsum...', author: 'oyindamola', id:'1', year: '2022'}, 
       { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Ballerina', id:'2', year: '2017'}, 
       { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Kushimo', id:'3', year: '2000'}
    ]);

        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}    
export default Home;