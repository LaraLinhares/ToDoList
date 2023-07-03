import { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

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

  //Elemento pai - raiz da componente
  return <div className="app">
  <h1>Lista de Tarefas</h1>
  <div className="todo-list">
    {/* .map acessa cada um dos itens de const todos */}
    {todos.map((todo) => (
      // Passa a prop para ter acesso aos dados
      // Declaração de chave primária
      <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;
}

export default App;
