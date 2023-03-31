import { Icon } from "./Icon"

interface Props {
  title?: string
}
export const Topnav: React.FC<Props> = ({ title = "bingo记账"}) => {
  return (
    <div text-bluegray flex items-center pt-24px pb-8px px-24px >
      <Icon name="menu" className="w-24px h-24px mr-16px" />
      <h1 text-24px>{title}</h1>
    </div>
  )
}