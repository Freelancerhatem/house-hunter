import { useForm } from "react-hook-form";
import UseAxiosLoader from "../../Hooks/AxiosLoader/UseAxiosLoader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Signin = () => {
    const axiosLoader = UseAxiosLoader();
    const [userInfo,setUserInfo] = useState({});
    const[error,setError] = useState('');
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()
    
    const submit = async(data)=>{
        
        reset()
        axiosLoader.get(`/LoadUserInfo?email=${data.email}&password=${data.password}`)
        .then(res=>{
            console.log(res.data);
            setUserInfo(res.data)
        })
        
        axiosLoader.post('/jwt',data,{
            withCredentials:true
        })
        .then(res=>console.log(res.data))


    }

    console.log(Object.keys(userInfo).length)
    
    return (
        <div className=" mx-auto max-w-md border  border-gray-200 rounded-lg shadow-lg p-6 bg-white  hover:shadow-xl  ">
            <div className="flex flex-col p-6 space-y-1">
                <h3 className="tracking-tight text-2xl font-bold text-gray-900 ">Sign in</h3>
                <p className="text-sm text-gray-500 ">Please fill in the form to signin your account.</p>
            </div>

            <div className="p-6">
                <form onSubmit={handleSubmit(submit)}  className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="email">
                            Email
                        </label>
                        <input {...register('email',{required:true})} className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"  placeholder="Enter your email" type="email"
                        />

                        {errors.email && <span className="text-red-600">enter email address</span>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="message">
                            Password
                        </label>
                        <input
                        
                            {...register("password", {
                                required: true,
                                
                            })}

                            className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"  placeholder="Enter your email" type="password" />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">Password is required</p>
                        )}
                        {
                            <span className="text-red-400">{error}</span>
                        }
                        
                        
                    </div>

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;