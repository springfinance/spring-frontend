import React from 'react';

import Pools from 'features/vault/components/Pools/Pools2';
import Disclaimer from 'components/Disclaimer/Disclaimer';

export default function HomePage2() {
  return (
    <>
      <Disclaimer />
      <Pools fromPage="home2" />
    </>
  );
}
