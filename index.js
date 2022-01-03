// JS EXERCISES

/*EXERCISE 1
Take the value from the city input field and display it in an H1 on the center of the Hero content, on top of the image.
The letters should appear one by one while the user types them in the input.
We also want to display the picture of the corresponding searched city as the new background of the hero section.
In the same place you took the input value, use -at the same time- a for loop to perform a check
on the previously created array of city+img #### BEWARE: (no advanced methods allowed: only for loops and if statements).
Check if the searched city is found in any object in the array.
If it's found, use the img property as the new source for the background image of the hero section.
What you should see in the end is: the image of the city as background and the name of the city as the H1 title on top of it.*/

const cities = [
  {
    city: 'Milan',
    img: '/assets/homepage/e1.jpg',
    time: '1 hour',
  },
  {
    city: 'Venice',
    img: '/assets/homepage/e2.jpg',
    time: '1.5-hour',
  },
  {
    city: 'Florence',
    img: '/assets/homepage/e3.jpg',
    time: '2-hour',
  },
  {
    city: 'Bologna',
    img: '/assets/homepage/e4.jpg',
    time: '2.5-hour',
  },
  {
    city: 'Turin',
    img: '/assets/homepage/e5.jpg',
    time: '3-hour',
  },
  {
    city: 'Verona',
    img: '/assets/homepage/e6.jpg',
    time: '3.5-hour',
  },
  {
    city: 'Genova',
    img: '/assets/homepage/e7.jpg',
    time: '4-hour',
  },
  {
    city: 'La Spezia',
    img: '/assets/homepage/e8.jpg',
    time: '4.5-hour',
  },
]

const body = document.querySelector('body')
const heroSection = document.querySelector('.hero-section')
const input = document.querySelector('#input-field')
const ulElement = document.querySelector('ul')
const cta = document.querySelector('.cta-section')
const selectedImgs = document.querySelectorAll('.selected-img')
const dateElement = document.querySelector('.date')
const jsContent = document.querySelector('.js-content')
const randomOne = document.querySelector('.random-one')
const randomTwo = document.querySelector('.random-two')
// legacy method
// const changeBackground = () => {
//   input.addEventListener('change', function () {
//     const inputValue = document.querySelector('#input-field').value
//     const h1 = document.createElement('h1')
//     h1.innerText = ''
//     h1.classList.add('mx-auto', 'w-50', 'text-center', 'white')
//     h1.innerText = input.value
//     cta.prepend(h1)
//     for (let i = 0; i < cities.length; i++) {
//       if (inputValue === cities[i].city) {
//         heroSection.style.backgroundImage = 'url(`cities${i}.img`)'
//         heroSection.style.backgroundSize = 'cover'
//         heroSection.style.backgroundPosition = 'center center'
//         heroSection.style.backgroundRepeat = 'no-repeat'
//         heroSection.style.height = '100vh'
//       }
//     }
//     addDate()
//   })
// }
// changeBackground()

const changeBackground = () => {
  input.addEventListener('change', function () {
    const inputValue = document.querySelector('#input-field').value
    const date =
      (dateElement.innerHTML += `<h1 class="date mx-auto w-50 text-center white">${today} - ${time}</h1> `)
    const city =
      (jsContent.innerHTML += `<h1 class="mx-auto w-50 text-center white">${input.value}</h1>`)

    for (let i = 0; i < cities.length; i++) {
      if (inputValue === cities[i].city) {
        heroSection.style.backgroundImage = 'url(`cities${i}.img`)'
        heroSection.style.backgroundSize = 'cover'
        heroSection.style.backgroundPosition = 'center center'
        heroSection.style.backgroundRepeat = 'no-repeat'
        heroSection.style.height = '100vh'
      }
    }
  })
}
//changeBackground()

/*EXERCISE 2
Create an array of objects for each city you can think of. Each one should look like the following:
look above for the array of objects*/

// EXERCISE 3
// create new arrays with similar structure [{img: "http://...", text: "lorem ipsum"}, {...}, {...}]
// for every section in the homepage that has text+image and make it so
// that every section which contains img+text gets generated in a randomized order on every page refresh.

const shuffledCities = cities => {
  cities.sort(() => Math.random() - 0.5)
  return cities
}
shuffledCities(cities)

