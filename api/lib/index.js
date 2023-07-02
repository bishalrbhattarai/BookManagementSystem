const showError=(error,next)=>{
    console.error(error)

    next({
        message:'problems while processing request.',
        status:400
    })
}

module.exports = {showError}