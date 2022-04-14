import styles from './Profile.module.sass'

import { useEffect, useState } from 'react';

import $api from './../../http';
import { User } from './../../models/User';

function Profile() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    $api.get('/users')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <section>
      {user && <pre>{JSON.stringify(user)}</pre>}
    </section>
  );
}

export default Profile;