const randomizeOne = () => {
  let arr = [1, 2, 3, 4].sort(() => Math.random() - 0.5)
  for (let i = 0; i <= 3; i++) {
    randomOne.innerHTML += `
    <div class="col">
    <div class="d-flex align-items-center">
      <img
        src="/assets/homepage/e${arr[i]}.jpg"
        class="rounded-3 selected-img"
        id="img${arr[i]}"
        alt="city picture"
        width="100px"
      />
      <div class="ms-3">
        <h5 class="text-bold fs-5">${cities[i].city}</h5>
        <span class="text-muted fs-6">${cities[i].time}</span>
      </div>
    </div>
  </div>
    `
  }
}
randomizeOne()

const randomizeTwo = () => {
  let arr = [5, 6, 7, 8].sort(() => Math.random() - 0.5)
  for (let i = 0; i <= 3; i++) {
    randomTwo.innerHTML += `
    <div class="col">
    <div class="d-flex align-items-center">
      <img
        src="/assets/homepage/e${arr[i]}.jpg"
        class="rounded-3 selected-img"
        id="img${arr[i]}"
        alt="city picture"
        width="100px"
      />
      <div class="ms-3">
        <h5 class="text-bold fs-5">${cities[i + 4].city}</h5>
        <span class="text-muted fs-6">${cities[i + 4].time}</span>
      </div>
    </div>
  </div>
    `
  }
}
randomizeTwo()

/*EXERCISE 4
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

Create a Date object via JavaScript and format it to have a date looking like this: "09/07/2021, 12:51:15"
Apply it in a <span> above the <h1> to show to the user the date and time of the search, but instead of the comma, separate the two with an em dash: — like so: "09/07/2021 — 12:51:15"
(you can create the em dash with a combination on the numpad that is: ALT + 0151)*/

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyyy = today.getFullYear()
let time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
today = mm + '/' + dd + '/' + yyyy

// EXERCISE 5
// The search fields include: Location, Check-in date, Check-out date, Number of guests. You've displayed the first one in the H1 field on EX 1 already.
// Let's use the rest of the data in this way; when the user clicks the search button:
// - Create a list below the H1.
// - get the values from the date inputs and format them to display list items with the check-in & check-out dates as:
//      Check in: 25/07/2021
//      Check out: 30/07/2021
// - and the number of guests the user have selected in another list item.
//      Guests: 2
const searchIcon = document.querySelector('.search-icon')
const click = () => {
  const bookingList = document.createElement('ul')
  const checkIn = document.getElementById('check-in')
  const checkOut = document.getElementById('check-out')
  const guests = document.getElementById('guests')

  const checkInItem = document.createElement('li')
  const checkOutItem = document.createElement('li')
  const guestsItem = document.createElement('li')

  checkInItem.innerText = checkIn.value
  checkOutItem.innerText = checkOut.value
  guestsItem.innerText = guests.value

  bookingList.appendChild(checkInItem)
  bookingList.appendChild(checkOutItem)
  bookingList.appendChild(guestsItem)
  cta.prepend(bookingList)
  console.log('anything')
}

searchIcon.addEventListener('click', click())

// const booking = `  <ul class="list-group">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//     <li class="list-group-item">A fourth item</li>
//     <li class="list-group-item">And a fifth one</li>
//   </ul>`

// EXERCISE 6
// On the "I'm flexible" button that you have in the page, attach the functionality to open a modal that displays
// a random city and image from the first array that you've created.

// #### EXTRA
// Create a working clock on the top-right corner of the website to display the current time to the user (hint: Date obj & setInterval)

// Create a countdown that displays the remaining time of an offer in the page (starting from 5 minutes),
// to give a sense of urgency to the user to book an appartment before the offer ends.

// The countdown should appear in a modal after 1 minute from the page load.
// Display an alert when the time is up.

// Find a way to reuse the same modal with different information passed in, instead of creating multiple modals with different IDs.
// const images = () => {
//   arr = []
//   for (let i = 1; i <= 8; i++) {
//     arr.push(`/assets/homepage/e${[i]}.jpg`)
//   }
//   return arr
// }
// images()

// console.log(images())

// const changeImg = arr => {
//   console.log(selectedImgs)
//   for (i = 0; i < arr.length; i++) {
//     const imgItem = document.querySelector(`#img${i}`)
//     //const newImg

//     const imgPath = arr[i]
//     console.log(imgItem)
//   }
// }
// changeImg(images())
