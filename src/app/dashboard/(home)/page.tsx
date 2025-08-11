import Content from "./Content";

export default function page() {
  return (
    <main className="min-h-[100svh] flex items-center">
      <div className="container max-w-[1024px] mx-auto px-5 flex flex-col items-center">
        <Content />
      </div>
    </main>
  );
}
