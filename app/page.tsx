import ContentCard from "@/components/ContentCard";
import ContentBlock from "@/components/ContentBlock";
import Button from "@/components/button";
import { CupSoda } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      
      <ContentBlock title="Ge bort en kopp kaffe - 15 kr ">
      Vi samarbetar med organisationer som hjälper människor i nöd. Din gåva går direkt till dem som behöver det mest. Tack för att du sprider värme.
      <Button variant="primary" className="my-8 mx-auto">
        <CupSoda className="w-4 h-4" />
        Kaffe 15 ;-
      </Button>
      </ContentBlock>
      
            <ContentCard
        blockTitle="Så här funkar det"
        items={[
          {
            title: "Swish 15 kr",
            text: "Swish 15 kr till 123 456 789",
          },
          {
            title: "En kaffe",
            text: "En kopp kaffe från pressbyrån",
          },
          {
            title: "Leverera",
            text: "Personen får kaffe!",
          },
          
        ]}
      />

    </main>
  );
}