export interface HeaderProps {
  environment: "development" | "production" | "test";
}

export const Header = ({ environment }: HeaderProps) => {
  return (
    <header>
      <h1>Next.js Mokuhan{` (${environment})`}</h1>
    </header>
  );
};
