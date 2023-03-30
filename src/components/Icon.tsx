import c from 'classnames'
interface Props {
  className?: string
  name: string
}
export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={c(className, 'j-icon')} style={{color:'#b1e1fa'}}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}