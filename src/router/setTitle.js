const title="预定系统"
const setTitle = (to,from,next)=>{
    // eslint-disable-next-line no-console
    console.log(to,from)
    if(to.meta.title){
        window.document.title = `${title}-${to.meta.title}`
    }
    next()
}
export default setTitle