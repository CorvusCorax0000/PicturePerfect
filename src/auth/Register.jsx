import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex h-[140vh]'>
        <div className="w-1/2 h-full bg-[#dedede]"></div>
        <div className="w-1/2 bg-white absolute right-0 h-full text-center space-y-20">
            <img src="LoginLogo.png" alt="" className='inline-block mt-[6rem]'/>
            <div className='flex justify-center font-inter'>
                <form action="" className='space-y-8 items-center'>
                    <div className='text-left space-y-2'>
                        <label htmlFor="email" className='block text-xl'>Họ và tên</label>
                        <input type="text" name="" id="" required className="bg-[#d9d9d9] w-80 h-12 pl-3"/>
                    </div>
                    <div className='text-left space-y-2'>
                        <label htmlFor="email" className='block text-xl'>Số điện thoại</label>
                        <input type="text" name="" id="" required className="bg-[#d9d9d9] w-80 h-12 pl-3"/>
                    </div>
                    <div className='text-left space-y-2'>
                        <label htmlFor="email" className='block text-xl'>Email</label>
                        <input type="text" name="" id="" required className="bg-[#d9d9d9] w-80 h-12 pl-3"/>
                    </div>
                    <div className='text-left space-y-2 w-80'>
                        <label htmlFor="email" className='block text-xl'>Ngày sinh</label>
                        <div className='space-x-4'>
                            <input type="text" name="" id="" required className="bg-[#d9d9d9] w-1/4 h-12 pl-3"/>
                            <span>/</span>
                            <input type="text" name="" id="" required className="bg-[#d9d9d9] w-1/4 h-12 pl-3"/>
                            <span>/</span>
                            <input type="text" name="" id="" required className="bg-[#d9d9d9] w-1/4 h-12 pl-3"/>
                        </div>
                    </div>
                    <div className='text-left space-y-2 space-x-12'>
                        <label htmlFor="checkbox1" className='text-xl'>
                            <input type="checkbox" id="checkbox1" name="checkbox1"/>  Nam
                        </label>
                        <label htmlFor="checkbox2" className='text-xl'>
                            <input type="checkbox" id="checkbox2" name="checkbox2" /> Nữ
                        </label>
                    </div>
                    <div className='text-left space-y-2'>
                        <label htmlFor="email" className='block text-xl'>Mật khẩu</label>
                        <input type="password" name="" id="" placeholder='Tối thiểu 8 kí tự và có chứa !, @, #, $, %' required className="bg-[#d9d9d9] w-80 h-12 pl-3"/>
                    </div>
                    <div className='text-left space-y-2'>
                        <label htmlFor="email" className='block text-xl'>Nhập lại mật khẩu</label>
                        <input type="password" name="" id="" required className="bg-[#d9d9d9] w-80 h-12 pl-3"/>
                    </div>
                    <div>
                    <button type='submit' className='font-inter text-xl bg-[#5f5f5f] text-white w-64 h-14'>
                        Đăng ký
                    </button>
                </div>
                </form>
            </div>
            <hr className="border-black border-t-2 w-96 mx-auto"/>
            <div className='mt-[2rem] space-y-2'>
                <h1 className='font-inter text-xl'>Đã có tài khoản?</h1>
                <div>
                    <Link to="/login" className='font-inter text-xl  bg-[#5f5f5f] text-white w-64 h-14 inline-flex items-center justify-center'>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Register