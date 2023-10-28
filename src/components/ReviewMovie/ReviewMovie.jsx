import { fitDate } from 'helpers/fitDate';
import {
  CardMovie,
  CardMovieImg,
  CardMovieH1,
  CardMovieH2,
  CardMovieText,
} from './ReviewMovie.styled';

export const ReviewMovie = ({ foundEl }) => {
  const {
    title,
    genres,
    popularity,
    overview,
    release_date,
    poster_path,
    vote_count,
  } = foundEl;

  return (
    <CardMovie>
      <CardMovieImg
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width={200}
      />
      <CardMovieH1>
        {title} ({fitDate(release_date)})
      </CardMovieH1>
      <CardMovieText>
        User Score: {vote_count}%{popularity}%
      </CardMovieText>
      <CardMovieH2>Overview</CardMovieH2>
      <CardMovieText>{overview}</CardMovieText>
      <CardMovieH2>Genres</CardMovieH2>
      <CardMovieText>
        {
          console.log(genres)
          //   genres.map(el => el.name)
        }
      </CardMovieText>
    </CardMovie>
  );
};
// {
//     "adult": false,
//     "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
//     "belongs_to_collection": null,
//     "budget": 20000000,
//     "genres": [
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         }
//     ],
//     "homepage": "https://www.fivenightsatfreddys.movie",
//     "id": 507089,
//     "imdb_id": "tt4589218",
//     "original_language": "en",
//     "original_title": "Five Nights at Freddy's",
//     "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
//     "popularity": 2596.506,
//     "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
//     "production_companies": [
//         {
//             "id": 3172,
//             "logo_path": "/kDedjRZwO8uyFhuHamomOhN6fzG.png",
//             "name": "Blumhouse Productions",
//             "origin_country": "US"
//         },
//         {
//             "id": 211144,
//             "logo_path": null,
//             "name": "Scott Cawthon Productions",
//             "origin_country": "US"
//         },
//         {
//             "id": 114585,
//             "logo_path": "/bVw48J3WMT2NPEVDA8Gxydqo5P1.png",
//             "name": "Striker Entertainment",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2023-10-25",
//     "revenue": 7000000,
//     "runtime": 110,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Can you survive five nights?",
//     "title": "Five Nights at Freddy's",
//     "video": false,
//     "vote_average": 8.611,
//     "vote_count": 244
// }
