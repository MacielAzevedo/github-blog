import { useContextSelector } from 'use-context-selector'
import { CaretLeft } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import {
  BsBoxArrowUpRight,
  BsFillCalendarEventFill,
  BsFillChatFill,
  BsGithub,
} from 'react-icons/bs'
import { ExternalLink } from '../../components/ExternalLink'
import { MoreDetails } from '../../components/MoreDetails'
import { PostInfo } from '../../components/PostInfo'
import {
  BlogContext,
  PostProps,
  repoName,
  username,
} from '../../contexts/BlogContext'
import { FormattedDateRelativeToNow } from '../../utils/formatter'
import { LoadingAnimation } from '../../components/LoadingAnimation'

import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

export function Post() {
  const userData = useContextSelector(BlogContext, (context) => {
    return context.userData
  })
  const [isLoading, setIsLoading] = useState(true)
  const [issueData, setIssueData] = useState({} as PostProps)
  const { login } = userData
  const { id } = useParams()

  const { body, comments, created_at, html_url, title } = issueData

  const getIssueDatail = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      setIssueData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getIssueDatail()
  }, [getIssueDatail])

  return (
    <PostInfo.Root>
      <PostInfo.Header>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            <PostInfo.Title>
              <ExternalLink.Root>
                <CaretLeft color="#3294F8" size={12} />
                <ExternalLink.Trigger path="/" text="Voltar" />
              </ExternalLink.Root>

              <ExternalLink.Root>
                <ExternalLink.Trigger path={html_url} text="Ver no github" />
                <BsBoxArrowUpRight color="#3294F8" size={12} />
              </ExternalLink.Root>
            </PostInfo.Title>

            <PostInfo.Content>
              <PostInfo.Subtitle text={title} />

              <MoreDetails.Root>
                <MoreDetails.Flag icon={<BsGithub />} text={login} />

                <MoreDetails.Flag
                  icon={<BsFillCalendarEventFill />}
                  text={FormattedDateRelativeToNow(new Date(created_at))}
                />

                <MoreDetails.Flag
                  icon={<BsFillChatFill />}
                  count={comments}
                  text={'Comentário(s)'}
                />
              </MoreDetails.Root>
            </PostInfo.Content>
          </>
        )}
      </PostInfo.Header>

      <PostInfo.Footer>
        {!isLoading && <PostInfo.TextContent content={body} />}
      </PostInfo.Footer>
    </PostInfo.Root>
  )
}
