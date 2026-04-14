import { redirect } from "next/navigation";

const PaymentSuccessPage = () => {
	redirect("/dashboard/my-appointments?status=payment_success");
};

export default PaymentSuccessPage;
