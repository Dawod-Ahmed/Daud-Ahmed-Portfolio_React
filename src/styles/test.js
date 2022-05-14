const [testimonialData,setTestimonialData]=useState([1,2,3,4,5,6]);



{/* {testimonialData.map((value,index)=>{
  return(<>
   */}
   <div class="carousel-item">
   <img
     src={ReviewImage4}
     class="testimonial-image d-block w-100"
     alt="img"
   />
   <div class="carousel-caption d-none d-md-block">
     <img src={CommaTop} alt="img" className="commaUp comma" />
     <div className="star-parent d-flex">
       <img src={FullFillStar} alt="img" className="star pr-2" />
       <img src={FullFillStar} alt="img" className="star pr-2" />
       <img src={FullFillStar} alt="img" className="star pr-2" />
       <img src={FullFillStar} alt="img" className="star pr-2" />
       <img src={FullFillStar} alt="img" className="star pr-2" />
     </div>
     <p className="carousel-heading">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
       ex eveniet earum maxime a amet magnam dolor autem id, ea aut
       aspernatur eius dolorum omnis dicta molestias dolores quae
       itaque.
     </p>
     <p className="carousel-paragraph">
       Manager of Al Udan Office Services
     </p>
     <img src={CommaDown} alt="img" className="commaDown comma" />
   </div>
 </div>

 {/*   
</>)
// })} */}


.comma{
    width: 32px;
}

.star{
    padding-right: 5px;
}

.testimonials-section{
  padding-bottom: 170px;
}
.carousel{
  height: 500px;
  display: flex;
  align-items: center;
  padding-top: 100px;
}
.carousel-control-btn{
  top: 500px !important;
}
.carousel-indicators{   
   top: 550px;
}

const [testimonialData, setTestimonialData] = useState([
  {RewiewStar:5,rewiewDetail:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",personImage:ReviewImage4,personName:"Jhon Smith",
 personCompany:" Manager of Al Udan Office Services"},
  {RewiewStar:5,rewiewDetail:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",personImage:ReviewImage4,personName:"Jhon Smith",
 personCompany:" Manager of Al Udan Office Services"},
  {RewiewStar:5,rewiewDetail:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",personImage:ReviewImage4,personName:"Jhon Smith",
 personCompany:" Manager of Al Udan Office Services"},
  {RewiewStar:5,rewiewDetail:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",personImage:ReviewImage4,personName:"Jhon Smith",
 personCompany:" Manager of Al Udan Office Services"},
  {RewiewStar:5,rewiewDetail:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",personImage:ReviewImage4,personName:"Jhon Smith",
 personCompany:" Manager of Al Udan Office Services"},
  {RewiewStar:5,rewiewDetail:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",personImage:ReviewImage4,personName:"Jhon Smith",
 personCompany:" Manager of Al Udan Office Services"},


]);

