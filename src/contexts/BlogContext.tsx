import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
    bio: string
    company: string
    followers: number
    name: string
    login: string
    url: string
}

interface Post {
    title: string
}

interface BlogContextProps {
    userData: User
}

export const BlogContext = createContext({} as BlogContextProps)

interface BlogProvierProps {
    children: ReactNode
}

export function BlogProvider({ children }: BlogProvierProps) {
    const [userData, setUserData] = useState({} as User)
    const [posts, setPosts] = useState<Post[]>([])

    async function fetchUserData() {
        const response = await api.get('/users/macielAzevedo')

        setUserData(response.data)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <BlogContext.Provider value={{
            userData
        }}>
            {children}
        </BlogContext.Provider>
    )
}