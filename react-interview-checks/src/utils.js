function myExpect(expectParam) {
    const toBeFunc = (toBeParam, not = false) => {
        const result = Object.is(toBeParam, expectParam)
        not ? !result : result
    }


    return {
        toBe: toBeFunc,
        not: {
            toBe: (toBeParam) => toBeFunc(toBeParam, true)
        }
    }
}

