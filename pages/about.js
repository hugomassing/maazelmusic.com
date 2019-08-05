import Markdown from 'markdown-to-jsx';
import styled from 'styled-components'
import Layout from '../components/Layout'
import Button from '../components/Button'
import biography from '../constants/biography.md'
import config from '../constants/config'

const Bio = styled(Markdown)`
    text-align: justify;
`

const Pictures = styled.div`
    margin: 50px 0;
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

const ContactMe = styled.a`
    width: 200px;
    align-self: center;
`

const About = () => (
    <Layout title="Biography">
        <h1>Biography</h1>
        <Bio>
            {biography}
        </Bio>
        <ContactMe href={`mailto:${config.contactMail}`}>
            <Button primary>
                Contact me
            </Button>
        </ContactMe>
        <Pictures>
            <Img src={config.bioPicture1} />
            <Img src={config.bioPicture2} />
        </Pictures>
    </Layout>
);

export default About;