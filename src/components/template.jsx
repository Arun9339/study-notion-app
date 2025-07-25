import React from 'react'
import frameImage from "../assets/frame.png";

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
                    (<SignupForm />) :
                    (<loginForm />)}


                <div>
                    <div>

                    </div>

                    <p>OR</p>

                    <div></div>
                    <button>Sign in  with Google</button>
                </div>

                <div>
                    <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy'></img>
                <img src={ image} alt='pattern' width={558} height={504} loading='lazy'></img> 
               
               
                </div>

            </div>
        </div>
    )
}

export default template;