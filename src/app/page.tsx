import Image from "next/image";
import ContactForm from "./components/contacForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex items-center bg-cover bg-center" style={{backgroundImage:`url("/images/01.jpg")`, width: '50%', height: '50vh'}}>
      </div>
      
      <h1 className="text-lg font-bold">Hola</h1>
      <ContactForm/> 
    </main>
  );
}