interface INumberWithLogs {
  x: number;
  logs: string[];
}

function addone(x: number): INumberWithLogs {
  const result = x + 1;
  return {
    x: result,
    logs: [`Added one to ${x} to beacome ${result}`],
  };
}

function square(x: number): INumberWithLogs {
  const result = Math.pow(x, 2);
  return {
    x: result,
    logs: [`squared  ${x} to beacome ${result}`],
  };
}

function WithLogs(
  data: INumberWithLogs,
  transform: (_: number) => INumberWithLogs
): INumberWithLogs {
  const result = transform(data.x);
  return {
    x: result.x,
    logs: [...data.logs, ...result.logs],
  };
}
