import React from 'react';
import { Header } from '~/components/Header/Header';
import { Heading } from '~/components/Heading/Heading';
import { Main } from '~/components/Main/Main';
import { Footer } from '~/components/Footer/Footer';



export interface SingleQuantumViewProps {
  
}

export const SingleQuantumView = ({ }: SingleQuantumViewProps) => {
    
    
    const Overview = ({}) => {
        return (
            <>
                <h2 className='text-head4'>Overview</h2>
                
                <div className='py-4'>
                    <h3 className='text-head3'>Executive Summary</h3>
                    <p className='text-base'>
                        The Sales Performance quantum provides data on the performance of sales teams and individual sales representatives. It tracks key metrics such as sales revenue, conversion rates, and customer acquisition costs to provide insights into sales performance.
                    </p>
                </div>

                <div className='py-4'>
                    <h3 className='text-head3'>Source Data</h3>
                    <p className='text-base'>
                        This quantum is sourced from the company's CRM system, which tracks sales activities and customer interactions. It also utilizes data from the company's financial system to track revenue and expenses related to sales.
                    </p>
                </div>

                <div className='py-4'>
                    <h3 className='text-head3'>Access Information</h3>
                    <p className='text-base'>
                        To access this quantum, users must have appropriate permissions and credentials for the company's CRM and financial systems. Security protocols must also be followed to protect sensitive sales data.
                    </p>
                </div>

                <div className='py-4'>
                    <h3 className='text-head3'>Drilldown to API</h3>
                    <p className='text-base'>
                        The Sales Performance quantum can be accessed through the company's API, allowing for real-time data retrieval and analysis.
                    </p>
                </div>

                <div className='py-4'>
                    <h3 className='text-head3'>Data Schema</h3>
                    <p className='text-base'>
                        The data schema for this quantum includes fields such as sales revenue, number of sales, conversion rates, and customer acquisition costs. It also includes data on individual sales representatives, such as their performance and targets.
                    </p>
                </div>

                <div className='py-4'>
                    <h3 className='text-head3 '>Metrics</h3>
                    <p className='text-base'>
                        Key metrics provided by this quantum include:  
                        total sales revenue, average conversion rate, and individual sales representative performance. These metrics can be used to track sales performance over time and make data-driven decisions to improve sales strategies.
                    </p>
                </div>
                

                


            
            
            
            
            </>
        )
    }

    const Meta = ({}) => {
        return (
            <>
                <div className='py-4'>
                    <h3 className='text-head5'>Data Contributors</h3>
                    #Add Profile Card Components
                </div>
            </>
        )
    }




    return (
        <div className='relative'>
       
        <Header
            onCreateAccount={() => {}}
            onLogin={() => {}}
            onLogout={() => {}}
            user={{
                name: 'Donnie Minion'
            }}
        />

        <Heading
        onPrimaryClick={() => {}}
        onSecondaryClick={() => {}}
        primaryLabel="Follow"
        secondaryLabel="Request Access"
        title="Sales Performance"
        
        />

        <Main
        slot1={<Overview/>}
        slot1Styles="w-4/5 "
        slot2={<Meta/>}
        slot2Styles=" w-1/5 "
        
        />


        <Footer />
     </div>

    )
}