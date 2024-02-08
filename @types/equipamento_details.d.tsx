export type EquipamentoDetailsType = {
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