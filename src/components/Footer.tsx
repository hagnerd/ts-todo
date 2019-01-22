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
    <footer style={{ height: '50px' }}>
      <UncompletedCount uncompletedCount={uncompletedCount} />
      <CompletedCount completedCount={completedCount} />
    </footer>
  );
};

export default Footer;
