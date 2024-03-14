import { useSelector } from "react-redux"

const StatsCalculator = () => {
    const stats = useSelector(state => state.stats)
    const statsKeys = Object.keys(stats || {})
    return <div>
        <h1>Stats Calculator</h1>
        {
            statsKeys.map(statKey => <div>
                <div>
                    <span>{statKey}:  </span>
                    <span> <b>{stats[statKey]}</b></span>
                </div>
            </div>)
        }
    </div>


}

export default StatsCalculator