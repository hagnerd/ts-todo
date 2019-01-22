import * as React from 'react';

interface UncompletedCountProps {
  uncompletedCount: number;
}

const UncompletedCount: React.FunctionComponent<UncompletedCountProps> = ({
  uncompletedCount,
}) => (
  <>
    {uncompletedCount === 0
      ? 'No tasks left to completed today. 🎉'
      : `You have ${uncompletedCount} task${
          uncompletedCount > 1 ? 's' : ''
        } left today 🚀`}
  </>
);

export default UncompletedCount;
