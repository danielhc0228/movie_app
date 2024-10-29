import React from "react";
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            const imageURL = `https://image.tmdb.org/t/p/w500/${location.state.poster_path}`;
            return (
                <section className='movie_container'>
                    <div className='movie_detail_container'>
                        <img
                            src={imageURL}
                            alt={location.state.title}
                            title={location.state.title}
                        ></img>
                        <div>
                            <h3 className='movie_title'>
                                {location.state.title}
                            </h3>
                            <h4 className='movie_release_date'>
                                {location.state.release_date}
                            </h4>
                            <p className='movie_summary'>
                                {location.state.overview}
                            </p>
                        </div>
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}
export default Detail;
