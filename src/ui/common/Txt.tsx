import  { ReactNode } from 'react'
import { Color, color } from '@/types/color'

type TxtFontSize = 'title' | 'title2' | 'body' | 'note'
type TxtFontWeight = 'light' |'bold'
type TxtTextAlign = 'left' | 'center' | 'right' | 'justify'

type Props = {
    children: ReactNode
    fontSize: TxtFontSize
    color: Color
    fontWeight?: TxtFontWeight
    textAlign?: TxtTextAlign
}

const Txt = (props: Props) => {
  // fontSizeごとにレスポンシブクラスを割り当て
  let fontSizeClass = '';
  switch (props.fontSize) {
    case 'title':
      fontSizeClass = 'text-2xl md:text-4xl';
      break;
    case 'title2':
      fontSizeClass = 'text-xl md:text-2xl';
      break;
    case 'body':
      fontSizeClass = 'text-base md:text-lg';
      break;
    case 'note':
      fontSizeClass = 'text-xs md:text-sm';
      break;
    default:
      fontSizeClass = '';
  }

  
  
  return (
    <div>
        <p className={`${fontSizeClass} font-${props.fontWeight} text-${props.textAlign}`}
        style={{ color: color[props.color] }}>
          {props.children}
        </p>
    </div>
  )
}

export default Txt