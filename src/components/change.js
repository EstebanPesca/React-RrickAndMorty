import React from "react";

const Change = ({previous, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious();
    };

    const handleNext = () => {
        onNext();
    };

    return(
        <nav>
            <ul className="change-row">
                {
                    previous ? (
                        <li className="change">
                            <button className="button-change" onClick={handlePrevious}>Previous</button>
                        </li>) : null
                }
                {
                    next ? (
                        <li className="change">
                            <button className="button-change" onClick={handleNext}>Next</button>
                        </li>
                    ): null
                }
            </ul>
        </nav>
    )
};

export default Change