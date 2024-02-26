import { SupportRequestsWidget } from 'components/SupportRequestsWidget';
import { useGetSupportRequestsQuery } from 'entities/api/supportRequestsApi';
import { useState } from 'react';

export const SupportRequestsWidgetContainer = () => {
  const { data: response } = useGetSupportRequestsQuery();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show && response ? (
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
