import React, { useState } from 'react'
import Column from './Column'
const MOCKCOLUMNS = [
  {
    title: 'a',
    id: 1,
    tasks: [{
      title: 'clean Fridge',
      id: 1
    }],
  },
  {
    title: 'b',
    id: 2,
    tasks: [{
      title: 'wash dishes',
      id: 2
    }],
  },
  {
    title: 'c',
    id: 3,
    tasks: [],
  },
  {
    title: 'c',
    id: 4,
    tasks: [],
  },
  {
    title: 'd',
    id: 5,
    tasks: [],
  },
]
export default function Board() {
  const [columns, setColumns] = useState(MOCKCOLUMNS)
  return (
    <div className="board">
      {columns.map((c, idx) => {
        return (
            <Column
              columns={columns}
              title={c.title}
              id={c.id}
              colIdx={idx}
              tasks={c.tasks}
              key={idx+'-'+c.id}
              setColumns={setColumns}
              />
        )
      })}
    </div>
  )
}
