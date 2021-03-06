export const removeDuplicates = (originalArray: Array<any>, prop: any) => {
  var newArray = [] as any
  var lookupObject = {} as any

  originalArray = originalArray.map((item: any) => {
    return {
      ...item,
      name: item.name + item.size,
    }
  })

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i]
  }

  for (i in lookupObject) {
    const FilteredArray = originalArray.filter((orderItem: any) => {
      return orderItem.name === lookupObject[i].name
    })

    const price = FilteredArray.reduce((prev: any, current: any) => {
      return prev + +current.price
    }, 0)

    const count = FilteredArray.reduce((prev: any, current: any) => {
      return prev + +1
    }, 0)

    newArray.push({
      ...lookupObject[i],
      price: price,
      count: count,
    })
  }
  const CleanedArray = newArray.map((item: any) => {
    return {
      ...item,
      name: item.name.replace(item.size, ""),
    }
  })

  return CleanedArray
}
