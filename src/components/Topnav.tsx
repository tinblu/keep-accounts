import { ReactNode } from "react"

interface Props {
  title?: string
  icon: ReactNode
}
export const Topnav: React.FC<Props> = ({ title = "bingo记账", icon}) => {
  return (
    <div text-bluegray flex items-center pt-24px pb-8px px-24px >
      <span w-48px h-48px mr-16px flex justify-center items-center
        children-max-w="100%" children-max-h="100%">
        {icon}
      </span>
      <h1 text-24px>{title}</h1>
    </div>
  )
}