import axios from 'axios';
import { useEffect, useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    axios('https://b09t1q.sse.codesandbox.io/name').then((result) =>
      setUser(result.data)
    );
  });

  return <span>{user}</span>;
}

export default UserInfo;
