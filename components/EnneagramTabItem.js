import React from 'react'

const EnneagramTabItem = ({ value = 1 }) => {
    return (
        <div className="w-full">
            <object className="w-full h-screen " data={`/enneagram${value + 1}.pdf`} type="application/pdf">
                <div>No online PDF viewer installed</div>
            </object>
        </div>

    )
}

export default EnneagramTabItem