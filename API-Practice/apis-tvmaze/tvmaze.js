// Step 1: Understand The API
// Explore the TVMaze API. You will need to make a get request to two endpoints:

// http://api.tvmaze.com/search/shows?q=<search query>

// and

// http://api.tvmaze.com/shows/<show id>/episodes

// Use a tool like curl or insomnia to make a HTTP request to both endpoints and get comfortable with the JSON that is returned. You will need to parse the JSON in order to get the data for the application.

// ** You can use online Json viewer.

// Step 2: Understand Current Code
// We’ve provided two files for you:

// tvmaze.html
// All the HTML for the application. You should be able to complete all of the pages for this exercise without having to change anything in this file.
// tvmaze.js
// Starter JavaScript for the application.
// Right now, the application has this feature:

// You can type part of a TV show title into the search form and, on submission, it will return information about a hard coded show. It will show a series of cards with information on the show.
// Note how we’ve structured this code:

// by having a separate function for searchShows, you can test the “search API for shows” without having to do deal with anything related to the DOM in tests. This also makes this function re-usable if we built a different version of this app with a different front-end (like in React); we could re-use searchShows.

// Play with this function in the console and get a sense for how it works.

// populateShows deals just with inserting the passed-in shows into the DOM. This makes this testable without having to have it tied to the code that gets data from the API.

// our handleSearch event handler ties the two together: it gets the search term, gets the shows using searchShows, and fills in the DOM with populateShows.

// Notice the data attribute!

// A particularly important thing to note in reading our code is how we used a “data attribute”.

// Data attributes are very useful for when you want to associate some data (in this case, the show ID) in the DOM, so you can recall it later.

// Note in populateShows how we add data-show-id onto the outermost .Show div. Later, when we want to retrieve which show ID was clicked on, we’ll be able to get that show ID.

// You may find it helpful to skim the MDN article linked above.

// Step 3: Make AJAX request for Search
// Remove the hard coded array from the searchShows function and make replace the code with an AJAX request to the search shows api from TVMaze. Make sure that the array of information you return from the function is formatted as described in the comments for the searchShows function.

// Step 4: Add Show Images
// The TVMaze API includes images for many shows, but we don’t currently use these.

// Explore the docs for the TVMaze API and find how we’d extract an image in the searchShows function. Add this image to the result object returned by this function.

// Update populateShows to show the image. You can do this with the following snippet of HTML, inside the .card div:

// <img class="card-img-top" src="/path/to/image">
// Be careful how you implement this. Not all shows have images, and if you’re not careful, this will break for shows without images. Make sure that you write this in a way where shows without missing images won’t break your site.

// For shows without an image, you can have it show this generic image instead: https://tinyurl.com/tv-missing

// Step 5: Add Episode Lists
// We want to add a feature where clicking an “Episodes” button at the bottom of a show card shows the episodes for this show at the bottom of the page.

// First, implement the getEpisodes function, which is given a show ID. It should return an array of objects with basic information on the episodes for that show, like:

// [
//   {id: 1234, name: "Pilot", season: "1", number: "1"},
//   {id: 3434, name: "In the Beginning", season: "1", number: "2"},
//   /* and so on... */
// ]
// To do this, you’ll need to read how to get episode data from TVMaze API.

// Next, write a function, populateEpisodes, which is provided an array of episodes info, and populates that into the #episodes-list part of the DOM.

// The episodes list is a simple <ul>, and the individual episodes can just be basic <li> elements, like <li>Pilot (season 1, number 1)</li>.

// (Also, now that we have episodes, you’ll need to reveal the #episodes-area, which is initially hidden!)

// Add an “Episodes” button at the bottom of each show card

// Add a click handler that listens for clicks on those buttons.

// You’ll need to make sure this eventlistener works even though the shows won’t be present in the initial DOM
// You’ll need to get the show ID of the show for the button you clicked. To do this, you can read about getting data attributes with jQuery and also how to use jQuery to find something a few levels up in the DOM
// Then, this should use your getEpisodes and populateEpisodes functions.
// Make sure you put thought into good variable names and code style for these, and write comments!

