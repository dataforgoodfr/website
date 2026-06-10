export const metadata = {
  title: 'DataForGood',
  description: 'DataForGood - Association pour l\'impact social par la data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`min-h-screen overflow-x-hidden flex flex-col antialiased bg-[url("/images/bg-paper.jpg")] bg-fixed bg-cover bg-center bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}