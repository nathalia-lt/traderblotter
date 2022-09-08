import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import Toggle from 'react-toggle';
import "react-toggle/style.css"

export default function Header( { lightModeOn, toggleClass, toggleTextAlt,handleToggleChange } ) {

    function handleGitHubClick() {
        window.open('https://github.com/nathalia-lt/traderblotter')
    }

    function handleLinkedinClick() {
        window.open('https://www.linkedin.com/in/nathaliatroina/')
    }


    return (
        <div className='headerContainer' >
            <Toggle
                defaultChecked={!lightModeOn}
                icons={false}
                className={toggleClass}
                onChange={handleToggleChange} />

            <div className='title' >
                <h1>Trader Blotter </h1>
                <img className={toggleTextAlt} src="https://img.icons8.com/ios/500/000000/graph--v1.png" alt='' />
            </div>
            <div className='icons' >
                <img className={toggleTextAlt} src={github} onClick={handleGitHubClick} alt='' />
                <img src={linkedin} onClick={handleLinkedinClick} alt='' />
            </div>
        </div>
    )
}