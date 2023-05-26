import { postComment, getComment } from './api.js';

export const popupWins = (root) => {
  const btn = document.querySelectorAll('.movie-button.mr-2');

  for (let i = 0; i < btn.length; i += 1) {
    const modal = document.createElement('div');
    modal.className = 'popup-container';

    modal.innerHTML = `
    modal.innerHTML = `
    <div class="modal-top">
      <span class="close-icon bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">×</span>
      <h1 class="text-xl font-bold">Title</h1>
    </div>
    <h2 class="text-lg font-bold mt-4">Comments</h2>
    <div class="comment-container"></div>
    <form method="POST" id="comment-form" class="mt-4">
      <label for="name" aria-label="name" class="block font-bold">Name*</label>
      <input aria-label="name" id="name" type="text" placeholder="Your name" maxlength="30" name="name" tabindex="16" required class="w-full p-2 border border-gray-300 rounded mb-2">
      <label for="comments" aria-label="comments" class="block font-bold">Comments*</label>
      <textarea aria-label="comments" id="comments" placeholder="Enter comments here" maxlength="500" name="message" required tabindex="18" class="w-full p-2 border border-gray-300 rounded mb-2"></textarea>
      <button aria-label="submit" type="submit" value="Submit" tabindex="19" class="bg-indigo-500 text-white px-4 py-2 rounded font-bold">Comment</button>
    </form>
  `;

  root.appendChild(modal);
  const span = modal.querySelector('.close-icon');
    root.appendChild(modal);
    const span = document.querySelector('.close-icon');

  modal.style.display = 'flex';
    modal.style.display = 'flex';

  span.onclick = () => {
    modal.style.display = 'none';
    modal.innerHTML = '';
  };
    span.onclick = () => {
      modal.style.display = 'none';
      modal.innerHTML = '';
    };
  }
};

const createComment = () => {
  const form = document.getElementById('comment-form');
  const formName = document.getElementById('name');
  const formComment = document.getElementById('comments');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newName = formName.value;
    const newComment = formComment.value;
    const commentObj = {
    const newComment = Number(formName.value);
    const commentObj = {
      username: newName,
      comment: newComment,
    };
    form.reset();
    postComment(commentObj);
    formName.value = '';
    formComment.value = '';
    postComment(commentObj);
  });
};

const getComments = () => {
  const commentList = document.querySelector('.comment-container');
  const refreshComments = async () => {
    const comments = await getComment();
    commentList.innerHTML = '';
    comments.sort((a, b) => a.index - b.index);
    comments.forEach((comment) => {
      const newComment = document.createElement('li');
      newComment.innerHTML = `${comment.user}: ${comment.score}`;
      commentList.appendChild(newComment);
  const form = document.getElementById('comment-form');
  const commentList = document.getElementsByClassName('comment-container');
  form.addEventListener('click', async (event) => {
    event.preventDefault();
    const refreshNewComment = await getComment();
    commentList.innerHTML = ''; // clear the list before repopulating
    refreshNewComment.sort((a, b) => a.index - b.index); // sort scores in descending order
    refreshNewComment.forEach((rnc) => {
      const newCommentx = document.createElement('li');
      form.innerHTML = `${rnc.user}: ${rnc.score}`;
      commentList.appendChild(newCommentx);
    });
  };

  refreshComments();
  document.getElementById('comment-form').addEventListener('click', refreshComments);
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root'); // Replace 'root' with the actual ID of your root element
  popupWins(rootElement);
  createComment();
  getComments();
});
