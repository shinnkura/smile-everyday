import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 className="head-text text-left bg-yellow-500">Home</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
