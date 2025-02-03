import { useEffect, useState } from "react";


export default function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data.users);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="w-[100vw] h-[100vh] grid place-content-center">
            <div className="w-[900px] h-[500px] border border-grey-800 overflow-y-scroll">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(users) &&
                            users.map((users,i)=> (
                                <tr key={users._id} className="hover">
                                    <th>
                                        <input type="checkbox" className="checkbox"></input>
                                    </th>
                                    <th>{i+1}</th>
                                    <th>{users._id}</th>
                                    <th>{users.name}</th>
                                    <th>{users.email}</th>
                                    <th>{users.age}</th>
                                </tr>
                            ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )

}