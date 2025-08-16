import React from 'react'

function SignupPage() {
  return (
    <div>
        <form className='max-w-[40%] mx-auto mt-[3rem] px-4 pt-8 pb-15 border-red-500 border-solid border-2 font-sans'>
        <h1 className='text-center text-3xl font-serif mb-7'>Create Account</h1>
        <label className='label'>Name</label>
        <input type="text" value="" placeholder='Full name' required className='input-field'/>
        <label className='label'>Username</label>
        <input type="text" value="" placeholder="Username" required className='input-field'/>
        <label className='label'>Email</label>
        <input type="email" value="" placeholder="Email" required className='input-field'/>
        <label className='label'>Password</label>
        <input type="password" value="" placeholder="Password" min="6" max="12" required className='input-field'/>
        <div className='flex justify-center items-center m-[1rem]'>
            <button type="submit" className='w-[30%] bg-blue-500 py-3 text-white rounded-4xl hover:bg-blue-700'>Sign Up</button>
        </div>

        <div className='flex justify-center items-center gap-3 my-8'>
            <hr className='w-50 border-gray-300'/>
            <span>Or</span>
            <hr className='w-50 border-gray-300'/>
        </div>

        <div className='social-media-btn'>
            <button type="button"><img src="/src/assets/facebook.png" alt="facebook-logo" className='social-media-logo'/>Sign up with Email</button>
            <button type="button"><img src="/src/assets/New-Google-Logo.jpg" alt="google-logo" className='social-media-logo'/>Sign up with Facebook</button>
            <button type="button"><img src="/src/assets/Apple.png" alt="apple-logo" className='w-8 mr-3'/>Sign up with Apple</button>
        </div>

        <p className='mt-5 text-center'>Already have an account? <span className='text-blue-500 cursor-pointer hover:underline'>Login</span></p>

    </form>
    </div>
  )
}

export default SignupPage