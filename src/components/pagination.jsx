import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaginationBar = ({ disabled, paginate }) => {

    const [params, setParams] = useSearchParams()

    const currentPage = params.get('page')

    const paginationHandler = (value) => {

        if (value === 'prev' && currentPage != "1") {
            setParams({page:currentPage-1})
        }
        else if (value === 'next' && currentPage != "42") {
            setParams({page:(+currentPage)+1})
        }

    }

    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item"><button onClick={() => paginationHandler('prev')}
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-blue-300 focus:shadow-none"
                    >Previous</button></li>
                    <li className="page-item"><button onClick={() => paginationHandler('next')}
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-blue-300 focus:shadow-none"
                    >Next</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default PaginationBar