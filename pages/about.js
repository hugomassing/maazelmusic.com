import Markdown from 'markdown-to-jsx';
import Layout from '../components/Layout'
import styled from 'styled-components'
import biography from '../constants/biography.md'
import config from '../constants/config'

const Bio = styled(Markdown)`
    text-align: justify;
`

const Pictures = styled.div`
    margin: 25px 0;
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: space-between;
    &:first-child {
        margin-right: 5px;
    }
`

const Img = styled.img`
    height: 700px;
    width: 49.5%;
    object-fit: cover;
`

const About = () => (
    <Layout>
        <h1>Biography</h1>
        <Bio>
            {biography}
        </Bio>
        <Pictures>
            <Img src={config.bioPicture1} />
            <Img src={config.bioPicture2} />
        </Pictures>
    </Layout>
);

export default About;