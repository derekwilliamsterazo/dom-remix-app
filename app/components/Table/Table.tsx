import React, { Children, PropsWithChildren, ReactNode } from 'react';
import './table.css'


const global = {
    px:'px-3',
    py:'py-2',
    border:'border-solid border-gray-200'

}

function isOdd(n:number) {
    return Math.abs(n % 2) == 1;
 }



interface TableRowProps extends PropsWithChildren {
   rowindex:number
       
}

const TableRow = ({rowindex,...props }:TableRowProps) => {
    const setClass = isOdd(rowindex) ? 'bg-gray-100': 'bg-white';

    return (
        <div role='row' aria-rowindex={rowindex} className={['flex w-full border-b',setClass,global.border].join(' ')} {...props}>
           
        </div>
    )
}

const TableHeadCell = ({...props}) => {
    return (
        <div role='columnheader' className={['table-head w-full text-head5 font-bold ',global.px, global.py ].join(' ')} {...props}></div>
    )
}

const TableCell = ({...props}) => {
    return (
        <div role='cell ' className={[' w-full', global.px, global.py ].join(' ')} {...props}></div>
    )
}

const TableCellInner = ({...props}) => {
    return (
        <div className='w-full'{...props}></div>
    )
}


const Columns = [
    {id:'0a', label:'Title', cellWidth:''},
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
        title: "Fuel1 Price",
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
    label:string;
    description:string;    
}
    

export const Table = ({ data=Quantums, columnHeadings=Columns,label="Quantums", description="Quantums", ...props }: TableProps) => {
    let rowCount = data.length
    
    return (
         <div role='table' aria-label={label} aria-describedby={description} aria-rowcount={rowCount}
              className={['table-base font-sans text-sm w-full border',global.border].join(' ')} {...props}>
            
            <div role='rowgroup'>
                <TableRow rowindex={0} >
                    { columnHeadings.map((columnHead, index) => (                    
                        <TableHeadCell key={index} className="w-1/2">
                            <TableCellInner >
                                {columnHead.label}
                            </TableCellInner>                            
                        </TableHeadCell>
                    ))}
                </TableRow>
            </div>

            <div role='rowgroup'>
                { data.map((dataItem, index) => ( 
                    
                  <TableRow key={dataItem.id} rowindex={index + 1} >
                        
                        <TableCell>
                            <TableCellInner className=''>
                                {dataItem.title}
                            </TableCellInner>                        
                        </TableCell>

                        <TableCell>                        
                            <TableCellInner className=''>
                                {dataItem.executiveSummary}
                            </TableCellInner>  
                        </TableCell>

                        <TableCell>
                            <TableCellInner className=' '>  
                                {dataItem.dataSources.map((dataSource,index) =>(
                                    <span key={dataItem.id}>{dataSource.title},</span>
                                ))}
                            </TableCellInner >  
                        </TableCell>

                        <TableCell>
                            <TableCellInner className=''>
                                
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
            </div>

            <div>
                table footer
            </div>
          

            

         </div>       

    )
}
    
