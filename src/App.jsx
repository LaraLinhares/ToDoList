import { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {

  // SetTodos = insere dados, todos= consulta dados
  // UseState permite a renderização
  const [todos, setTodos] = useState([

    {
      //Identificação
      id:1,
      // Texto presente no to-do
      text: "Criar funcionalidade X no sistema",
      //tipo de categoria inserida
      category: "Trabalho",
      // Se está finalizado
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false, 
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },

  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  //Criar uma nova task
  const addTodo = (text, category) => {

    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  //remover uma task
  const removeTodo = (id) => {
    const newTodos = [...todos]
    /* filtrar os ToDo que nao possuem o id desejado, para que sejam mantidos */
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  };

  //Elemento pai - raiz da componente
  return <div className="app">
  <h1>Lista de Tarefas</h1>
  <Search search = {search} setSearch={setSearch}/>
  <Filter filter={filter} setFilter = {setFilter} setSort = {setSort}/>
  <div className="todo-list">
    {/* .map acessa cada um dos itens de const todos */}
    {todos
      .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
      .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
    )
    /* Comparação entre dois itens */
    .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
    .map((todo) => (
      // Passa a prop para ter acesso aos dados
      // Declaração de chave primária
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;
}

export default App;
