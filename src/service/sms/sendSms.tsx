import axios from "axios";

const NEXT_PUBLIC_TRACK = process.env.NEXT_PUBLIC_TRACK;

export const sendSms = async (data: {
  phoneNumber: string;
  customerId: number;
}): Promise<string> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sms/send_verification_code?countryCode=82&phoneNumber=${NEXT_PUBLIC_TRACK === "prod" ? data.phoneNumber : "01063487983"}&userId=${data.customerId}`
    );
    console.log("응답:", response);
    return "OK";
  } catch (error) {
    console.error("에러 발생:", error);
    return "ERROR";
  }
};
