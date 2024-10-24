import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
    state = {
        isLoading: true,
        results: [],
    };

    getMovies = async () => {
        const {
            data: { results },
        } = await axios(
            "https://api.themoviedb.org/3/movie/popular?api_key=d68d5336da4d6bf978ca6219d1d207c8"
        );

        this.setState({ isLoading: false, results });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, results } = this.state;

        return (
            <div>
                {" "}
                {isLoading
                    ? "Loading..."
                    : results.map((result) => (
                          <Movie
                              key={result.id}
                              id={result.id}
                              title={result.title}
                              overview={result.overview}
                              release_date={result.release_date}
                              poster_path={result.poster_path}
                          />
                      ))}
            </div>
        );
    }
}

export default App;
