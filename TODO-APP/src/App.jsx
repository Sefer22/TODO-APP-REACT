import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>
      <div style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default App
