import Icons from "@/app/_assets/icons";
import Card from "./card";

export default function Services() {
  return (
    <section className="pb-[140px]">
      <div className="container max-w-[973px]">
        <div className="grid grid-cols-3 justify-items-center gap-[88px]">
          <Card
            icon={Icons.ic_delivery}
            title="FREE AND FAST DELIVERY"
            description="Free delivery for all orders over $140"
          />
          <Card
            icon={Icons.ic_help}
            title="24/7 CUSTOMER SERVICE"
            description="Friendly 24/7 customer support"
          />
          <Card
            icon={Icons.ic_guarantee}
            title="MONEY BACK GUARANTEE"
            description="We reurn money within 30 days"
          />
        </div>
      </div>
    </section>
  );
}
