import { HomePage } from "@/components/page/home-page";
import { Header } from "@/components/ui/header";

export default function Home() {
  const environment = process.env.NODE_ENV;

  return (
    <>
      <Header environment={environment} />
      <HomePage />
    </>
  );
}
