import { useSelector } from "react-redux";
import { IState } from "../../store/store";

export const Console = () => {

  const string = useSelector((state: IState) => state.listPath)

  return (
    <div>
      <span className="consoleHeader">Redux Console</span>
      {string.map((string: string, i: number) => { return <p key={i}>{string}</p> })}
    </div>
  )
}
