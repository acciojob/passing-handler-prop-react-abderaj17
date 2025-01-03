
import React from 'react'

const Selection = ({applyColor}) => {
    const[style, setStyle] = React.useState({background: ""})

    const updateSelectionStyle = (newStyle) => {
        setStyle(newStyle)
    }
  return (
    <div className='fix-box' style={style} onClick={() => applyColor(updateSelectionStyle)}>
       <h3>Selection</h3>

    </div>
  )
}

export default Selection