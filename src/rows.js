import React, { Component } from 'react'

export default function Rows(props) {
  const rows = props.rows.map(row => (<p>{row.nodes[0].leaves[0].text}</p>))
  return <div>{rows}</div>
}
