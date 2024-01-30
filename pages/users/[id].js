import {useRouter} from "next/router";
import MainContainer from "../../componenets/MainContainer";

export default function () {
    const {query} = useRouter()
    return(
        <MainContainer>
            Пользователь c id {query.id}
        </MainContainer>
    )
}
