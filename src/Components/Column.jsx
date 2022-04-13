import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import Task from './Task'

export default function Column({
  title,
  tasks,
  id,
  colIdx,
  setColumns,
  columns,
}) {
  const [{ canDrop, isOver, getItem, didDrop }, drop] = useDrop(
    (item) => ({
      accept: 'task',
      drop: (item) => {
        // prevents placing onto self
        if (item.currentColIdx === colIdx) return
        // make updated list of tasks for the departing column
        const oldTasks = columns[item.currentColIdx]['tasks']
        const updatedOldTasks = oldTasks.filter((task) => {
          return task.id != item.id
        })
        const newColumns = [...columns]
        // remove task from old column
        newColumns[item.currentColIdx]['tasks'] = updatedOldTasks
        // add task to new column
        newColumns[colIdx]['tasks'].push(item.task)
        console.log(`newColumns[colIdx]['tasks']`, newColumns[colIdx]['tasks'])
        // update state
        setColumns([...newColumns])
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [],
  )

  return (
    <div role={'Dustbin'} ref={drop} className="board-column">
      <h2>
        {title} (column index={colIdx})
      </h2>
      {canDrop ? 'Release to drop' : 'Drag a box here'}
      {tasks.map((t, idx) => {
        return (
          <Task
            task={t}
            tasks={tasks}
            colIdx={colIdx}
            title={t.title}
            id={t.id}
            rowIdx={idx}
            key={idx + '-' + t.id}
            setColumns={setColumns}
            columns={columns}
          />
        )
      })}
    </div>
  )
}
