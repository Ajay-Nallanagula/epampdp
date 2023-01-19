const arr = [
    {
        name: 'Aj',
        hasChildren: true,
        children: [
            {
                name: 'p',
                hasChildren: true,
                children: [
                    {
                        name: 'tt',
                        hasChildren: true,
                        children: [
                            {
                                name: 'lb',
                                hasChildren: false,
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Vj',
        hasChildren: true,
        children: [
            {
                name: 'p',
                hasChildren: true,
                children: [
                    {
                        name: 'tt',
                        hasChildren: true,
                        children: [
                            {
                                name: 'lb',
                                hasChildren: false,
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const flatten = (arr) => {
    return arr.reduce((acc, { children, hasChildren, ...rest }) => {
        acc.push(rest)
        if (hasChildren) {
            acc.push(...flatten(children))
        }
        return acc
    }, [])
}


// const flatten = data => {
//     return data.reduce((item, { children,hasChildren, ...rest}) => {
//       item.push(rest)
//       if (hasChildren) item.push(...flatten(children));
//       return item;
//     }, [])
//   }

const arrMod = flatten(arr)
console.log(flattenCount(arr))
