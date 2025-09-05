import Generation, { IProps as IGeneration } from "./Generation";

interface IProps {
  generations: IGeneration[];
}

export default function Generations({ generations }: IProps) {
  return (
    <div className="mt-16 w-full max-w-[850px] space-y-6">
      {[...generations].reverse().map((generation, index) => {
        return (
          <Generation
            key={index}
            title={`Generation #${generations.length - index}`}
            {...generation}
          />
        );
      })}
    </div>
  );
}
