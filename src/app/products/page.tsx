import Link from "next/link";
export default function ProductList() {
  return (
    <>
      <h1>Products we offer :-</h1>
      <h2>
        <Link href="/products/1">product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2" replace>
          product 2
        </Link>
      </h2>
      <h2>
        <Link href="/products/3">product 3</Link>
      </h2>
      <h2>
        <Link href="/products/4">product 4</Link>
      </h2>
    </>
  );
}
