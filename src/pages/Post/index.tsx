import { CaretLeft } from 'phosphor-react'
import { useContext } from 'react'
import {
  BsBoxArrowUpRight,
  BsFillCalendarEventFill,
  BsFillChatFill,
  BsGithub,
} from 'react-icons/bs'
import { ExternalLink } from '../../components/ExternalLink'
import { MoreDetails } from '../../components/MoreDetails'
import { PostInfo } from '../../components/PostInfo'
import { BlogContext } from '../../contexts/BlogContext'

export function Post() {
  const { userData, posts } = useContext(BlogContext)
  const { login } = userData


  return (
    <PostInfo.Root>
      <PostInfo.Header>
        <PostInfo.Title>
          <ExternalLink.Root>
            <CaretLeft color="#3294F8" size={12} />
            <ExternalLink.Trigger path="/" text="Voltar" />
          </ExternalLink.Root>

          <ExternalLink.Root>
            <ExternalLink.Trigger path="/" text="Ver no github" />
            <BsBoxArrowUpRight color="#3294F8" size={12} />
          </ExternalLink.Root>
        </PostInfo.Title>

        <PostInfo.Content>
          <PostInfo.Subtitle text="JavaScript data types and data structures" />

          <MoreDetails.Root>
            <MoreDetails.Flag icon={<BsGithub />} text={login} />

            <MoreDetails.Flag
              icon={<BsFillCalendarEventFill />}
              text="Há um dia"
            />

            <MoreDetails.Flag
              icon={<BsFillChatFill />}
              count={10}
              text={'Comentário(s)'}
            />
          </MoreDetails.Root>
        </PostInfo.Content>
      </PostInfo.Header>

      <PostInfo.Footer>
        <PostInfo.TextContent
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                        "
        />

        <PostInfo.Code
          content="let foo = 42;   // foo is now a number
                        foo = ‘bar’;    // foo is now a string
                        foo = true;     // foo is now a boolean"
        />
      </PostInfo.Footer>
    </PostInfo.Root>
  )
}
