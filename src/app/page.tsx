import Hero from "@/components/hero";
import Team from "@/components/team";

interface addDataToFirestoreProps {
  name: string
  email: string
  message: string
}
export default async function Home() {
  // async function addDataToFirestore({name, email, message}: addDataToFirestoreProps) {
  //   try {
  //     const docRef = await addDoc(collection(db, "messages"), {
  //       name,
  //       email,
  //       message,
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //     return  docRef;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Team />
      {/* <div className="flex flex-col justify-center items-center max-w-5xl mx-auto relative">
        <div className="sm:grid flex flex-col-reverse sm:grid-cols-2 justify-center items-center py-4">
          <LetterIcon className="w-full h-96" />
          <div className="space-y-4">
            <Image
              src={"/logo.avif"}
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto object-cover"
            />
            <h1 className="text-xl sm:text-4xl uppercase font-bold">
              Welcome correio Smart
            </h1>
            <p className="leading-relaxed">
              Correio Smart: Simplificando a maneira como você recebe suas
              cartas. Nosso sistema de notificação inteligente mantém você
              informado sobre cada correspondência importante, tornando a
              entrega de cartas mais eficiente e conveniente do que nunca.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
