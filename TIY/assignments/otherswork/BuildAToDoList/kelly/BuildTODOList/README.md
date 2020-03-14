# BUILD A TO-DO LIST

Using Express and an in-memory data structure, build a real to-do list application. You should be able to add new todos and mark todos as complete.

In order to keep the list of todos, you will need to create some data structure and update it from Express, like this example below:

const todos = [
  "Wash the car"
];

app.get("/", function (req, res) {
  res.render('index', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

Because your data is being stored in memory, it will disappear every time your app is restarted. It is easiest to seed some todos and completed todos at the start of your app so that you can see them after a restart.

