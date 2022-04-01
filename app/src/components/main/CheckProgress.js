import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function CheckProgress({done}) {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
    
		<div className="progress_container">
            <div className='progress_msj'>Su compra se registro satisfactoriamente, revise su sección compras para obtener mas informacion</div>
            <Link to="/shopping" className='progress_link'>Mis compras</Link>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
		</div>
	)
}

export default CheckProgress