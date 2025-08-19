import React, { useState } from 'react'
import img1 from '../../src/assets/images/two.jpg'

const Signup = () => {
    const [gender, setGender] = useState("")

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [birthday, setBirthday] = useState('')
    const [genderdata, setGenderdata] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function handlesubmit(e) {
        e.preventDefault();

        try {
            console.log("name :", name)
            console.log("location :", location)
            console.log("Date of birth :", birthday)
            console.log("Gender :", genderdata)
            console.log("Password :", password)
            console.log("Email :", email)
            console.log("Mobile :", phone)

        } catch (error) {
            console.log("error :", error)
        }
    }


    return (


        <div className=' w-screen h-screen  body'>
            <div className='flex items-center justify-center '>

                <div className=' w-[580px] h-[610px] border border-white rounded-xl' >
                    <div className='m-8'>
                        <h1 className='text-center text-2xl font-bold text-white'>WELCOME TO OUR WORLD!</h1>
                        <div className='flex justify-center'><img className='w-[400px] h-[px] py-9 ' src={img1} alt="img1" /></div>
                        <p className='text-center text-sm font-light text-slate-300'>We are introducing an exciting new update to the Welcome Page that brings a more personalized and engaging experience for users. The refreshed design will feature dynamic greetings based on the time of day, a quick snapshot of your profile, and an easy-access panel for your most-used tools. You’ll also be able to customize themes with light, dark, or custom color options, making the interface truly yours. Additionally, the page will showcase announcements and updates, along with smart suggestions tailored to your activity, ensuring a smoother and more interactive start every time you visit.</p>
                    </div>
                </div>


                <div className='flex items-center justify-center items-center py-6 '>
                    <form onSubmit={handlesubmit} action="" className='flex justify-center rounded-lg items-center flex-col p-10 gap-5 px-2 w-[580px] h-[610px] opacity-75 bg-black rounded-xl'>

                        <h1 className="text-2xl font-bold text-white mb-4 ">YOUR DETAILS</h1>


                        <div className='py-3'>
                            <label htmlFor="name" className='block text-white font-semibold mb-1'>NAME</label>
                            <input type="text" name="name" value={name} placeholder="Your Name" className='border rounded p-2 bg-white w-[250px] ' onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='flex py-3 gap-3'>
                            <div>
                                <label htmlFor="location" className='block text-white font-semibold mb-1'>LOCATION</label>
                                <input type="text" name="location" value={location} placeholder="Your Location" className='border rounded p-2 bg-white w-[250px] ' onChange={(e) => setLocation(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="Birthday" className=' block text-white font-semibold mb-1'>DATE OF BIRTH</label>
                                <input type="date" name="birthday" value={birthday} placeholder="MM/DD/YYYY" className='border rounded p-2 bg-white w-[250px] ' onChange={(e) => setBirthday(e.target.value)} />
                            </div>
                        </div>


                        <div className='flex py-3 gap-3'>
                            <div className=''><label htmlFor="" className=' block text-white font-semibold mb-1'>GENDER</label>
                                {/* <div className='flex gap-3 '>
                                <input type="button" placeholder="Male" name="Gender" value="Male" onClick={() => setGender("male")} className={` rounded-md p-2 w-[100px]  cursor-pointer ${gender === "male" ? "bg-blue-600 text-white border-2 border-white " : "bg-white text-black"}`} onChange={(e) => setGenderdata(e.target.value)} />


                                <input type="button" placeholder="female" name="Gender" value="female" onClick={() => setGender("female")} className={` rounded-md p-2 w-[100px] cursor-pointer ${gender === "female" ? "bg-pink-500 text-white border-2 border-white " : "bg-white text-black"}`} onChange={(e) => setGenderdata(e.target.value)} />
                            </div> */}

                                <select name="gender" id="Gender" value={genderdata} onChange={(e) => setGenderdata(e.target.value)} className='text-white bg-slate-700 border rounded p-2 w-[250px]'>
                                    <option value="" disabled className='bg-slate-700 text-gray-300'>Gender</option>
                                    <option value="male" className='text-white bg-slate-700'>Male</option>
                                    <option value="female" className='text-white bg-slate-700'>Female</option>

                                </select>
                            </div>

                            <div className=''>
                                <label htmlFor="password" className=' block text-white font-semibold mb-1'>PASSWORD</label>
                                <input type="password" name='password' value={password} placeholder="Create Password" className='border rounded p-2 bg-white w-[250px] ' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className='flex gap-3 py-4'>
                            <div>
                                <label htmlFor="" className='block text-white font-semibold mb-1'>EMAIL</label>
                                <input type="email" name="email" value={email} placeholder="Your Email" className='border rounded p-2 bg-white w-[250px] ' onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="" className='pl-8 block text-white font-semibold mb-1'>MOBILE</label>
                                <input type="number" name="phone" value={phone} placeholder="Your Phone Number" className='border rounded p-2 bg-white w-[250px] ' onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='bg-blue-500 px-6 py-2 rounded-md text-md hover:bg-blue-800 hover:text-white'>submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup