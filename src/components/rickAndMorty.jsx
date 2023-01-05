
import React, { Suspense } from 'react'
import { Card } from './card.jsx'
import useFetch from '../hooks/custom/useFetch'
import { Spinner } from './spinner.jsx'
import {useParams} from 'react-router-dom'

export const RickAndMorty = () => {

  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character')

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "2rem" }}>
        <div className="container md:w-900 w-700 flex flex-wrap">
          {loading ? (
              <div class="flex justify-center items-center w-full h-64">
                <Spinner />
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


