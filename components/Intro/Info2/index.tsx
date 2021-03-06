import Image from "next/image";

export default function Info2() {
	return (
		<div className="p-12 w-full min-h-screen flex flex-col md:flex-row">
			<div className="w-full md:w-[40rem] md:h-[60%] md:my-16">
				<h2 className="text-xl font-bold md:text-2xl">Jag fixar allt*, så att du kan fokusera på det som är viktigt för dig</h2>
				<p className="my-4">
					Jag fixar allt från att bygga sidan, till webbhotell och domän. Du kan därför fokusera på att utveckla ditt företag, eller tillbringa tiden som du vill. Allt du behöver göra är att
					framföra en idé, så gör jag den till verklighet.
				</p>
				<p className="text-gray-500">
					*Foton, text, och eventuell annan media bidrar du med, ifall det inte föreligger speciella omständigheter. Hör av dig för en mer detaljerad beskrivning.
				</p>
			</div>
			<div className="relative md:ml-auto md:mr-12 md:mt-[10vh] w-[80vw] h-[80vw] md:w-[60vh] md:h-[60vh]">
				<Image src="/Illustration.svg" layout="fill" alt="Dekorativ illustration" />
			</div>
		</div>
	);
}
