import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const PaymentSuccessPage = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
	const autoRedirect = searchParams?.redirect !== "false";

	if (autoRedirect) {
		redirect("/dashboard/my-appointments?status=payment_success");
	}

	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
			<CheckCircle className="size-16 text-green-500" />
			<h1 className="text-2xl font-semibold">Payment Successful!</h1>
			<p className="text-muted-foreground">Your appointment has been confirmed.</p>
			<Button asChild>
				<Link href="/dashboard/my-appointments">View My Appointments</Link>
			</Button>
		</div>
	);
};

export default PaymentSuccessPage;
