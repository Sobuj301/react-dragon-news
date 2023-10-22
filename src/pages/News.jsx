import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";


const News = () => {
    const [news, setNews] = useState([])
    const { id } = useParams()
    const allNews = useLoaderData()
    console.log(allNews)
    useEffect(() => {
        allNews.find(aNew => {
            aNew._id === id
            setNews(aNew)
        })
    }, [])


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-5">
                <div className=" col-span-3">
                    <div className="card  glass">
                        <figure><img src={news.thumbnail_url} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.details}</p>
                            <div className="card-actions ">
                                <Link to="/">
                                    <button className="btn btn-primary mt-5">
                                        GO TO HOME PAGE</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="border col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;