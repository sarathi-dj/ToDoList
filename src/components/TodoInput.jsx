import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos, todoValue, setTodovalue} = props

  return (
    <header>
        <input value={todoValue} onChange={(e) => {
          setTodovalue(e.target.value)
        }} placeholder='Enter todo...' />
        <button onClick={() => {
          handleAddTodos(todoValue)
          setTodovalue('')
        }}>Add</button>
    </header>
  )
}
