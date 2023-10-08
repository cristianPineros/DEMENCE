import React from 'react';

const ClothesSizes = ({ sizes, onSelectSize }) => {
  return (
    <div>
      <h2>Select a Size:</h2>
      <div className="size-options">
        {sizes.map(size => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className="size-button"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClothesSizes;
