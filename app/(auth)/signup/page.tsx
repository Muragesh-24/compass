
import SignupPageContent from "@/app/components/user/Signuppagecontent";
import { Suspense } from "react";


export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading login...</div>}>
   <SignupPageContent/>
    </Suspense>
  );
}
