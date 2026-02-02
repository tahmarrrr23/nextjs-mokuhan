import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomePage } from "@/components/home-page";

export default function Home() {
  const environment = process.env.NODE_ENV;

  return (
    <>
      <Header environment={environment} />
      <HomePage />
      <Footer />
    </>
  );
}
