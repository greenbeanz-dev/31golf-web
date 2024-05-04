interface RepeatProps {
  repeat: number;
  children: React.ReactNode;
}

const Repeat = ({ repeat, children }: RepeatProps) => {
  return (
    <>
      {new Array(repeat).fill(0).map((_, idx) => {
        return <> {children} </>;
      })}
    </>
  );
};

export default Repeat;
