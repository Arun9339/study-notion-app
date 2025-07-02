import React, { useState } from 'react'
import { CgPassword } from 'react-icons/cg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const SignupForm = () => {
    const [formData, setFromData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })


    const [showPassword, setShowPassword] = useState(false);


    return (
        <div>


            <div>
                <button>Student</button>
                <button>Instructor</button>

            </div>

            <form>
                <div>
                    <label>
                        <p>First name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder='Enter First Name'>
                            value={formData.firstName}
                        </input>
                    </label>




                    <label>
                        <p>Last name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder='Enter Last name'>
                            value={formData.lastName}
                        </input>
                    </label>

                </div>
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name="email"
                        onChange={changeHandler}
                        placeholder='Enter Email Address'>
                        value={formData.email}
                    </input>
                </label>


                <div>




                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                           type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password}>
                        </input>
                        <span onClick={() => setPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>



                       <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                           type={showPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.confirmPassword}>
                        </input>
                        <span onClick={() => setPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>


                </div>



<div>
    <button>
        Create Account
    </button>
</div>

            </form>
        </div>
    )
}

export default SignupForm;