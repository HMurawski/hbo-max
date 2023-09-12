import Image from 'next/image'

const ForYouList = () => {
const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let index = 1; index <= digit; index ++) {
        thumbnails.push(comp)
    }
    return thumbnails
}    
return (<>
<div className="foryou-list">
    <h3 className="foryou-list__title">For You</h3>
    <div className="foryou-list__thumbnails">
  
    {loopComp(
         (<div className="foryou-list__thumbnail">
         <img src="https://www.lifeandstylemag.com/wp-content/uploads/2018/10/hp1-poster.jpg?w=1180&quality=86&strip=all" />
         <div className="foryou-list__top-layer">
             <i className="fas fa-play" />
         </div>
          </div>), 10
    )}
    </div>
</div>
</>)
}
export default ForYouList