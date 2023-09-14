

const MediaRow = () => {
const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let index = 1; index <= digit; index ++) {
        thumbnails.push(comp)
    }
    return thumbnails
}    
return (<>
<div className="media-row">
    <h3 className="media-row__title">Just Added</h3>
    <div className="media-row__thumbnails">
  
    {loopComp(
         (<div className="media-row__thumbnail">
         <img src="https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20170326/f04da2db14841a419ea21f.jpg" />
         <div className="media-row__top-layer">
             <i className="fas fa-play" />
         </div>
          </div>), 10
    )}
    </div>
</div>
</>)
}
export default MediaRow