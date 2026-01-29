import { HomePage } from "@/components/page/home-page";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

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
