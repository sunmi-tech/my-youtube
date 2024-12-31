import Main from "../components/section/Main"
import Today from "../components/contents/Today"
import Developer from "../components/contents/Developer"
import Cat from "../components/contents/Cat"
import Cooker from "../components/contents/Cooker"
import VarietyShow from "../components/contents/VarietyShow"
import News from "../components/contents/News"

function Home(){
    return(
        <Main
        title="마이 유튜브"
        description="마이 유튜브 홈페이지에 오신 것을 환영합니다.">
        <Today />
        <Developer />
        <Cat />
        <Cooker />
        <VarietyShow />
        <News />
        </Main>
    ) 
}

export default Home