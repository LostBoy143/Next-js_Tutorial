export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Product details</h1>
      <h2>product no: {productId}</h2>
    </>
  );
}
