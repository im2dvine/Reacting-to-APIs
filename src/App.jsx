// import React from 'react';

// const App = () => {
//     return (
//         <div>
//             <h1>Hello from App Component!</h1>
//         </div>
//     );
// };

// export default App;


import { useEffect, useState } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [loadFilms, setLoadFilms] = useState(false);
  const [loadPeople, setLoadPeople] = useState (false);

     useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
     .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

//  const fetchFilms = () => {
//    fetch("https://ghibliapi.herokuapp.com/films")
//       .then((res) => res.json())
//       .then((allFilms) => setFilms(allFilms));
//    }, [];

    useEffect(() => {
     fetch(`https://ghibliapi.herokuapp.com/people`)
       .then((res) => res.json())
       .then((allPeople) => setPeople(allPeople));
   }, []);

  return (
    <>
      <h1>Studio Ghibli API</h1>

      <button onClick={() => setLoadFilms(true)}>Load Films</button>

      {loadFilms &&
        films.map((films) => (
          <div className="col-md-6" key={`films-card-${films.id}`}>
            <div className="card shadow my-2">
              <div className="card-body">
                <h4 className="card-title">{films.setFilms}</h4>
                <p className="card-subtitle text-muted">
                  {" "}
                  Title: {films.title}
                </p>
                <p className="card-text">Description: {films.description}</p>
                <p className="card-subtitle text-muted">
                  {" "}
                  Directors: {films.director}
                </p>
                <p className="card-text"> Producer: {films.producer}</p>
                <p className="card-text">Release-date: {films.release_date}</p>
                <p className="card-text"> Score: {films.rt_score}</p>
              </div>
            </div>
          </div>
        ))
        }
        
        <button onClick={() => setLoadPeople(true)}>Load People</button>
        {loadPeople &&
 people.map((people) => (
        <div className="col-md-6" key={`people-card-${people.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <h4 className="card-title"> {people.setPeople}</h4>
                   <p className="card-subtitle text-muted"> Names:{people.name}</p>
                   <p className="card-text"> Gender: {people.gender}</p>
                   <p className="card-subtitle text-muted"> Age: {people.age}</p>
                   <p className="card-text"> eye-color: {people.eye_color}</p>
                 </div>
               </div>
             </div>
           ))}
           </>
       );
};



export default App;