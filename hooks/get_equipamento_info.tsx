import React from 'react';
import { BACKEND_URL } from '@env';
import type { EquipamentoDetailsType } from '../@types/equipamento_details.d'

type Props = {
  getId: number | undefined,
  setState: React.Dispatch<React.SetStateAction<EquipamentoDetailsType | undefined>>,
  setLoadingState: React.Dispatch<React.SetStateAction<boolean>>
}

export default async function getData(props: Props) {
  if (props.getId !== undefined) {
      try {
        const response = await fetch(`${BACKEND_URL}/equipamento/${props.getId}`)
        props.setLoadingState(true)
        if(!response.ok){
          //TODO: configurar backend para responder http-status corretamente.
          //mostrar mensagem de erro, ou Throw Error e tratar no .catch()
        }else{
          const data = await response.json()
          props.setState(data)
          props.setLoadingState(false)
        }
      } catch (error) {
        props.setState(undefined)
      }

  }
}