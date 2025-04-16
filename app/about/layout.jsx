import Footer from "@/components/Footer";

export const metadata = {
  title: "Steven | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
