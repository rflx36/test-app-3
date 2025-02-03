import ConnectDB from "../../../../lib/mongoose";
import User from "../../../../models/user";


export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await ConnectDB();

            const { name, email, age } = req.body;

            const existingUser = await User.findOne({ email });


            if (existingUser) {
                return res.status(400).json({ error: "Email already in use" });
            }

            const newUser = new User({ name, email, age });
            await newUser.save();


            res.status(201).json({ message: "User Created", user: newUser });
        }
        catch (err) {
            console.error("Error creating user:", err);
            res.status(500).json({ error: "Failed to create user" });
        }

    }
    else if (req.method === "GET"){
        try{
            await ConnectDB();
            const users = await User.find();
            return res.status(200).json({users});
        }
        catch (err){
            console.error("Error fetching users:", err);
            return res.status(500).json({error:"Failed to fetch users"});
        }
    }
    else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}