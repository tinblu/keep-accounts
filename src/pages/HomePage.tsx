import pig from '../assets/images/小猪存钱罐.svg'
import add from '../assets/icon/add.svg'
import useSWR from 'swr'
import axios from 'axios'
import { ajax } from '../lib/ajax'

export const Home: React.FC = () => {
   const { data: meData, error: meError } = useSWR('/api/v1/me', (path) => {
    return ajax.get(path)
  })
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, (path) => {
    return ajax.get(path)
  })
  console.log(meData, meError, itemsData, itemsError)
  return  <div>
    <div flex justify-center items-center>
      <img mt-15vh mb-10vh width="200" height="230" src={pig} />
    </div>
    <div px-16px>
      <button h-48px w="100%" bg="#accbee" b-none text-white
        rounded-8px
      >开始记账</button>
    </div>
    <button p-4px w-56px h-56px bg="#accbee" rounded="50%" b-none text-white
      text-6xl fixed bottom-16px right-16px>
      <img src={add} max-w="100%" max-h="100%" />
    </button>
  </div>
}
