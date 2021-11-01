const get = document.getElementById('get');
const post = document.getElementById('post');
const sim = document.getElementById('sim');
const del = document.getElementById('del');

const resp = document.getElementById('resp');

get.addEventListener('click', getTodos);
post.addEventListener('click', addTodo);
del.addEventListener('click', delTodo);
sim.addEventListener('click', simReq);

function getTodos() {
   axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log('We ran into an error'));
}

function addTodo() {
   axios
      .post('https://jsonplaceholder.typicode.com/posts', {
         Title: 'New Post',
         data: 'Axios ',
      })
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
}

function delTodo() {
   axios
      .delete('https://jsonplaceholder.typicode.com/posts/101')
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
}

function simReq() {
   axios
      .all([
         axios.get('https://jsonplaceholder.typicode.com/users'),
         axios.get('https://jsonplaceholder.typicode.com/photos'),
      ])
      .then((resp) => {
         console.log(resp[0].data);
         console.log(resp[1].data);
      });
}

axios.interceptors.request.use((config) => {
   console.log(
      `you made a ${config.method.toUpperCase()} request to ${
         config.url
      } at ${Date.now()}`
   );
   return config;
});
