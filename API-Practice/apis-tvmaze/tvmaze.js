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
async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.

  return [
    {
      id: 1767,
      name: 'The Bletchley Circle',
      summary:
        '<p><b>The Bletchley Circle</b> follows the journey of four ordinary women with extraordinary skills that helped to end World War II.</p><p>Set in 1952, Susan, Millie, Lucy and Jean have returned to their normal lives, modestly setting aside the part they played in producing crucial intelligence, which helped the Allies to victory and shortened the war. When Susan discovers a hidden code behind an unsolved murder she is met by skepticism from the police. She quickly realises she can only begin to crack the murders and bring the culprit to justice with her former friends.</p>',
      image:
        'http://static.tvmaze.com/uploads/images/medium_portrait/147/369403.jpg',
    },
  ];
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
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
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
}