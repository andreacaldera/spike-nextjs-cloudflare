import Link from "next/link";

const getData = async () => {
  console.log("loading page one");
  const res = await fetch(
    "https://mocki.io/v1/85efaaa9-6411-4149-a21a-4fefbcfad2ea"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const data = await getData();
  return (
    <main>
      This is page one
      {JSON.stringify(data)}
      <Link href="/">Home</Link>
    </main>
  );
}
