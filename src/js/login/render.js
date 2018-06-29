const template = (opts = {}) => {
    const tpl = `
        <div> 
        <p></p>
        </div>
    `
    return tpl
}


export default (conf = {}) => {
    conf.container.innerHtml = template(conf)
}