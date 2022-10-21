import Skills from './components/skills';
import Layout from "../../Layout/Layout";

const skillScreen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <Layout webtype="client">
                <Skills />
                </Layout>
            </div>
        </div>
    )
}
export default skillScreen