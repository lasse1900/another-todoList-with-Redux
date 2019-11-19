import React from 'react'

export default (props) => (
  <ul>
  {props.todos.map(todo => (
    <li key={todo.id}>
      <input type="checkbox" defaultChecked={todo.isComplete} />
      {todo.name}
    </li>
  ))}
</ul>
)