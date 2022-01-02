// #### JS EXERCISES

// EXERCISE 1
// Take the value from the city input field and display it in an H1 on the center of the Hero content, on top of the image.
// The letters should appear one by one while the user types them in the input.
// We also want to display the picture of the corresponding searched city as the new background of the hero section.
// In the same place you took the input value, use -at the same time- a for loop to perform a check
// on the previously created array of city+img #### BEWARE: (no advanced methods allowed: only for loops and if statements).
// Check if the searched city is found in any object in the array.
// If it's found, use the img property as the new source for the background image of the hero section.
// What you should see in the end is: the image of the city as background and the name of the city as the H1 title on top of it.

const cities = [
  {
    city: 'Milan',
    img: `https://www.yesmilano.it/sites/default/files/2020-06/Panorama%20Milano%20Foto%20Getty%201280x560px.png`,
  },
  {
    city: 'Venice',
    img: '/assets/homepage/e2.jpg',
  },
  {
    city: 'Florence',
    img: '/assets/homepage/e3.jpg',
  },
  {
    city: 'Bologna',
    img: '/assets/homepage/e4.jpg',
  },
  {
    city: 'Turin',
    img: '/assets/homepage/e5.jpg',
  },
  {
    city: 'Verona',
    img: '/assets/homepage/e6.jpg',
  },
  {
    city: 'Genova',
    img: '/assets/homepage/e7.jpg',
  },
  {
    city: 'La Spezia',
    img: '/assets/homepage/e8.jpg',
  },
]

const input = document.querySelector('#input-field')
const cta = document.querySelector('.cta')
const heroImg = document.querySelector('.hero-img')
const selectedImgs = document.querySelectorAll('.selected-img')
const dateElement = document.querySelector('.date')
const heroImgId = document.querySelector('#hero-img')

const changeBackground = () => {
  input.addEventListener('change', function () {
    const inputValue = document.querySelector('#input-field').value

    for (let i = 0; i < cities.length; i++) {
      if (inputValue === cities[i].city) {
        heroImg.innerHTML = `<img src='${cities[i].img}' style="z-index:1;background-size: cover;background-position: center center;background-repeat: no-repeat;height: 100vh;" />
        
        `
      }
    }
    addDate()
  })
}
changeBackground()
//style="background-size: cover;background-position: center center;background-repeat: no-repeat;height: 100vh;"
//the code works but the image needs to not repeat..

// const changeBackground = () => {
//   const h1 = document.createElement('h1')

//   input.addEventListener('change', function () {
//     const inputValue = document.querySelector('#input-field').value
//     h1.classList.add('mx-auto', 'w-50', 'text-center', 'white')
//     h1.innerText = input.value
//     cta.prepend(h1)

//     for (let i = 0; i < cities.length; i++) {
//       if (inputValue === cities[i].city) {
//         heroImg.style.backgroundImage = `url(${cities[i].img})`
//       }
//     }
//     addDate()
//   })
// }
// changeBackground()

// EXERCISE 2
// Create an array of objects for each city you can think of. Each one should look like the following:

const citiesLogos = [
  {
    city: 'Milan',
    img: '/assets/homepage/e1.jpg',
  },
  {
    city: 'Venice',
    img: '/assets/homepage/e2.jpg',
  },
  {
    city: 'Florence',
    img: '/assets/homepage/e3.jpg',
  },
  {
    city: 'Bologna',
    img: '/assets/homepage/e4.jpg',
  },
  {
    city: 'Turin',
    img: '/assets/homepage/e5.jpg',
  },
  {
    city: 'Verona',
    img: '/assets/homepage/e6.jpg',
  },
  {
    city: 'Genova',
    img: '/assets/homepage/e7.jpg',
  },
  {
    city: 'La Spezia',
    img: '/assets/homepage/e8.jpg',
  },
]

// EXERCISE 4
// create new arrays with similar structure [{img: "http://...", text: "lorem ipsum"}, {...}, {...}]
// for every section in the homepage that has text+image and make it so
// that every section which contains img+text gets generated in a randomized order on every page refresh.

const shuffledCities = citiesLogos => {
  citiesLogos.sort(() => Math.random() - 0.5)
  return citiesLogos
}
shuffledCities(citiesLogos)
//console.log(shuffledCities(citiesLogos))

//  <div class="d-flex align-items-center">
//     <img
//       src="/assets/homepage/e1.jpg"
//       class="rounded-3"
//       alt="city picture"
//       width="100px"
//     />
//     <div class="ms-3">
//       <h5 class="text-bold fs-5">Milan</h5>
//       <span class="text-muted fs-6">1-hour drive</span>
//     </div>
//   </div >

// const images = () => {
//   arr = []
//   for (let i = 1; i <= 8; i++) {
//     arr.push(`/assets/homepage / e${[i]}.jpg`)
//   }
//   return arr
// }
// images()

// const changeImg = arr => {
//   console.log(selectedImgs)
//   for (i = 0; i < arr.length; i++) {
//     const imgItem = document.querySelector(`#img[${i}]`)
//     console.log('hey')
//     console.log(imgItem)

//     const imgPath = arr[i]
//     console.log(imgPath)
//     console.log((selectedImgs.src = imgPath))
//   }
// }
// changeImg(images())

// EXERCISE 5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//
// Create a Date object via JavaScript and format it to have a date looking like this: "09/07/2021, 12:51:15"
// Apply it in a <span> above the <h1> to show to the user the date and time of the search, but instead of the comma, separate the two with an em dash: — like so: "09/07/2021 — 12:51:15"
// (you can create the em dash with a combination on the numpad that is: ALT + 0151)

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyyy = today.getFullYear()
let time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
today = mm + '/' + dd + '/' + yyyy

const addDate = () => {
  dateElement.classList.add('mx-auto', 'w-50', 'text-center', 'white')
  dateElement.innerHTML += `${today} - ${time}`
  cta.prepend(dateElement)
}

//console.log(today, time)

// EXERCISE 6
// The search fields include: Location, Check-in date, Check-out date, Number of guests. You've displayed the first one in the H1 field on EX 1 already.
// Let's use the rest of the data in this way; when the user clicks the search button:
// - Create a list below the H1.
// - get the values from the date inputs and format them to display list items with the check-in & check-out dates as:
//      Check in: 25/07/2021
//      Check out: 30/07/2021
// - and the number of guests the user have selected in another list item.
//      Guests: 2

// EXERCISE 7
// On the "I'm flexible" button that you have in the page, attach the functionality to open a modal that displays
// a random city and image from the first array that you've created.

// #### EXTRA
// Create a working clock on the top-right corner of the website to display the current time to the user (hint: Date obj & setInterval)

// Create a countdown that displays the remaining time of an offer in the page (starting from 5 minutes),
// to give a sense of urgency to the user to book an appartment before the offer ends.

// The countdown should appear in a modal after 1 minute from the page load.
// Display an alert when the time is up.

// Find a way to reuse the same modal with different information passed in, instead of creating multiple modals with different IDs.
