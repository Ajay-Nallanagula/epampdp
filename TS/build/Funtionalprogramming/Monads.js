function addone(x) {
    const result = x + 1;
    return {
        x: result,
        logs: [`Added one to ${x} to beacome ${result}`],
    };
}
function square(x) {
    const result = Math.pow(x, 2);
    return {
        x: result,
        logs: [`squared  ${x} to beacome ${result}`],
    };
}
function WithLogs(data, transform) {
    const result = transform(data.x);
    return {
        x: result.x,
        logs: [...data.logs, ...result.logs],
    };
}
