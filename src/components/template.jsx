import React from 'react'

const template = ({ title, desc1, desc2, image, formtype, setIsLoggedeIn }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>
                        {desc1}
                    </span>
                    <span>
                        {desc2}
                    </span>
                </p>

                {formtype === "signup" ?
            (<SignupForm/>):
            (<loginForm/>)}

            </div>
        </div>
    )
}

export default template;