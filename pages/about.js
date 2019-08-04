import Markdown from 'markdown-to-jsx';
import Layout from '../components/Layout'
import styled from 'styled-components'
import biography from '../constants/biography.md'

const Bio = styled(Markdown)`
    margin-top: 50px;
    text-align: justify;
`

const About = () => (
    <Layout>
        <Bio>
            {biography}
        </Bio>
    </Layout>
);

export default About;