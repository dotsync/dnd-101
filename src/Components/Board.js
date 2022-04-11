import React from 'react'

export default function Board() {
    const columnNames = ["a","b","c","d","e",]
  return (
    <div className='board'>
        {columnNames.map((c) => {
            return (
                <div className="board-column">{c}</div>
            )
        })}
    </div>
  )
}
