import React from 'react';
import {useEffect, useState} from 'react';
import {AuthorizedApp} from './authorized-app';
import {UnauthorizedApp} from './unauthorized-app';
import {userService} from './services/userService';

const App = () => {
  const [authenticated, setAuthentictaed] = useState(false);

  useEffect(() => {
    userService.verifyToken().then((data) => {
      if (data.success) {
        setAuthentictaed(true);
      } else {
        setAuthentictaed(false);
      }
    });
  }, [authenticated]);

  return <>{authenticated ? <AuthorizedApp /> : <UnauthorizedApp />}</>;
};

export default App;