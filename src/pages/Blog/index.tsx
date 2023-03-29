import { useContext } from "react";
import { ExternalLink } from "../../components/ExternalLink";
import { Profile } from "../../components/Profile";
import { BlogContext } from "../../contexts/BlogContext";
import { BsBoxArrowUpRight, BsGithub, BsBuildingFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"
import { MoreDetails } from "../../components/MoreDetails";


export function Blog() {
    const { userData } = useContext(BlogContext)
    const { bio, company, followers, login, name } = userData

    return (
        <Profile.Root>
            <Profile.Content>
                <Profile.Avatar
                    src="https://avatars.githubusercontent.com/u/112913665?v=4"
                    alt=""
                />
                <Profile.Info>
                    <Profile.Title>
                        <h1 className="text-2xl font-bold text-base-title">
                            {name}
                        </h1>
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
    )
}