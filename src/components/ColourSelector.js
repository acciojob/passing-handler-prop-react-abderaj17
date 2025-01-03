import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const handleClick = () => {
    selectNextBackground({ background: config.background });
  };

  return (
    <button
    data-testid={config.key}
    className={config.classname} onClick={handleClick}>
      {config.label}
    </button>
  );
};

export default ColourSelector;
