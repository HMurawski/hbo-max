

const PosterView = () => {
const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let index = 1; index <= digit; index ++) {
        thumbnails.push(comp)
    }
    return thumbnails
}    
return (<>
<div className="poster-view-list">
    <h3 className="poster-view-list__title">Movies</h3>
    <div className="poster-view-list__thumbnails">
  
    {loopComp(
         (<div className="poster-view-list__thumbnail">
         <img src="https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20170326/f04da2db14841a419ea21f.jpg" />
         <div className="poster-view-list__top-layer">
             <i className="fas fa-play" />
         </div>
          </div>), 10
    )}
    </div>
</div>
</>)
}
export default PosterView