

const JustAdded = () => {
const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let index = 1; index <= digit; index ++) {
        thumbnails.push(comp)
    }
    return thumbnails
}    
return (<>
<div className="just-added-list">
    <h3 className="just-added-list__title">Just Added</h3>
    <div className="just-added-list__thumbnails">
  
    {loopComp(
         (<div className="just-added-list__thumbnail">
         <img src="https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20170326/f04da2db14841a419ea21f.jpg" />
         <div className="just-added-list__top-layer">
             <i className="fas fa-play" />
         </div>
          </div>), 10
    )}
    </div>
</div>
</>)
}
export default JustAdded