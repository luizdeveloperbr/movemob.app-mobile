import { BACKEND_URL} from '@env';
type EquipamentoDetailsType = {
    id: number
    descricao: string
    codigo: number
    filial_id: number
    valor: number
    filial: {
      descricao: string
    }
    setor: {
      descricao: string
    }
      movimentacao: {
        status: string
      }
  
  }
export default async function getData(state: number | undefined, setState: React.Dispatch<React.SetStateAction<EquipamentoDetailsType | undefined>>){
    if(state){
      try {
        const response = await fetch(`${BACKEND_URL}/equipamento/${state}`)
        const data = await response.json()
        setState(data)
      } catch (error) {
        console.log(error)
      }
    }
  }