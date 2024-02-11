import { BACKEND_URL } from '@env';
import type { EquipamentoDetailsType } from '../@types/equipamento_details.d'

const getEquipamentoInfo = (getId: number | undefined) => new Promise<EquipamentoDetailsType>(async (resolve, reject) => {
  const response = await fetch(`${BACKEND_URL}/equipamento/${getId}`)
  if (response.ok) {
    resolve(response.json())
  } else {
    const { message } = await response.json()
    reject(message)
  }
})
export default getEquipamentoInfo
