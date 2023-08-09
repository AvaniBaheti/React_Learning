import React from 'react'

export default function Forward_Ref2(props,ref) {
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}
