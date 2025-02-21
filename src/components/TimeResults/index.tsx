import { CompleteModel } from "../../model/Complete";
import WindowCard from "../../styles/components/Windows/WindowCard";
import { TimeContainer, TimerCard } from "./style";

interface TimeProps {
  complete: Array<CompleteModel>;
}

const TimeResults = ({ complete }: TimeProps) => {
  return (
    <TimeContainer>
      {complete.map((item: any, index: any) => {
        return (
          <WindowCard
            key={index}
            height={"85px"}
            width={"100%"}
            title={"Level " + item.level}
          >
            <div>
              Finished in: <TimerCard>{item.timer}</TimerCard>
            </div>
            <div>{item.shape}</div>
          </WindowCard>
        );
      })}
    </TimeContainer>
  );
};

export default TimeResults;
