// const myFavouriteAuthors = [
//   'Neal Stephenson',
//   'Arthur Clarke',
//   'Isaac Asimov', 
//   'Robert Heinlein'
// ];

// const myFavouriteAuthors = {
//   allAuthors: {
//     fiction: [
//       'Arthur Clarke',
//       'J.K.Rowling',
//       'Dr. Seuss'
//     ],
//     scienceFiction: [
//       'Neal Stenpheson',
//       'Arthur Clarke',
//       'Isaac Asimov',
//       'Robert Heinlein'
//     ],
//     fantasy: [
//       'J. R. R. Tolkien',
//       'J. K. Rowling',
//       'Terry Pratchett'
//     ]
//   }
// }

// for (let author of myFavouriteAuthors) {
//   console.log(author)
// }

// const iterable = {
//   [Symbol.iterator]() {
//     let step = 0;
//     const iterator = {
//       next() {
//         step++;
//         if (step === 1) {
//           return { value: 'This', done: false};
//         } else if (step === 2) {
//           return { value: 'is', done: false};
//         } else if (step ===3) {
//           return { value: 'iterable.', done: false}
//         }
//         return { value: undefined, done: true}
//       }
//     }
//     return iterator;
//   }
// }

// var iterator = iterable[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// const array = ['a', 'b', 'c', 'd', 'e'];

// const iterator = array[Symbol.iterator]();

// const first = iterator.next().value;
// iterator.next().value;

// const thrid = iterator.next().value;

// console.log(thrid)

const allAuthors= {
  fiction: [
    'Agatha Christie', 
    'J. K. Rowling',
    'Dr. Seuss'
  ],
  scienceFiction: [
    'Neal Stephenson',
    'Arthur Clarke',
    'Isaac Asimov', 
    'Robert Heinlein'
  ],
  fantasy: [
    'J. R. R. Tolkien',
    'J. K. Rowling',
    'Terry Pratchett'
  ],
}

const genres = Object.values(allAuthors);

console.log(genres)