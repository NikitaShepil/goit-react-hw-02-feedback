

export function Statistic ({Good,Neutral,Bad}){


return(
<div>
    
    <ul>
        <li>Good:{Good}</li>
        <li>Neatral:{Neutral}</li>
        <li>Bad:{Bad}</li>
        <li>Total:{Good + Neutral + Bad}</li>
        <li>Positive feedback:{Math.round((Good / (Good + Neutral + Bad)) * 100)}%</li>
    </ul>
</div>)
    }


