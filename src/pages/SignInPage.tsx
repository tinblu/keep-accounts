import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"
import { Topnav } from "../components/Topnav"

export const SignInPage: React.FC = () =>{
  return (
    <div>
      <Gradient>
        <Topnav title="登录" icon={
          <Icon name="back"/>
        }/>
      </Gradient>
    </div>
  )
}