import CreatedByCard from "@/Components/feedback/CreatedByCard";
import { CreatedByDetails } from "@/constant";

const CreatedBy = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-evenly max-lg:flex-col">
      {CreatedByDetails.map((card) => (
        <CreatedByCard
          key={card.id}
          name={card.name}
          nameWithId={card.nameWithId}
          classStudent={card.class}
          linkedin={card.linkedin}
        />
      ))}
    </div>
  );
};

export default CreatedBy;
