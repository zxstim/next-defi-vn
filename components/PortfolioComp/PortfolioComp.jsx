import { PieChart, Pie, Tooltip, Cell } from 'recharts';


export default function PortfolioComp() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];    
  const low = [
        {
          "name": "ETH",
          "value": 18
        },
        {
          "name": "BTC",
          "value": 18
        },
        {
          "name": "SOL",
          "value": 4
        },
        {
          "name": "USDC",
          "value": 60
        }
    ];

  const medium = [
        {
          "name": "ETH",
          "value": 20
        },
        {
          "name": "BTC",
          "value": 20
        },
        {
          "name": "SOL",
          "value": 10
        },
        {
          "name": "USDC",
          "value": 50
        }
    ];

  const high = [
        {
          "name": "ETH",
          "value": 30
        },
        {
          "name": "BTC",
          "value": 25
        },
        {
          "name": "SOL",
          "value": 15
        },
        {
          "name": "USDC",
          "value": 30
        }
    ];

  const ultra = [
      {
        "name": "ETH",
        "value": 35
      },
      {
        "name": "BTC",
        "value": 35
      },
      {
        "name": "SOL",
        "value": 20
      },
      {
        "name": "USDC",
        "value": 10
      }
  ];
  
    return (
        <>
          <h2 id="pfc">##  Portfolio Composition <button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
          <p>🔗 uid: pfc</p>
          <a href="https://buidl.defi.vn/explain-pyhash#heading-portfolio-composition">🔑 Explain</a>
          <div  style={{ 
            maxWidth: "100%",
            height: "450px",
            overflowX: "auto" 
            }}>
            <PieChart width={450} height={400}>
                <Pie data={low} dataKey="value" isAnimationActive={false} nameKey="name" cx="20%" cy="30%" outerRadius={60} fill="var(--color-accent-fg)" label> 
                  {low.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Pie data={medium} dataKey="value" isAnimationActive={false} nameKey="name" cx="80%" cy="30%" outerRadius={60} fill="var(--color-accent-fg)" label>
                  {medium.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Pie data={high} dataKey="value" isAnimationActive={false} nameKey="name" cx="20%" cy="80%" outerRadius={60} fill="var(--color-accent-fg)" label>
                  {high.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Pie data={ultra} dataKey="value" isAnimationActive={false} nameKey="name" cx="80%" cy="80%" outerRadius={60} fill="var(--color-accent-fg)" label>
                  {ultra.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
            </PieChart>
          </div>
        </>
    )
}

      
                         
