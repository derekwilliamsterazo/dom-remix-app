import React, { ReactNode } from 'react';
import './table.css'

function isOdd(n:number) {
    return Math.abs(n % 2) == 1;
 }

const TableHead = ({...props}) => {
    return (
        <th className='table-head text-head5 font-bold px-2 py-1 text-left' {...props}></th>
    )
}

const TableRow = ({...props}) => {
    return (
        <tr className='table-row' {...props}></tr>
    )
}

const TableCell = ({...props}) => {
    return (
        <td className='px-px py-px'{...props}></td>
    )
}

const TableCellInner = ({...props}) => {
    return (
        <div className='px-1 py-1'{...props}></div>
    )
}


const Columns = [
    {id:'0a', label:'Title'},
    {id:'1a', label:'Executive Summary'},
    {id:'2a', label:'Data Sources'},
    {id:'3a', label:'Contact'},
]

const Quantums = [
    {
        id: "0b",
        title: "Fuel Price",
        executiveSummary: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",        
        dataSources: [{id:'0e', title:'PI'},{id:'1e', title:'Hadoop'}],
        contact:{
            id:"0c",
            name: "Byrann Pilpovic",
            email:"bPilpovic@dominion.com",
            imgUrl:'https://i.pravatar.cc/54'
        },        
        createdDate: "2023-04-01T15:02:42Z",
        updatedDate: "2023-11-11T05:02:24Z",
      },
      {
        id: "1b",
        title: "Smart Meter",
        executiveSummary: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",        
        dataSources: [{id:'0f', title:'Disturb'},{id:'1f', title:'Hadoop'}],
        contact:{
            id:"1c",
            name: "Lori Southerton",
            email:"lSoutherton@dominion.com"
        },        
        createdDate: "2023-04-01T15:02:42Z",
        updatedDate: "2023-11-11T05:02:24Z",
        
      },
      {
        id: "2b",
        title: "Fuel Price",
        executiveSummary: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",        
        dataSources: [{id:'0', title:'PI'},{id:'1', title:'Hadoop'}],
        contact:{
            id:"2c",
            name: "Byrann Pilpovic",
            email:"bPilpovic@dominion.com"
        },        
        createdDate: "2023-04-01T15:02:42Z",
        updatedDate: "2023-11-11T05:02:24Z",
      }

]

interface User {
    id: string; 
    name: string;
    email:string;
    imgUrl?:string    
}

interface columnHead {
    id: string; 
    label: string;     
}

interface dataSource {
    id: string; 
    title: string;    
}

interface quantum {
    id: string; 
    title: string;
    executiveSummary:string;
    dataSources:Array<dataSource>;
    contact:User;
    createdDate:string;
    updatedDate:string;    
}

export interface TableProps {
    columnHeadings?:Array<columnHead>;
    data?:Array<quantum> ;    
}
    

export const Table = ({ data=Quantums, columnHeadings=Columns, ...props }: TableProps) => {
    
    
    return (
         <table className='table-base font-sans text-sm w-full rounded-lg overflow-hidden  ' {...props}>
            <thead>
                <TableRow>
                    { columnHeadings.map((columnHead, index) => (                    
                        <TableHead key={index}>
                            <TableCellInner >
                                {columnHead.label}
                            </TableCellInner>                            
                        </TableHead>
                    ))}
                </TableRow>
            </thead>

            <tbody>
                { data.map((dataItem, index) => ( 
                    
                    <TableRow className={isOdd(index) ? 'row-odd bg-white':'row-even bg-white'} key={dataItem.id}>
                        
                        <TableCell>
                            <TableCellInner className='bg-gray-200 my-1 mx-1 px-1 py-1 h-full'>
                                {dataItem.title}
                            </TableCellInner>                        
                        </TableCell>

                        <TableCell>                        
                            <TableCellInner className='bg-gray-200 my-1 mx-1 px-1 py-1 h-full'>
                                {dataItem.executiveSummary}
                            </TableCellInner>  
                        </TableCell>

                        <TableCell>
                            <TableCellInner className='bg-gray-200 my-1 mx-1 px-1 py-1 h-full'>  
                                {dataItem.dataSources.map((dataSource,index) =>(
                                    <span key={dataItem.id}>{dataSource.title},</span>
                                ))}
                            </TableCellInner >  
                        </TableCell>

                        <TableCell>
                            <TableCellInner className='bg-gray-200 my-1 mx-1 px-1 py-1 h-full'>
                                <div className='flex gap-1 items-center px-1 py-1 border-solid border-x rounded border-gray-500'>                                    
                                    <div className={["avatar w-8 h-8 rounded-full border-2 border-green-700 border-solid",`bg-[url("${dataItem.contact.imgUrl}")]`].join(' ')}></div>
                                    <div className='flex flex-col'>
                                        <div>{dataItem.contact.name}</div>
                                        <div>{dataItem.contact.email}</div>
                                    </div> 
                                </div>  
                                
                                
                            </TableCellInner>                          
                        </TableCell>

                    </TableRow>
                ))}
            </tbody>

            <tfoot>
                
            </tfoot>
          

            

         </table>       

    )
}
    
