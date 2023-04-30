import React from 'react'
import Cell from './Cell'

const Row = ({item}) => {
    const objArray = Object.entries(item)
  return (
    <tr>
        {objArray.map(([key, value]) => {
            return(
                <Cell 
                key={key}
                cellData={JSON.stringify(value)}
                />
            )
        })}
        </tr>
  )
}

export default Row