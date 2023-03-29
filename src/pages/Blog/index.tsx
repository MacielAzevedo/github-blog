import { useContext } from "react";
import { ExternalLink } from "../../components/ExternalLink";
import { Profile } from "../../components/Profile";
import { BlogContext } from "../../contexts/BlogContext";
import { BsBoxArrowUpRight, BsGithub, BsBuildingFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"
import { MoreDetails } from "../../components/MoreDetails";
import { SearchForm } from "../../components/SearchForm";


export function Blog() {
    const { userData } = useContext(BlogContext)
    const { bio, company, followers, login, name } = userData

    return (
        <>
            <Profile.Root>
                <Profile.Content>
                    <Profile.Avatar
                        src="https://avatars.githubusercontent.com/u/112913665?v=4"
                        alt=""
                    />
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

                        <Profile.Bio>
                            {bio}
                        </Profile.Bio>

                        <MoreDetails.Root>
                            <MoreDetails.Flag
                                icon={<BsGithub />}
                                text={login}
                            />

                            <MoreDetails.Flag
                                icon={<BsBuildingFill />}
                                text={company}
                            />

                            <MoreDetails.Flag
                                icon={<HiUsers />}
                                count={followers}
                                text={"Seguidor(es)"}
                            />
                        </MoreDetails.Root>
                    </Profile.Info>
                </Profile.Content>
            </Profile.Root>

            <SearchForm.Root>
                <SearchForm.TitleContent>
                    <SearchForm.Title text="Publicações" />
                    <SearchForm.Publications count={6} text="publicações" />
                </SearchForm.TitleContent>

                <SearchForm.SearchInput placeholder="Buscar conteúdo" />
            </SearchForm.Root>
        </>

    )
}