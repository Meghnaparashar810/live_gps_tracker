import User from "../model/usermodel.js";

export const location = async (req, res) => {
    try {
        const { userId, latitude, longitude } = req.body;
        if (userId === undefined || latitude === undefined || longitude === undefined) {
            return res.status(400).json("All fields are required");
        }
        const user = await User.findOne({ userId });
        if (user) {
            user.latitude = latitude;
            user.longitude = longitude;
            await user.save();
            return res.status(200).json("Location updated successfully");
        }

        const newUser = new User({
            userId,
            latitude,
            longitude
        });
        await newUser.save();
        return res.status(201).json("Location added successfully");



    } catch (error) {
        console.log("❌ ERROR:", error);

        return res.status(500).json({
            message: "Error adding location",
            error: error.message
        });
    }
}


export const getLocation = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json("User not found");
        }
        return res.status(200).json({ latitude: user.latitude, longitude: user.longitude });
    } catch (error) {
        return res.status(500).json("Error fetching location");
    }
}




