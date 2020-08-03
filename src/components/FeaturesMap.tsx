import React, { useState } from 'react';

function FeaturesMap({ tools, features }: { tools?: string; features?: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return tools ? (
    <div className="feature-map">
      <p>
        <b>Tools and tech: </b>
        <span>{tools}</span>
      </p>
      {features && features.length > 0 && (
        <>
          <span className="cursor" onClick={toggleIsOpen}>
            <b>{isOpen ? 'Hide App Features' : 'Show App Features'}</b>
          </span>
          {isOpen && (
            <ul>
              {features.map((feature) => (
                <li>
                  <span>&bull;</span> {feature}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  ) : (
    <></>
  );
}

export default FeaturesMap;
