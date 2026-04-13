"use server";

import { httpClient } from "@/lib/axios/httpClient";

export const getDoctors = async () => {
	try {
		const doctors = await httpClient.get("/doctors");
		return doctors;
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : "Failed to fetch doctors";
		throw new Error(message);
	}
};
