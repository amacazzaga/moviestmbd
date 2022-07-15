import React from 'react'
import TelevisionItem from './TelevisionItem';
const imgUrl = "https://image.tmdb.org/t/p/w780";
const TelevisionItemHome = ({populartelevision,loading}) => {
    return loading!=true ? (
        populartelevision.map((m) => (
          <div className="mt-5  ">
            <TelevisionItem
              key={m.id}
              id={m.id}
              title={m.title}
              image={imgUrl + m.poster_path}
              overview={m.overview}
            />
          </div>
        ))
      ) : (
        <div className="vh" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      );
}

export default TelevisionItemHome