import React from 'react';

const Stats = ({count}) => {
    return (
        <div>
            <div className="flex justify-center  text-2xl font-bold">Total Count: {count}</div>
        </div>
    );
};

export default Stats;