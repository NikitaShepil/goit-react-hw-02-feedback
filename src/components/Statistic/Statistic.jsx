

export function Statistic ({Good,Neutral,Bad,Total,PositiveFeedback}){


return(
<div>
    <h2>Statisic</h2>
    <ul>
        <li>Good:{Good}</li>
        <li>Neatral:{Neutral}</li>
        <li>Bad:{Bad}</li>
        <li>Total:{Total}</li>
        <li>Positive feedback:{PositiveFeedback}%</li>
    </ul>
</div>)
    }


