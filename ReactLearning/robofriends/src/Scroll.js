import React from 'react'

const Scroll = (props) => {
	return(
		// Using two curly pracket will return obejct.
		<div style={{ overflowY: 'scroll', border: '0px', height: '800px', marginTop: '20px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;