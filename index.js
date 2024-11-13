import express from "express";

const PORT = 3333;
const app = express();
app.use(express.json());

const todos = [
  {
    id: 1,
    title: "Wake up",
    checked: false,
  },
  {
    id: 2,
    title: "Wake up 2",
    checked: true,
  },
];
app.get("/todos", (req, res) => {
  res.send(todos);
});
app.post("/todos", (req, res) => {
  const title = req.body.title;
  if (!title) return res.status(400).send({ message: "title is not found" });
  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    title: title,
    checked: false,
  };
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send({ message: "Id not found!" });
});
