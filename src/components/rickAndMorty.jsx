
import React, { Suspense } from 'react'
import { Card } from './card.jsx'
import useFetch from '../hooks/custom/useFetch'
import { Spinner } from './spinner.jsx'
import PaginationBar from './pagination.jsx'
import { useSearchParams } from 'react-router-dom'
import CardSkeleton from './cardSkeleton.jsx'

export const RickAndMorty = () => {

  const [searchParams,setSearchParams] = useSearchParams()

  const currentPageNumber = searchParams.get('page')
  
  const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${currentPageNumber}`)
  
  return (
    <>
      <div>
          <PaginationBar></PaginationBar>
        <div className="container md:w-900 w-700 flex flex-wrap">
          {loading ? (
              <div class="flex justify-center items-center w-full h-64 flex flex-wrap ">
                {/* <Spinner /> */}
                
                {[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0].map(_=>{
                  return <CardSkeleton></CardSkeleton>
                })}
                
              </div>
            ) : (
              <Suspense fallback={
                <div class="flex justify-center items-center w-full h-64">
                  <Spinner />
                </div>
              }>
                {data?.results.map((charactor, index) => {
                  return <Card {...charactor}></Card>
                })
                }
              </Suspense>
            )}
        </div>
      </div>
    </>
  )
}


export default RickAndMorty;


