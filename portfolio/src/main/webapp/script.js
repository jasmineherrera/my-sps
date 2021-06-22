// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
 * Adds a random soup to the page.
 */
function addRandomSoup() {
    const soups = ['tonkotsu ramen', 'french onion soup', 'tomato soup', 'chicken tortilla soup'];

    //Pick a random soup. 
    const soup = soups[Math.floor(Math.random() * soups.length)];

    //Add it to the page. 
    const soupContainer = document.getElementById('soup-container');
    soupContainer.innerText = soup;
}

function addRandom(lsts) {
    return lsts[Math.floor(Math.random() * lsts.length)];
}

/** Fetches the current date from the server and adds it to the page. */
async function showServerString() {
  const responseFromServer = await fetch('/hello');
  const jsonFromResponse = await responseFromServer.json();

  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = addRandom(jsonFromResponse);

  console.log(jsonFromResponse);
}
