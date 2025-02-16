export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000); // Simulating a delay for loading data
  });

  return <h1>My blog..</h1>;
}
