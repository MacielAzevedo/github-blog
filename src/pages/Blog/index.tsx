import { useContext } from 'react'
import { ExternalLink } from '../../components/ExternalLink'
import { Profile } from '../../components/Profile'
import { BlogContext } from '../../contexts/BlogContext'
import { BsBoxArrowUpRight, BsGithub, BsBuildingFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { MoreDetails } from '../../components/MoreDetails'
import { Posts } from '../../components/Posts'
import { SearchForm } from '../../components/SearchForm'
import { LoadingAnimation } from '../../components/LoadingAnimation'

export function Blog() {
  const { userData, posts, isLoading } = useContext(BlogContext)
  const { bio, company, followers, login, name, avatar_url, url } = userData

  return (
    <>
      <Profile.Root>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <Profile.Content>
            <Profile.Avatar avatarURL={avatar_url} />
            <Profile.Info>
              <Profile.Title>
                <Profile.Developer title={name} />
                <ExternalLink.Root>
                  <ExternalLink.Trigger
                    path="https://github.com/MacielAzevedo"
                    text="github"
                  />
                  <BsBoxArrowUpRight color="#3294F8" />
                </ExternalLink.Root>
              </Profile.Title>

              <Profile.Bio>{bio}</Profile.Bio>

              <MoreDetails.Root>
                <MoreDetails.Flag icon={<BsGithub />} text={login} />

                <MoreDetails.Flag icon={<BsBuildingFill />} text={company} />

                <MoreDetails.Flag
                  icon={<HiUsers />}
                  count={followers}
                  text={'Seguidor(es)'}
                />
              </MoreDetails.Root>
            </Profile.Info>
          </Profile.Content>
        )}
      </Profile.Root>

      <SearchForm.Root>
        <SearchForm.TitleContent>
          <SearchForm.Title text="Publicações" />
          <SearchForm.Publications count={posts.length} text="publicações" />
        </SearchForm.TitleContent>

        <SearchForm.SearchInput placeholder="Buscar conteúdo" />
      </SearchForm.Root>

      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Posts.Root>
          {posts.map((post) => (
            <Posts.Card key={post.number} post={post} />
          ))}
        </Posts.Root>
      )}
    </>
  )
}
