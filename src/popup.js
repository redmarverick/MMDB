const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const POST_ID = 's7btJtYhBZ65macF6zS3';
const URL = `${BASE_URL}${POST_ID}/scores/`;

// POST action: get scores from users
const postComment = async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const results = await response.json();
  return results.result;
};

// GET action: get scores from API
const getComment = async () => {
  const response = await fetch(URL);
  const results = await response.json();
  return results.result;
};

export const popupWins = (root) => {
  const btn = document.querySelectorAll('.movie-button.mr-2');
  const modal = document.createElement('div');
  modal.className = 'popup-container';

  for (let i = 0; i < btn.length; i += 1) {

      modal.innerHTML = `
    <div class="modal-top">

        <span class="close-icon bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"></span >
        <h1>title</h1>
    </div>

            <h2>Comments</h2>
            <div class="comment-container">
            </div>
            <form method="POST" id="comment-form">
            <label for="name" aria-label="name">name*</label>
            <input aria-label="name" id="name" type="text" placeholder="Your name" maxlength="30" name="name" tabindex="16" required>
            <label for="comments" aria-label="comments">comments*</label>
            <textarea aria-label="comments" id="comments" placeholder="Enter comments here" maxlength="500" name="message" required tabindex="18"></textarea>
            <button aria-label="submit" type="submit" value="Submit" tabindex="19">Get in touch</button>
        </form>
    `;

      const span = document.getElementsByClassName('close-icon');

      modal.style.display = 'flex';

      span.onclick = () => {
        debugger
        console.log("enter click span")
        modal.style.display = 'none';
        modal.innerHTML = '';
      };
      root.appendChild(modal);
  }
}