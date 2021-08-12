import React,{useState} from 'react'
import Styles from "./pagination.styles"
import leftArr from "../../../assets/images/left-arr.svg"
import rightArr from "../../../assets/images/right-arr.svg"


const Pagination = ({
    onChange,
    totalPage,
    currentPage=1
}) => {
    const [page,setPage] = useState(currentPage);
    const handleChange = (newPage) => {
        if(newPage>totalPage||newPage<1||newPage==page) return 0;
        setPage(newPage);

        if(onChange) onChange(newPage);
    }
    return (
        <Styles>
            <div className="left-arr arrow" onClick = {() => handleChange(page-1)}>
                <img src={leftArr} alt="<"/>
            </div>
            <ul className="pagination">
                {[...Array(Number(totalPage))].map((item,i )=> {
                    return <li key={i} onClick={() => handleChange(i+1)} className={page==i+1?"active":null}>{i+1}</li>
                })}
            </ul>
            <div className="right-arr arrow" onClick = {() => handleChange(page+1)}>
                <img src={rightArr} alt=">"/>
            </div>
        </Styles>
    )
}

export default Pagination
