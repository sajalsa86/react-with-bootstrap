// import React from 'react';
import { Button, Stack } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const App = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="lg" />
  // const facebookIcon = <FontAwesomeIcon icon={faFacebookF} size="lg" />
  const youtubeIcon = <FontAwesomeIcon icon={faYoutube} size="lg" />
  return (
    <div>
      <h1 className='fs-1 text-warning text-center bg-success p-5 m-5 rounded-5'>Welcome to react with bootstrap</h1>
      {/* ,vertical  */}
      <Stack direction="horizontal" gap={2}>
        <Button as="a" target='blank' href='https://www.facebook.com/' variant="primary">
          {facebookIcon} Facebook
        </Button>
        <Button as="a" target='blank' href='https://www.youtube.com/' variant="danger">
          {youtubeIcon} Youtube
        </Button>
        <Button as="a" variant="primary">
          Button as link
        </Button>
      </Stack>;
    </div>
  );
};

export default App;