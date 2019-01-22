import * as React from 'react';
import CompletedCount from './CompletedCount';
import UncompletedCount from './UncompletedCount';

interface FooterProps {
  uncompletedCount: number;
  completedCount: number;
}

const Footer: React.FunctionComponent<FooterProps> = ({
  uncompletedCount,
  completedCount,
}) => {
  return (
    <footer>
      <CompletedCount completedCount={completedCount} />
      <UncompletedCount uncompletedCount={uncompletedCount} />
    </footer>
  );
};

export default Footer;
