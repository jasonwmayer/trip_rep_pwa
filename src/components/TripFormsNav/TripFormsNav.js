import React from 'react';

import './TripFormsNav.scss';

const TripFormsNav = (props) => {
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <span
              key={`step-${i}`}
              className={isActive ? "active" : "dot"}
              onClick={() => props.goToStep(i)}
            >
        •
        </span>
        ));
    }

    return (
        <div className="nav">{dots}</div>
    );
};

export default TripFormsNav;