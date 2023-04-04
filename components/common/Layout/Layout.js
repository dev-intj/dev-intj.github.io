export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <h1>React template project @averageDev</h1>
      <main>{children}</main>
    </div>
  );
}
