export interface HeaderProps {
  environment: "development" | "production" | "test";
}

export const Header = ({ environment }: HeaderProps) => {
  return (
    <header>
      <h1>Mokuhan Next.js{` (${environment})`}</h1>
    </header>
  );
};
