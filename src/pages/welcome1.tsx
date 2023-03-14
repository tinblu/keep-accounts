import w from '../assets/images/welcome1.svg'
export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img src={w} w-200px h-200px/>
      <h2 text-32px mt-48px>
        会争取 <br />
        还要会省钱
      </h2>
    </div>
  )
}