//
//
//
//
//
//
//
//
//
//
//

/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
const MISSING_IMAGE_URL = 'http://tinyurl.com/missing-tv';

async function searchShows(query) {
  // --QUESTION: Does it better if I use params instead of template literals.
  // let response = await axios.get(
  //   `http://api.tvmaze.com/search/shows?q=${query}`
  // );
  let response = await axios.get(`https://api.tvmaze.com/search/shows`, {
    params: { q: `${query}` },
  });

  // QUESTION: How to find id, name, summary???
  // QUESTION: IF you use this to get the query string of the API, it keeps returning promises even though I'm using await.
  // async function getData() {
  //   const res = await axios.get('https://api.tvmaze.com/search/shows?q=:query');
  // }

  let shows = response.data.map(function (result) {
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : MISSING_IMAGE_URL,
    };
  });
  return shows;
}
/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $('#shows-list');
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <img class="card-image" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="episode-button">List Episodes</button>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($item);
  }
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$('#search-form').on('submit', async function handleSearch(evt) {
  evt.preventDefault();

  let query = $('#search-query').val();
  if (!query) return;

  $('#episodes-area').hide();

  let shows = await searchShows(query);
  // QUESTION: Whenever we call a function with async, do we have to use await? Not just in the async funciton itself?

  populateShows(shows);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
  // TODO: return array-of-episode-info, as described in docstring above
  //URL: /shows/:id/episodes
  let res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
  //QUESTION: how come this API URL uses https and the one on top uses http

  //QUESTION: why does this only work with arrow function?
  // let episodes = res.data.map(function (episode) ({
  //   // QUESTION: let show = result.show; Why was this necessary at the top in the function searchShows.
  //   // QUESTION: Also why does it need another ()?
  //   id: episode.id,
  //   name: episode.name,
  //   season: episode.season,
  //   number: episode.number,
  // }));

  let episodes = res.data.map((episode) => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number,
  }));

  return episodes;
}

function populateEpisodes(episodes) {
  // using Jquery to access the dom
  const $episodeList = $('#episodes-list');
  // making sure the prev. searched episode list is empty.
  $episodeList.empty();

  //uses a for loop to append each episode to the list with the name, season, and number
  for (let episode of episodes) {
    let $listOfEpisodes = $(
      `<li>${episode.name}(season ${episode.season}, episode ${episode.number})</li>`
    );
    $episodeList.append($listOfEpisodes);
  }
  // reveals the hidden area.
  $('#episodes-area').show();
}

// click handler.

// $('#episode-button').on('click', async function (evt) {
//   evt.preventDefault();
//   let showId = $(evt.target).closest('.Show').data('show-id');
//   let episodes = await getEpisodes(showId);
//   populateEpisodes(episodes);
// });

// QUESTION: How come the 1st click handler work and the 2nd one doesnt?
//1) from AJAX exercise.
// $('#remove-button').on('click', function () {
//   $appendGif.empty();
// });

$('#shows-list').on(
  'click',
  '.episode-button',
  async function handleEpisodeClick(evt) {
    evt.preventDefault();
    let showId = $(evt.target).closest('.Show').data('show-id');
    let episodes = await getEpisodes(showId);
    populateEpisodes(episodes);
  }
);

//2)
$('#shows-list').on(
  'click',
  '.episode-button',
  async function handleEpisodeClick(evt) {
    evt.preventDefault();
    let showId = $(evt.target).closest('.Show').data('show-id');
    let episodes = await getEpisodes(showId);
    populateEpisodes(episodes);
  }
);

// solution
// $('#shows-list').on(
//   'click',
//   '.episode-button',
//   async function handleEpisodeClick(evt) {
//     let showId = $(evt.target).closest('.Show').data('show-id');
//     let episodes = await getEpisodes(showId);
//     populateEpisodes(episodes);
//   }
// );
