import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 5111;

app.all("/", (req, res) => {
  //   console.log("req", req);
  //   console.log("res", res);
  res.send("I'm up!");
});

app.use(bodyParser.json());

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);

  res.status(201).json({
    message: "New Todo added!",
  });
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;

  const dataIdx = todos.findIndex((td) => td.id === req.params.id);

  if (dataIdx !== -1) {
    todos[dataIdx] = {
      id: req.params.id,
      ...newTodoData,
    };
  }

  res.json({
    message: "Todo updated succesfully!",
  });
});

// DELETE

app.delete("/todos/:id", (req, res) => {
  const dataIdx = todos.findIndex((td) => td.id === req.params.id);

  if (dataIdx !== -1) {
    todos.splice(dataIdx, 1);
  }

  res.send("Todo deleted succesfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
