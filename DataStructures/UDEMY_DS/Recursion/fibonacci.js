function displayFibSeries(n){
    let series = [0,1]
    if(n<=1){
      return n;
    }
    
    for(let i=2;i<=n;i++){
      //series.push(i)
      const sum = series[i-1] +series[i-2]
      //console.log(sum)
      series.push(sum)
    }
    
    return series.toString()
    
  }
  
  console.log(displayFibSeries(10))

  function displayFibSeriesRecur(n){
    let series = [0,1]
    if(n<=1){
      return n;
    }
    
    // for(let i=2;i<=n;i++){
    //   //series.push(i)
    //   const sum = series[i-1] +series[i-2]
    //   //console.log(sum)
    //   series.push(sum)
    // }
    const sum = displayFibSeriesRecur()

    
    return series.toString()
    
  }