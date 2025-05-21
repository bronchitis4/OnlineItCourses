
class ProfileController {
    getUserProfile = async (req, res) => {
        const user = req.user;
        console.log(user);

        return res.status(200).json({
            statusCode: 200,
            message:"Дані користувача отримано",
            data: user
        });
    }
}

export default ProfileController;