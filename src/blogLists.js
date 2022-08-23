// props is used for reuseable codes, It is a way of passing parent component to a child component

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p>Written by {blog.author} </p>
          <p> {blog.year} </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
