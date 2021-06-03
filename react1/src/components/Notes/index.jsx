import React, { useEffect, useState } from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setNotes(json);
        });
    }, 4000);
  }, []);

  if(notes.length){
    return (
      <div className='container'>
        <div className="row">
          {notes.map((note) => {
            return (
              <div key={note.id} className="col-12 mb-2">
                <div className="row">
                  <div className="col-8">
                    {note.title}
                  </div>
                  <div className="col-4">
                    <button type="button" className="btn btn-primary">Отправить</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }else{
    return (
      <div className='container'>
        <div className="row">
          <div className="col-12 text-center">
            <div className="spinner-border text-warning" role="status"></div>
          </div>
        </div>
      </div>
    )
  }
}