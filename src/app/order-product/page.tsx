"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log(
      "Congrats! Your order has been placed..."
    );

    setTimeout(() => {
      router.push("/");
    }, 3000);
  };
  return (
    <>
      <h1 className="text-2xl font-semibold text-center mt-[100px] mb-[20px]">
        Order Product
      </h1>
      <button
        onClick={handleClick}
        className="p-3 px-6 ml-[40%] rounded-lg bg-blue-500 text-white active:bg-green-500"
      >
        Place Order
      </button>
    </>
  );
}
