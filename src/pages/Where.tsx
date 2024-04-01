import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import UVSIcon from '../assets/images/uvs-logo-icon.png';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Where</title>
      </Helmet>
      <h1>What we do</h1>
      <h3>Services</h3>
      <CoWrapper>
        <Co
          url="https://discord.com/invite/uvswtf"
          name="Account Boosting"
          iconReference={UVSIcon}
          tagline="Cheap Boosting Service"
          role=""
          what={
            'We offer a wide range of account boosting services for popular games. Join our Discord community today!'
          }
        />
        <Co
          url="https://discord.com/invite/uvswtf"
          name="Account Selling"
          iconReference={UVSIcon}
          tagline="Cheap Account Selling Service"
          role=""
          what={
            'We offer a wide range of accounts that are for sale for popular games. Join our Discord community today!'
          }
        />
        <Co
          url="https://discord.com/invite/uvswtf"
          name="Discord Boosting"
          iconReference={UVSIcon}
          tagline="Cheap Server Boosting Service"
          role=""
          what={
            'We offer booting from levels 1 to 3 for your server. Join our Discord community today!'
          }
        />
        <Co
          url="https://discord.com/invite/uvswtf"
          name="Server Members"
          iconReference={UVSIcon}
          tagline="Cheap Member Boost Service"
          role=""
          what={
            'Boost your server with hundreds of members at UVS. Join our Discord community today!'
          }
        />
      </CoWrapper>
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
