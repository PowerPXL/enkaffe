import ContentCard from "@/components/ContentCard";
import ContentBlock from "@/components/ContentBlock";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      
      <ContentBlock title="Bjud på en kopp kaffe - 15 kr ">
      Vi samarbetar med organisationer som hjälper människor i nöd. Din gåva går direkt till dem som behöver det mest. Tack för att du sprider värme.
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