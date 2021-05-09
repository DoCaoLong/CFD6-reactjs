import React from 'react'
function InputComponent(prop, inputRef) { 
    return <input ref = { inputRef } type = "text" placeholder = "Họ và tên bạn"/> 
}
export default React.forwardRef(InputComponent);
