import React from "react";
import PropTypes from "prop-types";

Movies.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
};

function Movies({ id, title, overview, release_date, poster_path }) {
    return <h4>{title}</h4>;
}

export default Movies;
