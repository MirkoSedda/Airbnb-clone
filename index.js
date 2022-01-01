// #### JS EXERCISES

// EXERCISE 1
// Take the value from the city input field and display it in an H1 on the center of the Hero content, on top of the image.
// The letters should appear one by one while the user types them in the input.

const input = document.querySelector('#input-field')
const cta = document.querySelector('.cta')
const h1 = document.createElement('h1')

//document.createElement('div').prepend(span)

input.addEventListener('change', function () {
  h1.classList.add('mx-auto', 'w-50', 'text-center', 'white')
  h1.innerText = input.value
  cta.prepend(h1)
})

// EXERCISE 2
// Create an array of objects for each city you can think of. Each one should look like the following:

const cities = [
  {
    city: 'Barcelona',
    img: 'https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg',
  },
  {
    city: 'Rome',
    img: 'https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg',
  },
  {
    city: 'Amsterdam',
    img: 'https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg',
  },
  {
    city: 'Cartagena',
    img: 'https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg',
  },
  {
    city: 'Sinaloa',
    img: 'https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg',
  },
  {
    city: 'Bangkok',
    img: 'https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg',
  },
]

// EXERCISE 3
// We want to display the picture of the corresponding searched city as the new background of the hero section.

// In the same place you took the input value, use -at the same time- a for loop to perform a check
// on the previously created array of city+img #### BEWARE: (no advanced methods allowed: only for loops and if statements).

// Check if the searched city is found in any object in the array.
// If it's found, use the img property as the new source for the background image of the hero section.

// What you should see in the end is: the image of the city as background and the name of the city as the H1 title on top of it.

// EXERCISE 4
// create new arrays with similar structure [{img: "http://...", text: "lorem ipsum"}, {...}, {...}]
// for every section in the homepage that has text+image and make it so
// that every section which contains img+text gets generated in a randomized order on every page refresh.

// EXERCISE 5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//
// Create a Date object via JavaScript and format it to have a date looking like this: "09/07/2021, 12:51:15"
// Apply it in a <span> above the <h1> to show to the user the date and time of the search, but instead of the comma, separate the two with an em dash: — like so: "09/07/2021 — 12:51:15"
// (you can create the em dash with a combination on the numpad that is: ALT + 0151)

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
