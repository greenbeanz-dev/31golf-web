import { P, match } from "ts-pattern";

export const conditionWithStartDateAndEndDate = (
  start: Date | string | undefined | null,
  end: Date | string | undefined | null
) => {
  const time = {
    start,
    end,
  };
  const contintion = match(time)
    .with(
      {
        start: P.when((t) => t === undefined),
        end: P.when((t) => t === undefined),
      },
      () => {
        return undefined;
      }
    )
    .with(
      {
        start: P.when((t) => t !== undefined),
        end: P.when((t) => t === undefined),
      },
      () => {
        return {
          gte: new Date(time.start!).toISOString(),
        };
      }
    )
    .with(
      {
        start: P.when((t) => t === undefined),
        end: P.when((t) => t !== undefined),
      },
      () => {
        return {
          lte: new Date(time.end!).toISOString(),
        };
      }
    )
    .with(
      {
        start: P.when((t) => t !== undefined),
        end: P.when((t) => t !== undefined),
      },
      () => {
        return {
          gte: new Date(time.start!).toISOString(),
          lte: new Date(time.end!).toISOString(),
        };
      }
    )
    .otherwise(() => undefined);

  return contintion;
};
