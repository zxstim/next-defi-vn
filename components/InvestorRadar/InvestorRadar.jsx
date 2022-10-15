import { useState, useReducer } from 'react';
import { useTranslation } from 'next-i18next';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

// export default function InvestorRadar() {
//     // eslint-disable-next-line
//     const { t, i18n } = useTranslation();
//     const [query, setQuery] = useState("")  
//     const mockData = {
//         "iradar": [
//             {
//                 "id": 1,
//                 "n": "Paradigm",
//                 "ty": "VC",
//                 "t": "7/1/2022, 7:00:56 AM"
//             },
//             {
//                 "id": 2,
//                 "n": "Coinbase Ventures",
//                 "ty": "VC",
//                 "t": "7/1/2022, 7:00:56 AM"
//             },
//         ]
//     }
    
//     const columnHelper = createColumnHelper()

//     const columns = [
//     columnHelper.accessor('firstName', {
//         cell: info => info.getValue(),
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor(row => row.lastName, {
//         id: 'lastName',
//         cell: info => <i>{info.getValue()}</i>,
//         header: () => <span>Last Name</span>,
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('age', {
//         header: () => 'Age',
//         cell: info => info.renderValue(),
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('visits', {
//         header: () => <span>Visits</span>,
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('status', {
//         header: 'Status',
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('progress', {
//         header: 'Profile Progress',
//         footer: info => info.column.id,
//     }),
//     ]

//     return (
//         <>
//             <h2 id="invest">{t('inv')}<button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
//             <p>🔗 uid: invest</p>
//             <a href="https://buidl.defi.vn/explain-pyhash#heading-investor-radar">{t('explain')}</a>
//             <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder={t('inv-search')} onChange={event => setQuery(event.target.value)}/></div>
//             <table>
//             <thead>
//                 <tr>         
//                     <th>{t('inv-t-1')}</th>
//                     <th>{t('inv-t-2')}</th>
//                     <th>{t('inv-t-3')}</th>
//                     <th>{t('inv-t-4')}</th>
//                     <th>{t('inv-t-5')}</th>
//                     <th>{t('inv-t-6')}</th>
//                     <th>{t('inv-t-7')}</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     // eslint-disable-next-line
//                     mockData.iradar.filter(function (signal) { 
//                         if (query === '') {
//                             return signal;
//                         } else if (signal.n.toLowerCase().includes(query.toLowerCase())) {
//                             return signal;
//                         }}).map((signal) => (
//                             <tr key={signal.id}>
//                                 <td>{signal.n}</td>
//                                 <td>{signal.ty}</td>
//                                 <td>{signal.dhr}</td>
//                                 <td>{signal.var}</td>
//                                 <td>{signal.bn}</td>
//                                 <td>{signal.score}</td>
//                                 <td>{signal.tier}</td>
//                             </tr>
//                         )
//                 )}
//             </tbody>
//             </table>
//         </>
//     )
// }


const defaultData  = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  
  const columnHelper = createColumnHelper()
  
  const columns = [
    columnHelper.accessor('firstName', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
      header: () => 'Age',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('visits', {
      header: () => <span>Visits</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      footer: info => info.column.id,
    }),
  ]
  
  export default function TestTable() {
    const [data, setData] = useState(() => [...defaultData])
    const rerender = useReducer(() => ({}), {})[1]
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </>
    )
  }