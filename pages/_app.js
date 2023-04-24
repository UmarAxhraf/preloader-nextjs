import "@/styles/globals.css";
import LoadingScreen from "../components/loadingscreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);
}

export default function App({ Component, pageProps }) {
  return <>{!loading ? <Component {...pageProps} /> : <LoadingScreen />}</>;
}
