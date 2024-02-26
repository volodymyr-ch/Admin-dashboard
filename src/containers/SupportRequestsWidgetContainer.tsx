import { SupportRequestsWidget } from 'components/SupportRequestsWidget';
import { response } from 'mocks/supportRequests';
import { useState } from 'react';

export const SupportRequestsWidgetContainer = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <SupportRequestsWidget
      title={
        <span>
          Support <b>Requests</b>
        </span>
      }
      data={response}
      onClose={handleClose}
    />
  ) : null;
};
