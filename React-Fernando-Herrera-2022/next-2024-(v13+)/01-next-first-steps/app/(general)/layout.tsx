import { Navbar } from "@/components";

/**
 *
 * @param (general)
 *
 * SI pones (general entre parentensis), le vas a indicar a next, que no queres que esa parte de la URL, y que sea un agrupador.
 *
 * @returns
 */

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
