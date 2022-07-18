import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  const CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={input => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}

      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={24}
      />
    </div>
  );
};
