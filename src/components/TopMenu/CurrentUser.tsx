import styled from "styled-components"

interface Props {
  className?: string
}
const Div = styled.div`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
`
export const CurrentUser: React.FC<Props> = ({ className }) => {
  return (
    <Div>
      <div className={className} text-bluegray w="100%" pt-32px pb-44px px-16px>
        <h2 text-24px>未登录用户</h2>
        <div>点击这里登录</div>
      </div>
    </Div>
  )
}