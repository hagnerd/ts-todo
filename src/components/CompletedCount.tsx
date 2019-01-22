import * as React from 'react';

interface CompletedCountProps {
  completedCount: number;
}

const CompletedCount: React.FunctionComponent<CompletedCountProps> = ({
  completedCount,
}) => {
  return (
    <>{completedCount > 0 && `You've completed ${completedCount} todos!`}</>
  );
};

export default CompletedCount;
