import Markdown from 'markdown-to-jsx';
import styled from 'styled-components'
import Layout from '../components/Layout'
import Button from '../components/Button'
import biography from '../constants/biography.md'
import config from '../constants/config'

const Bio = styled(Markdown)`
    text-align: justify;
    align-self: center;
    width: 60%;
    margin: 20px 0;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    a {
        text-decoration: underline;
    }
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
    @media only screen and (max-width: 600px) {
        height: 250px;
    } 
`

const ContactMe = styled.a`
    align-self: center;
`

const About = () => (
    <Layout title="Biography">
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