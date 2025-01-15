import React from 'react'
import { CategoryStyled } from './Category.Styled'
import { Descriptions } from 'antd'

const Category = () => {

    const cards = [
        {
            title:"Fitness centres",
            descriptions:"Gym, Yoga, Zumba, Aerobic.. etc",
            imgLink:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736319552284.png"
        },
        {
            title:"Game zone",
            descriptions:"Football, Tennis, badminton Etc",
            imgLink:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736319133154.png"
        },
        {
            title:"Rapha Mart",
            descriptions:"Gymwear, workout equipments, ",
            imgLink:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736319607322.png"
        },
        {
            title:"Virtual Fitness",
            descriptions:"workout from anywhere ",
            imgLink:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736319636656.png"
        },
    ]
  return (
    <>
        <CategoryStyled>
            <div className='category-container'>
                <h3>Category</h3>
                <div className='category-deck'>
                    {
                        cards?.map((item:any)=>{
                            return (
                                <>
                                    <div className='category-card'>
                                        <h5>{item?.title}</h5>
                                        <p className='category-descriptions'>{item?.descriptions}</p>
                                        <div className='card-img-container'>
                                            <img className='card-img' src={item?.imgLink} alt={item?.title} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </CategoryStyled>
    </>
  )
}

export default Category