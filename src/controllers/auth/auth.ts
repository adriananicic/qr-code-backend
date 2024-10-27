import { Request, Response } from "express";
import { getAccessToken } from "../../utils/auth0FetchToken";

const authRoute = async (req: Request, res: Response) => {
  try {
    const accessToken = await getAccessToken();
    res.status(200).json({ success: true, accessToken });
  } catch (error) {
    console.error("Error fetching access token:", error);
    res
      .status(500)
      .json({ success: false, message: "Could not retrieve access token" });
  }
};

export default authRoute;
