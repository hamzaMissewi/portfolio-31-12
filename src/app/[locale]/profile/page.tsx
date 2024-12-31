import About from "@/components/About";
import Experience from "@/components/Experience";

export const revalidate = 3600; // revalidate every hour

export default function ProfilePage() {
  return (
    <div className={"flex flex-col items-center"}>
      <span>About me</span>
      <div className="flex h-screen items-center justify-center">
        <About />
        <Experience />
      </div>
    </div>
  );
}
