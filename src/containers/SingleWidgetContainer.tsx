import { SingleWidget } from 'components/SingleWidget';
import { useState } from 'react';

export type SingleWidgetResponse = {
  total: number;
  logins: number;
  signOut: number;
  rate: number;
};

const response: SingleWidgetResponse = {
  total: 4.332,
  logins: 830,
  signOut: 0.5,
  rate: 4.5,
};

export const SingleWidgetContainer = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show ? <SingleWidget title="Visits Today" data={response} onClose={handleClose} /> : null;
};
