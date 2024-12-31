"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      {/*<p>*/}
      {/*  Oops! The page you're looking for doesn't exist. Redirecting to the home*/}
      {/*  page soon...*/}
      {/*</p>*/}
      <h4 className="mt-10 font-semibold">Something went wrong!</h4>
    </div>
  );
}

export default NotFound;
