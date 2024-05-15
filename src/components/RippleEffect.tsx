"use client"

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

interface RippleEffectProps {
    imageUrl: string;
}

const RippleEffect: React.FC<RippleEffectProps> = ({ imageUrl }) => {
    useEffect(() => {
        try {
            //@ts-ignore
            $('.full-landing-image').ripples({
                resolution: 256,
                perturbance: 0.01,
            });
        } catch (e) {
            console.error('Ripples effect failed to load', e);
        }
    }, []);

    return (
        <div
            className="full-landing-image"
            style={{
                width: '100%',
                height: '100vh',
                background: `url(${imageUrl}) no-repeat center`,
                backgroundSize: 'cover',
            }}
        ></div>
    );
};

export default RippleEffect;
