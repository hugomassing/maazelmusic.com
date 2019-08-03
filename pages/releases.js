import styled from 'styled-components'

import Layout from '../components/Layout'
import ReleaseCard from '../components/Release'
import releases from '../constants/releases'

const ReleasesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
`

const ReleasesList = () => (
    <Layout>
        <ReleasesContainer>
            {releases && releases.map((release, index) => <ReleaseCard
                key={`${index}_${release.name}`} 
                release={release}
            />)}
        </ReleasesContainer>
    </Layout>
);
  
export default ReleasesList;