import React from 'react'

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#dedede]"></div>
      <div className="w-1/2 bg-white absolute right-0 h-screen text-center space-y-20">
        <img src="LoginLogo.png" alt="Login logo" className="inline-block mt-[6rem]"/>
        <div className='flex justify-center'>
            <form action="" className='space-y-8'>
                <div className='text-left space-y-2'>
                    <label htmlFor="email" className='block font-inter text-xl'>Email</label>
                    <input type="text" name="" id="" required className="bg-[#d9d9d9] w-80 h-12"/>
                </div>
                <div className='text-left space-y-2'>
                    <label htmlFor="email" className='block font-inter text-xl'>Mật khẩu</label>
                    <input type="text" name="" id="" required className="bg-[#d9d9d9] w-80 h-12"/>
                </div>
                <div>
                    <button type='submit' className='font-inter text-xl bg-[#5f5f5f] text-white w-64 h-14'>
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
        <hr className="border-black  border-t-2 w-96 mx-auto"/>
        <div className='mt-[2rem] space-y-2'>
            <h1 className='font-inter text-xl'>Chưa có tài khoản?</h1>
            <div>
                <a href='/#' className='font-inter text-xl  bg-[#5f5f5f] text-white w-64 h-14 inline-flex items-center justify-center'>
                    Đăng ký
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login