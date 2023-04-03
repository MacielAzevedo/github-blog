import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function FormattedDateRelativeToNow(date: Date) {
  const DateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })

  return DateRelativeToNow
}
