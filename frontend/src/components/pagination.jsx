import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaginationBar = (props) => {

    const [params, setParams] = useSearchParams()

    const currentPage = params.get('page')

    const paginationHandler = (value) => {

        if (value === 'prev') {
            setParams({page:currentPage-1})
            props.refetch()
        }
        else if (value === 'next') {
            setParams({page:(+currentPage)+1})
            props.refetch()
        }

    }

    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item"><button disabled={currentPage==1} onClick={() => paginationHandler('prev')}
                        className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:text-gray-800 hover:bg-blue-300 focus:shadow-none ${currentPage==1?"text-gray-400" : 'text-gray-800'}`}
                    >Previous</button></li>
                    <li className="page-item"><button disabled={currentPage==42} onClick={() => paginationHandler('next')}
                        className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:text-gray-800 hover:bg-blue-300 focus:shadow-none ${currentPage==42?"text-gray-400" : 'text-gray-800'}`}
                    >Next</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default PaginationBar