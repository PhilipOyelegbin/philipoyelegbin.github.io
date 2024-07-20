"use client";
import { useRouter } from "next/navigation";

export default function Logout() {
  const navigate = useRouter();

  const handleLogout = () => {
    navigate.push("/");
  };

  return (
    <section className='px-5 md:px-20 my-10 text-center'>
      <h4
        onClick={handleLogout}
        className='cursor-pointer ease-linear duration-300 hover:text-red-500'
      >
        Logout
      </h4>
    </section>
  );
}
