import './styles.css'

function CenteredCard ({children}){
    return(

        <div className="div__Card">
            <span>
                {children}
            </span>
        </div>

    )
}

export default CenteredCard