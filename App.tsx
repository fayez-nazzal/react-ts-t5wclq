import * as React from 'react';
import './style.css';
import useHighlight from './useHighlight';

export default function App() {
  const ref = React.useRef<HTMLParagraphElement>();

  useHighlight(ref, {
    hello: 'blue',
    Start: 'red',
    editing: 'yellow',
    'Start editing': 'hotpink',
  });

  return (
    <div>
      <p ref={ref} id="paragraph" style={{ position: 'relative' }}>
        Start editing to see some magic happen :)
      </p>
    </div>
  );
}
