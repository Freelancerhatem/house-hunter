import { useForm } from "react-hook-form";
import UseAxiosLoader from "../../Hooks/AxiosLoader/UseAxiosLoader";
import { Link } from "react-router-dom";


const Signup = () => {
    const axiosLoader = UseAxiosLoader()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const submit = async(data)=>{
        console.log(data);
        reset()
        axiosLoader.post('/saveUserInfo',data)
        .then(res=>{
            console.log(res.data)
        })

    }
    return (
        <div className=" mx-auto max-w-md border  border-gray-200 rounded-lg shadow-lg p-6 bg-white  hover:shadow-xl  ">
            <div className="flex flex-col p-6 space-y-1">
                <h3 className="tracking-tight text-2xl font-bold text-gray-900 ">Sign Up</h3>
                <p className="text-sm text-gray-500 ">Please fill in the form to create an account.</p>
            </div>

            <div className="p-6">
                <form onSubmit={handleSubmit(submit)}  className="space-y-4">
                    <div className="">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="first-name">
                                Name
                            </label>
                            <input {...register('name',{required:true})} className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"  placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="last-name">
                                Mobile
                            </label>
                            <input {...register('number',{required:true})} className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md" id="last-name" placeholder="Enter your last name" />
                        </div>
                    </div>
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
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            })}

                            className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"  placeholder="Enter your email" type="password" />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600">Password must be 6 characters</p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-600">Password must be less than 20 characters</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600">
                                Password must have one Uppercase one lower case, one number and one
                                special character.
                            </p>
                        )}
                    </div>

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">Sign up</button>
                </form>
                Have an account? <Link to={'/signin'}>Signin</Link>
            </div>
        </div>


    );
};

export default Signup;