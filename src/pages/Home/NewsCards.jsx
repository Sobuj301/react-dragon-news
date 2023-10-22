import { Link } from "react-router-dom";


const NewsCards = ({ news }) => {
    const {name,_id,image_url,title,details} = news
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                  details.length > 200 ? <p>{details.slice(0,200)} <Link 
                  to={`/news/${_id}`}
                  className="text-xl text-blue-500">read more</Link></p>
                  :
                  <p>{details}</p>
                }
                
            </div>
        </div>
    );
};

export default NewsCards;