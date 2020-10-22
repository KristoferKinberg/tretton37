import React from 'react';
import { Coworker } from "../../types";

interface Props {
    coworker: Coworker;
}

const CoworkerComponent = ({ coworker: { name }}: Props): JSX.Element => {
    return <div>
        { name }
    </div>
};

export default CoworkerComponent;
