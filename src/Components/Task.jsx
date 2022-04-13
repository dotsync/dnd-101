import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'

export default function Task({ id, colIdx, title, rowIdx, setColumns, columns, task }) {
  const [{isDragging}, drag, dragPreview] = useDrag(() => ({
    type: 'task',
    item: {
      task,
      id,
      currentColIdx: colIdx,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }))
  return (
    <div ref={drag} style={{ border: 'red 1px solid', height: '200px' }}>
      <h3>{title}</h3>
      <p>task id: {id}</p>
      <p>col index: {colIdx}</p>
    </div>
  )
}
