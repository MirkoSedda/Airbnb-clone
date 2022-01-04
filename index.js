/* JS EXERCISES

EXERCISE 1
Take the value from the city input field and display it in an H1 on the center of the Hero content, on top of the image.
The letter should appear one by one while the user types them in the input.

EXERCISE 2
Create an array of objects for each city you can think of. Each one should look like the following:
     {
        city: "Barcellona",
        img: "https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg"
     }

EXERCISE 3
We want to display the picture of the corresponding searched city as the new background of the hero section.

In the same place you took the input value, use -at the same time- a for loop to perform a check
on the previously created array of city+img #### BEWARE: (no advanced methods allowed: only for loops and if statements).

Check if the searched city is found in any object in the array.
If it's found, use the img property as the new source for the background image of the hero section.

What you should see in the end is: the image of the city as background and the name of the city as the H1 title on top of it.

EXERCISE 4
create new arrays with similar structure [{img: "http://...", text: "lorem ipsum"}, {...}, {...}]
for every section in the homepage that has text+image and make it so
that every section which contains img+text gets generated in a randomized order on every page refresh.

EXERCISE 5
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

Create a Date object via JavaScript and format it to have a date looking like this: "09/07/2021, 12:51:15"
Apply it in a <span> above the <h1> to show to the user the date and time of the search, but instead of the comma, separate the two with an em dash: — like so: "09/07/2021 — 12:51:15"
(you can create the em dash with a combination on the numpad that is: ALT + 0151)

EXERCISE 6
The search fields include: Location, Check-in date, Check-out date, Number of guests. You've displayed the first one in the H1 field on EX 1 already.
Let's use the rest of the data in this way; when the user clicks the search button:
- Create a list below the H1.
- get the values from the date inputs and format them to display list items with the check-in & check-out dates as:
     Check in: 25/07/2021
     Check out: 30/07/2021
- and the number of guests the user have selected in another list item.
     Guests: 2

EXERCISE 7
On the "I'm flexible" button that you have in the page, attach the functionality to open a modal that displays
a random city and image from the first array that you've created.

#### EXTRA
Create a working clock on the top-right corner of the website to display the current time to the user (hint: Date obj & setInterval)

Create a countdown that displays the remaining time of an offer in the page (starting from 5 minutes),
to give a sense of urgency to the user to book an appartment before the offer ends.

The countdown should appear in a modal after 1 minute from the page load.
Display an alert when the time is up.

Find a way to reuse the same modal with different information passed in, instead of creating multiple modals with different IDs.*/

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
].sort(() => Math.random() - 0.5)

const liveAnywhere = [
  {
    img: '/assets/homepage/l1.jpg',
    text: 'Outdoor getaways',
  },
  {
    img: '/assets/homepage/l2.jpg',
    text: 'Unique stays',
  },
  {
    img: '/assets/homepage/l3.jpg',
    text: 'Entire homes',
  },
  {
    img: '/assets/homepage/l4.jpg',
    text: 'Pets allowed',
  },
].sort(() => Math.random() - 0.5)

const experiences = [
  {
    img: '/assets/homepage/d1.jpg',
    text1: 'Outdoor collection',
    text2: 'Experiences that immerse you in nature.',
  },
  {
    img: '/assets/homepage/d2.jpg',
    text1: 'Online experiences',
    text2: 'Live, interactive activities led by hosts',
  },
  {
    img: '/assets/homepage/d3.jpg',
    text1: 'Experiences',
    text2: 'Local things to do, wherever you are.',
  },
].sort(() => Math.random() - 0.5)

const body = document.querySelector('body')
const heroSection = document.querySelector('.hero-section')
const input = document.querySelector('#input-field')
const searchIcon = document.querySelector('.search-icon')
const cta = document.querySelector('.cta-section')
const selectedImgs = document.querySelectorAll('.selected-img')
const dateElement = document.querySelector('.date')
const jsContent = document.querySelector('.js-content')
const randomOne = document.querySelector('.random-1')
const randomTwo = document.querySelector('.random-2')
const randomThree = document.querySelector('.random-3')
const randomFour = document.querySelector('.random-4')

const changeBackground = () => {
  searchIcon.addEventListener('click', function () {
    const inputValue = document.querySelector('#input-field').value
    const checkIn = document.getElementById('check-in')
    const checkOut = document.getElementById('check-out')
    const guests = document.getElementById('guests')

    for (let i = 0; i < cities.length; i++) {
      const booking = document.querySelector('.booking')
      if (inputValue === cities[i].city) {
        booking.innerHTML += `
        <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${
              cities[i + 1].img
            }" class="img-fluid rounded-start" alt="${city - img}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${
                cities[i + 1].city
              } ~ ${today} - ${time}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
              <a href="#" class="btn btn-primary">Book now</a>
            </div>
          </div>
        </div>
      </div>
    `
      }
    }
  })
}
changeBackground()

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

const randomizeThree = () => {
  for (let i = 0; i <= 3; i++) {
    randomThree.innerHTML += `
          <div class="col-md-6 col-lg-3 px-2">
            <div class="d-flex align-items-center">
              <img
                src="${liveAnywhere[i].img}"
                class="rounded-3"
                alt="city picture"
                width="100%"
              />
            </div>
            <h5 class="text-bold fs-5 mt-2">${liveAnywhere[i].text}</h5>
          </div>
    `
  }
}
randomizeThree()

const randomizeFour = () => {
  for (let i = 0; i <= 2; i++) {
    randomFour.innerHTML += `
         <div class="col-md-6 col-lg-4">
            <div class="d-flex align-items-center">
              <img
                src="${experiences[i].img}"
                class="rounded-3"
                alt="girl picture"
                width="100%"
              />
            </div>
            <h5 class="text-bold fs-5 mt-2">${experiences[i].text1}</h5>
            <h3 class="h6 text-muted">
             ${experiences[i].text2}
            </h3>
          </div>  
    `
  }
}
randomizeFour()

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyyy = today.getFullYear()
let time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
today = mm + '/' + dd + '/' + yyyy

// const click = () => {
//   checkInItem.innerText = checkIn.value
//   checkOutItem.innerText = checkOut.value
//   guestsItem.innerText = guests.value
// }
