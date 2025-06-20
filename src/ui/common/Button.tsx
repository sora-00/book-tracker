import Txt from "./Txt"
import { color } from "../../types/color"

type Props = {
    text: string
    mode: 'primary' | 'secondary'
    onClick: () => void
}
const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex items-center justify-center rounded-full p-2 w-[240px] md:w-[300px]`}
      style={{
        backgroundColor: props.mode === 'primary' ? color.primaryMain : color.white,
        border: props.mode === 'secondary' ? `2px solid ${color.primaryMain}` : 'none'
      }}
    >
        <Txt fontSize="body" color={props.mode === 'primary' ? 'white' : 'primaryMain'} textAlign="center">
            {props.text}    
        </Txt>
    </button>
  )
}

export default Button