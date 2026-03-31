import { LiftAdduser } from './LiftAdduser';
import { LiftDisplayUser } from './LiftDisplayUser';

import { useState } from 'react';
export const LiftingState = () => {
  const [userName, setUserName] = useState('');
  return (
    <div>
      <h2>Lifting State</h2>
      <LiftAdduser setUserName={setUserName} />
      <LiftDisplayUser userName={userName} />
    </div>
  );
};
