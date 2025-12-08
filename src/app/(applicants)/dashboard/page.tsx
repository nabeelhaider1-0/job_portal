import { getCurrentUser } from "@/features/auth/server/auth.queries";
import { redirect } from "next/navigation";
import React from "react";

const ApplicantDashboard = async () => {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === "applicant") return redirect("/dashboard");
    if (user.role === "employer") return redirect("/employer-dashboard");
  } else {
    return redirect("/login");
  }
  return (
    <div>
      <h1>Hello Applicant Dashboard</h1>
    </div>
  );
};

export default ApplicantDashboard;
