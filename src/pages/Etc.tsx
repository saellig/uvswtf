import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Thanks</h2>
    <p>
      Thanks for visiting. We hope you enjoyed your stay. Once again our services are
      available at our <a href={'https://discord.com/invite/uvswtf'}>discord server.</a>
    </p>
    <h2>Contact</h2>
    <p>
      We're most responsive through Discord Server Tickets, you can{' '}
      <a href={'https://discord.com/invite/uvswtf'}>click here</a> to create
      a ticket.
    </p>
    <p>
      If your inquiry is related to networking or parnterships, please send an email to <a href="mailto:ops@sakuraji.ma">network@uvs.wtf</a>. 
      If it's an emergency, you can email us at <a href="mailto:ops@sakuraji.ma">support@uvs.wtf</a>.
    </p>
    <h1>See you soon! 👋</h1>
  </PageWrapper>
);

export default Etc;
