const Posts = [
  { id: 1, value: "test-value-1" },
  { id: 2, value: "test-value-2" },
  { id: 3, value: "test-value-3" },
];

async function AddPost(receivePost) {
  const promises = new Promise((resolve, reject) => {
    Posts.push(receivePost);
    resolve(Posts);
  });
  return promises;
}

async function OrderPost(posts) {
  try {
    await AddPost(post);
    console.log(posts.map((post) => post.value));
  } catch (e) {
    console.log(posts.map((element) => element.value));
  }
}
OrderPost(Posts);
let post = { id: 4, value: "test-value-4" };
OrderPost(Posts);
