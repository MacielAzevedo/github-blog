import { format, formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";

export function FormattedDateRelativeToNow(date: Date) {
    const dateFormatted = format(date,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR,
        }
    )

    const DateRelativeToNow = formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true
    })


    return DateRelativeToNow
}
