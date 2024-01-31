import { React, useState, useEffect } from 'react';
import ComponentC from './ComponentC'
import { UserContext } from '../App';

const ComponentB = () => {
    return (
        <div>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;