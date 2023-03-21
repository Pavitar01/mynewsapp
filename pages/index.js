import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navigation from "./Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
export default function Home() {
  return (
    <>
      <Navigation />
    </>
  );
}
