import { Link } from "react-router-dom";
import image from './image/background.jpg';
const NotFound = () => {
  return (
    <div className="image">
      <img src={image} alt="logo" className="NtImage"/>
      <div className="not-found">
        <h2>Sorry</h2>
        <p>Page cannot be found</p>
        <Link to="/">Back to the homepage</Link>
        
      </div>
    </div>
  );
};

export default NotFound;
