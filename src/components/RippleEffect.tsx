"use client"

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

import Image from "next/image";
import bgImage from "../../public/bottle_bg.png"

export default function RippleEffect() {
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
        <>
            <div className="full-landing-image" >
                <Image src={bgImage} alt="image" priority />
            </div>
        </>
    );
}