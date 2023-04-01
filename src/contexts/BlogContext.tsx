import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

const username = 'MacielAzevedo'
const repoName = 'github-blog-03-ignite'

interface User {
  avatar_url: string
  bio: string
  company: string
  followers: number
  name: string
  login: string
  url: string
}

export interface Post {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
}

interface BlogContextProps {
  userData: User
  posts: Post[]
  getPosts: (query: string) => Promise<void>
  isLoading: boolean
}

export const BlogContext = createContext({} as BlogContextProps)

interface BlogProvierProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProvierProps) {
  const [userData, setUserData] = useState({} as User)
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)


  async function fetchUserData() {
    const response = await api.get(`/users/${username}`)

    setUserData(response.data)
  }


  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repoName}`)

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  useEffect(() => {
    fetchUserData()
    getPosts()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        userData,
        posts,
        getPosts,
        isLoading
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
