import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
        console.log(ref.current);
        //ref가 현재 없거나 클릭한 대상이 ref에 포함되면 무시
        if(!ref.current || ref.current.contains(event.target)) {
            return;
        }
        handler();
    };
    document.addEventListener('mousedown',listener);
    document.addEventListener('touchstart',listener);
    return () => {
        document.removeEventListener('mousedown',listener);
        document.removeEventListener('touchstart',listener);
    };
  })
}

export default useOnClickOutside