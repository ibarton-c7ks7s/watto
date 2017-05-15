# Watto

## To run (requires: nodejs v6 or better):

1. Git clone this repo
2. `cd` into the app directory where you extracted the repo
3. `npm install` to grab all dependencies
4. `npm start` to run the app
5. Visit `http://localhost:3000/` in your browser.

## Some assumptions I made:

1. There were no images or models linked from the JSON response. I had to find images off the internet to get this to work. A better API would have links to product images.
2. There were no IDs in the JSON response, but the list of spaceships comes back in the same order every time. Because of that I used the spaceship item's position in the array/index as a pseudo-key. This means that the images I found etc. have to be specified in order that they appear in the JSON feed. A better API would have unique IDs somehow (either autoincrementing from the DB or some type of GUID/UUID).
3. I cache the JSON response to keep from creating too many network requests on every page load. For frequently changing data this may not be a good strategy as content may expire.