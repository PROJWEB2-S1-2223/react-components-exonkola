import React from 'react';
import './App.css';

const course = [
  { nom : ' fromage ',},
  { nom : ' farine' , },
];



function App() {

  return (
   <div>

          <h1>liste des courses</h1>


          <Course />
   </div>



  );
}

 function Course (){
  return (

   <ul>
       {course.map(function displayTerm(term) {
         return (
           <li key={term.objectID}>
             <span>
               {term.nom}
             </span>
           </li>
         );
       })}
   </ul>
   );
 }


export default App;
