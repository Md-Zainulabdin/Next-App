"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Dynamic = () => {
    const params = useParams();

    // console.log(params.route);
    return (
        <div>Hello {params.route}</div>
    )
}

export default Dynamic