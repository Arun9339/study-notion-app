import React, { useState } from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const loginForm = () => {

    const [formdata, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevdata) => ({
            ...prevdata,
            [event.target.name]: event.target.value
        }));



    }
    return (
        <>

            <form>
                <label>
                    <p>Email Address<sub>*</sub></p>
                    <input
                        required
                        type="text"
                        value={formdata.email}
                        onChange={changeHandler}
                        placeholder='Enter email id'
                        name="email"
                    ></input>
                </label>


                <label>
                    <p>Password<sub>*</sub></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formdata.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name="password"
                    >

                    </input>

                    <span onClick={() => setPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>

                    <Link>
                        <p>
                            Forgot Password
                        </p>

                    </Link>
                </label>

                <button>
                    Sign In
                </button>
            </form>






        </>
    )
}

export default loginForm;