import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/store";


export const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const path = useSelector((state: IState) => state.path.join('\\') + '\\')

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current?.value) {
      switch (event.key) {
        case 'Enter':
          const inputValue = inputRef.current.value
          const [typeValue, payloadValue] = inputValue.split(" ")
          dispatch({
            type: typeValue,
            payload: payloadValue,
          })
          clearInput()
          break
      }
    }
  }

  return (
    <div className="consoleInput">
      <span>{path}</span>
      <input className="input" ref={inputRef} onKeyPress={handleKeyPress} />
    </div>
  );
};
