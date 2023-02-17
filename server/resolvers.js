import Todo from "./models/Todo.js";
const resolvers = {
  Query: {
    hello: () => "world",
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },
  Mutation: {
    addTodo: async (root, args) => {
      const newTodo = await Todo({
        title: args.title,
        details: args.details,
        date: args.date,
      });
      await newTodo.save();
      return newTodo;
    },
    deleteTodo: async (root, args) => {
      const todo = await Todo.findByIdAndDelete(args.id);
      return "Todo deleted successfully";
    },
    updateTodo: async (root, args) => {
      const todo = await Todo.findByIdAndUpdate(
        args.id,
        {
          title: args.title,
          details: args.details,
          date: args.date,
        },
        { new: true }
      );
      return todo;
    },
  },
};

export default resolvers;
