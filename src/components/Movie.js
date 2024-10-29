import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Movies.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
};

function Movies({ id, title, overview, release_date, poster_path }) {
    const imageURL = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    release_date,
                    title,
                    overview,
                    poster_path,
                },
            }}
        >
            <div className='movie'>
                <img src={imageURL} alt={title} title={title}></img>
                <div>
                    <h3 className='movie_title'>{title}</h3>
                    <h4 className='movie_release_date'>{release_date}</h4>
                    <p className='movie_summary'>{overview.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );
}

export default Movies;
