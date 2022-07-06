import React from 'react'
import Navbar from '../components/common/Navbar'
import EnneagramTab from '../components/EnneagramTab'

const enneagram = () => {
    return (
        <div><Navbar />
            <div className="container mx-auto lg:px-16 md:px-12 sm:px-4 px-4 py-6">
                <h1 className="text-center text-4xl py-2 mb-6">Type Unlocked Description</h1>
                <EnneagramTab />
            </div>
        </div>
    )
}

export default enneagram