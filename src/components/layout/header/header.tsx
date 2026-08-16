export interface HeaderProps {
  environment: "development" | "production" | "test";
}

export const Header = ({ environment }: HeaderProps) => {
  return (
    <header>
      <h1>Next.js Mokuhan</h1>
      <p>
        Environment: <code>{environment}</code>
      </p>
      <hr />
    </header>
  );
};
