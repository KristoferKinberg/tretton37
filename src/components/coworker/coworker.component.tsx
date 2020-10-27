import React from 'react';
import { Coworker } from "../../types";

interface Props {
    coworker: Coworker;
}

const CoworkerComponent = ({ coworker: { name, email, phoneNumber, office }}: Props): JSX.Element => {
    return <div>
        { name }
        { email }
        { phoneNumber }
        { office }
    </div>
};

export default CoworkerComponent;
