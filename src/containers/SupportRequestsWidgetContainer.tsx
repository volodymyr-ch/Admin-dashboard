import { SupportRequestsWidget } from 'components/SupportRequestsWidget';
import { useGetSupportRequestsQuery } from 'entities/api/supportRequestsApi';
import { useState } from 'react';
import { Skeleton } from './Skeleton';

export const SupportRequestsWidgetContainer = () => {
  const { data: response, isLoading } = useGetSupportRequestsQuery();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <Skeleton show={!response && isLoading} styles={{ minHeight: '310px' }}>
      {response ? (
        <SupportRequestsWidget
          title={
            <span>
              Support <b>Requests</b>
            </span>
          }
          data={response}
          onClose={handleClose}
        />
      ) : null}
    </Skeleton>
  ) : null;
};
