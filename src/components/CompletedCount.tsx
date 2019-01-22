import * as React from 'react';

interface CompletedCountProps {
  completedCount: number;
}

const CompletedCount: React.FunctionComponent<CompletedCountProps> = ({
  completedCount,
}) => {
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        {completedCount > 0 &&
          `You've completed ${completedCount} task${
            completedCount > 1 ? 's' : ''
          }!`}
      </p>
    </>
  );
};

export default CompletedCount;
