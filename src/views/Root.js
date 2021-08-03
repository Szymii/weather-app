import React, { useEffect, useState } from 'react';

const Root = () => {
  const [marian, setMarian] = useState('false');

  useEffect(() => {
    console.log(marian);
  }, []);

  return (
    <div>
      <button onClick={() => setMarian((prev) => !prev)}>Hello</button>
    </div>
  );
};

export default Root;
