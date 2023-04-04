import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  // <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
  return (
      <Component {...pageProps} />
  );
}
