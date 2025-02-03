import { useState } from "react";


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, age }),
        });


        const data = await response.json();

        if (data.error === "Email already in use"){
            alert("Email already in use");
        }
        else if (data.message === "User created") {
            alert("User created successfully!");
        }
        else {
            alert("Failed to create user");
        }

    }


    return (
        <>
            <div className="w-60 mt-40  border flex pt-1 flex-col items-center border-gray-800 text-white h-96 rounded-lg">

                <h1 className="font-medium text-black py-2">Register</h1>
                <form onSubmit={handleSubmit} className="text-center h-full justify-between flex flex-col items-center">
                    <div className="">

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className=" p-2 mb-2 outline-none rounded-md bg-gray-100 text-black  border-gray-500 border"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className=" p-2 mb-2 outline-none rounded-md bg-gray-100 text-black  border-gray-500 border"

                        />
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            className=" p-2 mb-2 outline-none rounded-md bg-gray-100 text-black  border-gray-500 border"

                        />
                    </div>
                    <button className="btn w-[calc(100%-24px)] mb-4" type="submit"> Register</button>
                </form>
            </div>
        </>
    )

}