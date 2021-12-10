import React from 'react';

const Card = () => {
  const students = [
    'Adrian Balan',
    'Allan Kane',
    'Clive Jefferies',
    'Ed Heywood Everett ',
    'Elis Porter',
    'Elliot Ferryman-Avery',
    'Gareth Morris',
    'Gurpreet Singh',
    'Ian Baker',
    'Izzy Pinder',
    'Jack Park-Paul',
    'Jade Landeg',
    'Matthew Wake',
    'Qari Qasim',
    'Ryan McGuire',
    'Tim Staton',
    'Adam Leigh',
    'Drew Clayton',
    'Darren Evans',
    'Darren Nickerson',
    "Eden O'Brien",
    'Ethan Fisher',
    'Harry Curtis',
    'Heather Burke',
    'Hev Ashton',
    'Hiten Patel',
    'Ian Webster',
    'James Grannan',
    'Jay Hayes',
    'Jeremy Blackmore',
    'Kat Hanson',
    'Kyle Huggins',
    'Nathan Page-Jones',
    'Neil Mergulhao',
    'Salah Shihaibi',
    'Stephen Buckley',
    'Alina Ananjeva',
    'Natassa Vasileiadou',
    'Andy Roberts ',
    'Rebecca Sullivan',
    'Charlotte Thompson',
    'Josh Human',
    'Karla Carreon',
    'Mark Golley',
    'Esmael Moohsen (Muhsin)',
    'Nih Sunwar',
    'Owen Milliner',
    'Pratik Magar',
    'Richard Keyzor',
    'Ruben Morris',
    'Sean Fitzpatrick',
    'Tharaka Mantrige',
    'Thomas Camidge',
    'Verity Gregory',
  ];

  const tutors = [
    'Doug',
    'Philippa',
    'Sam',
    'Paul',
    'Maddie',
    'Eli',
    'Cameron',
    'Dave',
    'David',
    'everyone else at Northcoders!',
  ];

  const listPeople = (person, index, people) => {
    return index === 0 ? (
      <span>{person}</span>
    ) : index === people.length - 1 ? (
      <span> and {person}</span>
    ) : (
      <span>, {person}</span>
    );
  };

  return (
    <div class="card-interior">
      <p id="card__to">To...</p>
      {students.map(listPeople)}
      <p>
        <span aria-label="christmas emojis" aria-hidden>
          🎄🧑‍🎄🎅🤶🎁❄️☃️
        </span>
      </p>
      <p>
        From all of us at Northcoders we wish you a
        <span class="emphasis"> VERY MERRY CHRISTMAS </span> and a
        <span class="emphasis"> HAPPY NEW YEAR </span>
      </p>
      <p>From ...</p>
      <p>{tutors.map(listPeople)}</p>
    </div>
  );
};

export default Card;
