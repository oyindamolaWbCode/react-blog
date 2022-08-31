import { Link } from "react-router-dom";
import './image/background.jpg'

const NotFound = () => {
  return (
    <div className="image">
        <img src="..,/reactblog/image/background.jpg" alt="logo"/>
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <Link to="/">Back to the homepage</Link>
    </div>
    </div>
  );
};

export default NotFound;
