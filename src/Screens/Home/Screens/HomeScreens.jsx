import React,{useEffect, useState} from "react";
import education from "../../../Resource/education.json"
import Navigation from "../../../Components/Navigation"
import "../../../App.css";
import { Link, useHistory } from "react-router-dom";
export default function HomeScreens(){
    <Navigation></Navigation>
    const history = useHistory();

    const hanldeClick = (slug) => {
        history.push(`/details/${slug}`)
    }
    const [like, setLike] = useState([])
    const getStore = () => {
        const likeStored = localStorage.getItem('like-storage')
        likeStored === null ? setLike([]) : setLike(JSON.parse(likeStored))
    }
    const setStore = (data) => {
        localStorage.setItem("like-storage",JSON.stringify(data))
        setLike(data)
    }
    
    useEffect(() => {
        getStore()
    }, [])
    const handleLike = (slug) => {
        const temp = [...like]
        const position = temp.indexOf(slug)
        if(position === -1){
            temp.push(slug)
        }else{
            temp.splice(position,1)
        }
        setStore(temp)
    }
    const lists = education?.course?.map((element, index) => {
        return (
            <div key={index} className="col-md-6 col-sm-12 col-lg-4 mt-3">
                <div  className="course-item">
                    <Link to={`details/${element.slug}`}> 
                        <img className='course-image' src={element.image} alt="" />
                    </Link>
                    {
                        like && like.length  === 0 ? 
                        <div className='like-wrapper'
                        onClick={() => handleLike(element.slug)}>
                            <i class='bx bxs-heart'></i>
                            <span>Thêm vào yêu thích</span>
                        </div> :
                        like.includes(element.slug) ? 
                            <div className='like-wrapper active'
                            onClick={() => handleLike(element.slug)}>
                                <i class='bx bxs-heart'></i>
                                <span>Hủy thích</span>
                            </div>
                            :
                            <div className='like-wrapper'
                            onClick={() => handleLike(element.slug)}>
                                <i class='bx bxs-heart'></i>
                                <span> Thêm vào yêu thích</span>
                            </div>
                    }
                    <div className="course-body">
                        <h3 className="course-name" onClick={() => {hanldeClick(element.slug)}}>{element.name}</h3>
                        <div class="course-info"><span>Ngày khai giảng: </span>{element.startDate}</div>
                        <div class="course-info"><span>Trình độ: </span>{element.level}</div>
                        <div class="course-info"><span>Lịch học: </span>{element.schedule}</div>
                        <div class="course-info"><span>Thời gian:</span> {element.time}</div>
                        <div class="course-info"><span>Dựng phim cơ bản:</span> {element.slug}</div>
                    </div>
                    <div className="course-bottom"> Giảm 15% học phí khi đăng ký trước 30/1/2022</div>
                </div>
            </div>
        )
    })
    return(
        <div className='container course-container'>
            <div className="row course-list">
                {lists}
            </div>
        </div>
    )
}