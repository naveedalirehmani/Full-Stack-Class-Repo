
import React, { Suspense, useEffect } from 'react'
import { Card } from './card.jsx'
import { Spinner } from './spinner.jsx'
import PaginationBar from './pagination.jsx'
import { useSearchParams } from 'react-router-dom'
import CardSkeleton from './cardSkeleton.jsx'
import { useQuery } from 'react-query'
import { rickAndMorty } from '../query/quries.js'

export const RickAndMorty = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const { data, loading, error, refetch, } = useQuery("RICK_AND_MORTY", () => rickAndMorty(currentPageNumber))


  const currentPageNumber = searchParams.get('page')

  useEffect(() => {
    if (currentPageNumber < 1) {
      setSearchParams({ page: 1 })
    } else if (currentPageNumber > 42) {
      setSearchParams({ page: 42 })
    }

  }, [currentPageNumber])




  // const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${currentPageNumber}`)

  return (
    <>
      <div>
        <PaginationBar refetch={refetch}></PaginationBar>
        <div className="container md:w-900 w-700 flex flex-wrap">
          {loading ? (
            <div class="flex justify-center items-center w-full h-64 flex flex-wrap ">
              {/* <Spinner /> */}

              {loading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(_ => {
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


