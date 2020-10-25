const { format } = Intl.NumberFormat('pt-BR')

const formatNumber = value => format(value)

export { formatNumber }
